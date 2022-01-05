package main

import (
	"encoding/csv"
	"encoding/json"
	"fmt"
	"log"
	"math"
	"net/http"
	"os"
	"sort"
	"strconv"
	"strings"
	"time"
)

type object struct {
	Id   string  `json:"id"`
	Dec  float64 `json:"dec"`
	Mag  int     `json:"mag"`
	Type string  `json:"type"`
	Con  string  `json:"con"`
}

func Sum(x int, y int) int {
	return x + y
}

var sample []object

var star *object = &object{
	Id:   "38",
	Dec:  23.23234,
	Mag:  2,
	Type: "star",
	Con:  "fun",
}
var dirname string

func astroHandler(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		r.ParseForm()
		lat, _ := strconv.ParseFloat(r.Form["lat"][0], 64)
		long, _ := strconv.ParseFloat(r.Form["long"][0], 64)
		tol, _ := strconv.ParseFloat(r.Form["tol"][0], 64)
		tolMag, _ := strconv.ParseFloat(r.Form["tolMag"][0], 64)
		UNIXtime, _ := strconv.ParseInt(r.Form["weatherTime"][0], 10, 64)
		if len(r.Form["weatherTime"][0]) <= 0 {
			UNIXtime = 0
		}
		date := r.Form["date"][0]
		moonrise, _ := strconv.ParseInt(r.Form["moonrise"][0], 10, 64)
		moonset, _ := strconv.ParseInt(r.Form["moonset"][0], 10, 64)
		types := strings.Split(r.Form["type"][0], ",")
		moonPhase, _ := strconv.ParseFloat(r.Form["phase"][0], 64)
		var records [][]string
		if homeDir == "/home/pi" {
			records = readCsvFile("/home/pi/github/Algorithums-and-Astronomy-Calculator/astroTargetFinder/ngc2000Final.txt")
		} else {
			records = readCsvFile("/home/alexander_i_bakalov/AAC/astroTargetFinder/ngc2000Final.txt")
		}
		finalArray := astro(records[:], lat, long, tol, tolMag, types, date, UNIXtime, moonrise, moonset, moonPhase)
		j, _ := json.Marshal(finalArray)
		w.Write(j)
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
		fmt.Fprintf(w, "I can't do that.")
	}
}

func readCsvFile(filePath string) [][]string {
	f, err := os.Open(filePath)
	if err != nil {
		log.Fatal("Unable to read input file "+filePath, err)
	}
	defer f.Close()

	csvReader := csv.NewReader(f)
	records, err := csvReader.ReadAll()
	if err != nil {
		log.Fatal("Unable to parse file as CSV for "+filePath, err)
	}
	return records
}

var amTesting bool
var homeDir string

func main() {
	homeDir, _ = os.UserHomeDir()
	if len(os.Args) > 1 {
		dirname = os.Args[1]
	}
	if dirname == "test" {
		amTesting = true
		records := readCsvFile("/home/runner/work/Algorithms-and-Astronomy-Calculator/Algorithms-and-Astronomy-Calculator/astroTargetFinder/ngc2000Final.txt")
		var types []string = []string{"Gx", "OC", "Gb", "Nb", "Pl", "CpN", "Ast", "Kt", "TS", "DS", "SS", "Q", "U", "D", "PD"}
		fmt.Print(astro(records[:], 47.740372, -122.222695, 70, 10, types, "2100-10-16", 0, 0, 0, 0))
	} else {
		http.HandleFunc("/astro", astroHandler)
		sample = append(sample, *star, *star, *star)
		log.Println("Go!")
		log.Fatal(http.ListenAndServe(":8001", nil))
	}
}

