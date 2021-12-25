package main

import "testing"

func TestAstro(t *testing.T) {
	tables := []struct {
		path   string
		lat    float64
		long   float64
		tol    float64
		tolMag float64
		types  []string
		date   string
	}{
		{
			path:   "ngc2000Final.txt",
			lat:    47.740372,
			long:   -122.222695,
			tol:    70,
			tolMag: 10,
			types:  []string{"Gx", "OC", "Gb", "Nb", "Pl", "CpN", "Ast", "Kt", "TS", "DS", "SS", "Q", "U", "D", "PD"},
			date:   "2100-10-16"},
	}
	//want: [][]interface{{2281, 76, 5, "Open", "star", "cluster", "Auriga"}, {2403, 72, 8, "Galaxy", "Camelopardalis"}, {2683, 73, 9, "Galaxy", "Lynx"}, {2841, 76, 9, "Galaxy", "Ursa", "Major"}},

	for _, table := range tables {
		records := readCsvFile(table.path)
		output := astro(records[:], table.lat, table.long, table.long, table.tolMag, table.types, table.date, 0, 0, 0)
		if len(output) != 1 {
			t.Errorf("got: %v, want: .", output[:3])
		}
	}
}