func astro(data [][]string, lat float64, long float64, tol float64, tolMag float64, types []string, date string, UNIXtime int64, moonrise int64, moonset int64, moonPhase float64) [][]interface{} {
	var avgALTArray [][]interface{}
	var ALT2 float64
	var noon float64
	var daysSinceJ2000 float64

	janFirst, _ := time.Parse(time.RFC3339, "2000-01-01T00:00:00Z")
	targetDate := time.Now()

	if len(date) > 0 {
		targetDate, _ = time.Parse(time.RFC3339, date+"T00:00:00Z")
	}

	diff := targetDate.Sub(janFirst)
	if UNIXtime != 0 {
		searchTime := time.Unix(UNIXtime, 0)
		searchTimeOut := (searchTime.Hour() * 60) + searchTime.Minute()
		noon = float64(searchTimeOut / 60)
	} else {
		if moonPhase < 40 && moonPhase > 50 && moonPhase != 0 && moonrise != 0 && moonset != 0{
			noon = float64(((moonset - moonrise) / 2) + moonrise)
		} else {
			times := sunsetriseTime(lat, long, targetDate)
			noon = (times[2] / 60) - 12
		}
	}
	daysSinceJ2000 = (diff.Hours() / 24)
	if noon < 0 {
		noon += 24
	}
	LST := findLST(noon, daysSinceJ2000, long)
	for i := 0; i <= len(data)-1; i++ {
		RAhour, _ := strconv.ParseFloat(data[i][2], 64)
		RAMin, _ := strconv.ParseFloat(data[i][3], 64)

		RADeg := (RAhour + (RAMin / 60)) * 15
		DECDegs, _ := strconv.ParseFloat(data[i][4], 64)
		DECMin, _ := strconv.ParseFloat(data[i][5], 64)

		DECDeg := DECDegs + (DECMin / 60)

		HA := LST - RADeg
		if HA < 0 {
			HA += 360
		}
		ALT := (math.Sin(toRadians(DECDeg)) * math.Sin(toRadians(lat))) + (math.Cos(toRadians(DECDeg)) * math.Cos(toRadians(lat)) * math.Cos(toRadians(HA)))
		ALT2 = toDegrees(math.Asin(ALT))

		if amTesting {
			ALT2 = math.Round(ALT2)
		}
		toPush := []interface{}{data[i][0], ALT2}
		avgALTArray = append(avgALTArray, toPush)
	}
	sort.Slice(avgALTArray[:], func(i, j int) bool {
		return avgALTArray[i][1].(float64) > avgALTArray[j][1].(float64)
	})
	return formOutput(avgALTArray, data, tol, tolMag, types)
}
func formOutput(avgArray [][]interface{}, data [][]string, minAccALT float64, tolMag float64, types []string) [][]interface{} {
	var final [][]interface{}

	typeKey := make(map[string]string)
	typeKey["Gx"] = "Galaxy"
	typeKey["OC"] = "Open star cluster"
	typeKey["Gb"] = "Globular star cluster"
	typeKey["Nb"] = "Bright emission or reflection nebula"
	typeKey["Pl"] = "Planetary nebula"
	typeKey["CpN"] = "Cluster associated with nebulosity"
	typeKey["Ast"] = "Asterism"
	typeKey["Kt"] = "Knot or nebulous region in an external galaxy"
	typeKey["TS"] = "Triple star"
	typeKey["DS"] = "Double star"
	typeKey["SS"] = "Single star"
	typeKey["Q"] = "Uncertain type or may not exist"
	typeKey["U"] = "Unidentified at the place given, or type unknown"
	typeKey["D"] = "Object called nonexistent in the RNGC"
	typeKey["PD"] = "Photographic plate defect"

	constellationKey := make(map[string]string)
	constellationKey["And"] = "Andromeda"
	constellationKey["Aps"] = "Apus"
	constellationKey["Aqr"] = "Aquarius"
	constellationKey["Ari"] = "Aries"
	constellationKey["Aur"] = "Auriga"
	constellationKey["Ant"] = "Antlia"
	constellationKey["Boo"] = "Boötes"
	constellationKey["Cae"] = "Caelum"
	constellationKey["Cam"] = "Camelopardalis"
	constellationKey["Cnc"] = "Cancer"
	constellationKey["CVn"] = "Canes Venatici"
	constellationKey["CMa"] = "Canis Major"
	constellationKey["CMi"] = "Canis Minor"
	constellationKey["Cap"] = "Capricornus"
	constellationKey["Car"] = "Carina"
	constellationKey["Cas"] = "Cassiopeia"
	constellationKey["Cen"] = "Centaurus"
	constellationKey["Cep"] = "Cepheus"
	constellationKey["Cet"] = "Cetus"
	constellationKey["Cha"] = "Chamaeleon"
	constellationKey["Cir"] = "Circinus"
	constellationKey["Col"] = "Columba"
	constellationKey["Com"] = "Coma Berenices"
	constellationKey["CrA"] = "Corona Australis"
	constellationKey["CrB"] = "Corona Borealis"
	constellationKey["Crv"] = "Corvus"
	constellationKey["Crt"] = "Crater"
	constellationKey["Cru"] = "Crux"
	constellationKey["Del"] = "Delphinus"
	constellationKey["Dor"] = "Dorado"
	constellationKey["Dra"] = "Draco"
	constellationKey["Equ"] = "Equuleus"
	constellationKey["Eri"] = "Eridanus"
	constellationKey["For"] = "Fornax"
	constellationKey["Gru"] = "Grus"
	constellationKey["Her"] = "Hercules"
	constellationKey["Hor"] = "Horologium"
	constellationKey["Hya"] = "Hydra"
	constellationKey["Hyi"] = "Hydrus"
	constellationKey["Ind"] = "Indus"
	constellationKey["Lac"] = "Lacerta"
	constellationKey["LMi"] = "Leo Minor"
	constellationKey["Lep"] = "Lepus"
	constellationKey["Lib"] = "Libra"
	constellationKey["Lup"] = "Lupus"
	constellationKey["Lyn"] = "Lynx"
	constellationKey["Lyr"] = "Lyra"
	constellationKey["Men"] = "Mensa"
	constellationKey["Mic"] = "Microscopium"
	constellationKey["Mus"] = "Musca"
	constellationKey["Nor"] = "Norma"
	constellationKey["Oct"] = "Octans"
	constellationKey["Oph"] = "Ophiuchus"
	constellationKey["Ori"] = "Orion"
	constellationKey["Pav"] = "Pavo"
	constellationKey["Peg"] = "Pegasus"
	constellationKey["Phe"] = "Phoenix"
	constellationKey["Pic"] = "Pictor"
	constellationKey["Psc"] = "Pisces"
	constellationKey["PsA"] = "Piscis Austrinus"
	constellationKey["Pup"] = "Puppis"
	constellationKey["Pyx"] = "Pyxis"
	constellationKey["Ret"] = "Reticulum"
	constellationKey["Sge"] = "Sagitta"
	constellationKey["Sgr"] = "Sagittarius"
	constellationKey["Sco"] = "Scorpius"
	constellationKey["Scl"] = "Sculptor"
	constellationKey["Sct"] = "Scutum"
	constellationKey["Sex"] = "Sextans"
	constellationKey["Tel"] = "Telescopium"
	constellationKey["Tri"] = "Triangulum"
	constellationKey["TrA"] = "Triangulum Australe"
	constellationKey["Tuc"] = "Tucana"
	constellationKey["UMa"] = "Ursa Major"
	constellationKey["UMi"] = "Ursa Minor"
	constellationKey["Vel"] = "Vela"
	constellationKey["Vir"] = "Virgo"
	constellationKey["Vol"] = "Volans"
	constellationKey["Vul"] = "Vulpecula"
	constellationKey["Ser"] = "Serpens"
	constellationKey["Aql"] = "Aquila"
	constellationKey["Tau"] = "Taurus"
	constellationKey["Cyg"] = "Cygnus"
	constellationKey["Mon"] = "Monoceros"
	constellationKey["Per"] = "Perseus"
	constellationKey["Gem"] = "Gemini"

	var outArray [][]interface{}

	for i := 0; i <= len(avgArray)-1; i++ {
		toPush := []interface{}{avgArray[i][0], avgArray[i][1]}

		if avgArray[i][1].(float64) >= float64(minAccALT) {
			outArray = append(outArray, toPush)
		}
	}
	n := 0
	for i := 0; i <= len(data)-1; i++ {
		if data[i][0] == outArray[n][0] {
			pushing := []interface{}{outArray[n][0], outArray[n][1], data[i][7], data[i][1], data[i][6]}
			outArray[n] = pushing
			n++
			if n >= len(outArray) {
				break
			}
			i = 0
		}
	}

	sort.Slice(outArray[:], func(i, j int) bool {
		if len(outArray[i]) < 3 || len(outArray[j]) < 3 {
			return false
		}
		one, _ := strconv.ParseFloat(outArray[i][2].(string), 64)
		two, _ := strconv.ParseFloat(outArray[j][2].(string), 64)
		return one < two
	})

	for i := 0; i <= len(outArray)-1; i++ {
		if len(outArray[i]) < 4 {
			continue
		}
		one, _ := strconv.ParseFloat(outArray[i][2].(string), 64)
		if one < tolMag && isGoodType(outArray[i][3].(string), types) {
			final = append(final, outArray[i])
		}
	}
	sort.Slice(final[:], func(i, j int) bool {
		one, _ := strconv.ParseFloat(final[i][2].(string), 64)
		two, _ := strconv.ParseFloat(final[j][2].(string), 64)
		return one < two
	})
	for i := 0; i <= len(final)-1; i++ {
		final[i][3] = typeKey[final[i][3].(string)]
		if final[i][3] == nil {
			final[i][3] = "Not cataloged!!"
		}
		final[i][4] = constellationKey[final[i][4].(string)]
		if final[i][4] == nil {
			final[i][4] = "Not in constellation!!"
		}
	}
	return final
}
func findLST(time float64, daysSinceJ2000 float64, long float64) float64 {
	LST := 100.46 + 0.985647*daysSinceJ2000 + long + 15*time
	if LST > 360 {
		LST -= 360
	} else if LST < 0 {
		for LST < 0 {
			LST += 360
		}
	}
	return LST
}

func sunsetriseTime(lat float64, long float64, targetDate time.Time) []float64 {
	day := targetDate.YearDay()

	y := ((float64(2) * math.Pi) / float64(365)) * (float64(day) - float64(365))

	eqtime := 229.18 * (0.000075 + 0.001868*math.Cos(y) - 0.032077*math.Sin(y) - 0.014615*math.Cos(2*y) - 0.040849*math.Sin(2*y))
	decl := 0.006918 - 0.399912*math.Cos(y) + 0.070257*math.Sin(y) - 0.006758*math.Cos(2*y) + 0.000907*math.Sin(2*y) - 0.002697*math.Cos(3*y) + 0.00148*math.Sin(3*y)

	haP := math.Acos(((math.Cos(toRadians(90.833))) / (math.Cos(toRadians(lat)) * math.Cos(decl))) - math.Tan(toRadians(lat))*math.Tan(decl))
	haP = toDegrees(haP)

	haM := -1 * math.Acos(((math.Cos(toRadians(90.833)))/(math.Cos(toRadians(lat))*math.Cos(decl)))-math.Tan(toRadians(lat))*math.Tan(decl))
	haM = toDegrees(haM)

	sunRiseSet1 := 720 - 4*(long+haP) - eqtime
	sunRiseSet2 := 720 - 4*(long+haM) - eqtime
	solarNoon := 720 - 4*long - eqtime
	output := []float64{sunRiseSet1, sunRiseSet2, solarNoon}
	return output
}

func toRadians(angle float64) float64 {
	return angle * (math.Pi / 180)
}

func toDegrees(angle float64) float64 {
	return angle * (180 / math.Pi)
}

func isGoodType(input string, types []string) bool {
	for i := 0; i <= len(types)-1; i++ {
		if input == types[i] {
			return true
		}
	}
	return false
}
