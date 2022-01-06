const mapImages = {
    '224': './Images/NGC224.jpg',
    'I4756': './Images/IC4756.jpg',
    '6709': './Images/NGC6709.jpg',
    '1807': './Images/NGC1807.jpg',
    '5457': './Images/NGC5457.jpg',
    '2244': './Images/NGC2244.jpg',
    '1039': './Images/NGC1039.jpg',
    '6871': './Images/NGC6871.jpg',
    '2129': './Images/NGC2129.jpg',
    '7686': './Images/NGC7686.jpg',
    '1758': './Images/NGC1758.jpg',
    '1664': './Images/NGC1664.jpg',
    '6910': './Images/NGC6910.jpg',
    '1893': './Images/NGC1893.jpg',
    '1528': './Images/NGC1528.jpg',
    '2175': './Images/NGC2175.jpg',
    '2169': './Images/NGC2169.jpg',
    '5904': './Images/NGC5904.jpg',
    '6913': './Images/NGC6913.jpg',
    '1245': './Images/NGC1245.jpg',
    '7789': './Images/NGC7789.jpg',
    '6882': './Images/NGC6882.jpg',
    '457': './Images/NGC457.jpg',
    '4472': './Images/NGC4472.jpg',
    '6885': './Images/NGC6885.jpg',
    '7086': './Images/NGC7086.jpg',
    '7380': './Images/NGC7380.jpg',
    '1857': './Images/NGC1857.jpg',
    '771': './Images/NGC771.jpg',
    '2281': './Images/NGC2281.jpg',
    '5272': './Images/NGC5272.jpg',
    '6940': './Images/NGC6940.jpg',
    '129': './Images/NGC129.jpg',
    '6811': './Images/NGC6811.jpg',
    '7209': './Images/NGC7209.jpg',
    '1444': './Images/NGC1444.jpg',
    '7160': './Images/NGC7160.jpg',
    '1545': './Images/NGC1545.jpg',
    '7078': './Images/NGC7078.jpg',
    '1647': './Images/NGC1647.jpg',
    '6866': './Images/NGC6866.jpg',
    '6802': './Images/NGC6802.jpg',
    '7082': './Images/NGC7082.jpg',
    'I4996': './Images/IC4996.jpg',
    'I5146': './Images/IC5146.jpg',
    '1582': './Images/NGC1582.jpg',
    '2236': './Images/NGC2236.jpg',
    'I4665': './Images/IC4665.jpg',
    '1502': './Images/NGC1502.jpg',
    '598': './Images/NGC598.jpg',
    '2168': './Images/NGC2168.jpg',
    '884': './Images/NGC884.jpg',
    '869': './Images/NGC884.jpg',
    '6819': './Images/NGC6819.jpg',
    '4569': './Images/NGC4569.jpg',
    '2068': './Images/NGC2068.jpg',
    '7654': './Images/NGC7510.jpg',
    '5024': './Images/NGC5024.jpg',
    '7510': './Images/NGC7510.jpg',
    '7538': './Images/NGC7510.jpg',
    'I1470': './Images/NGC7510.jpg',
    '6205': './Images/NGC6205.jpg',
    '7092': './Images/NGC7092.jpg',
    '7243': './Images/NGC7243.jpg',
    '3031': './Images/NGC3031.jpg',
    'I1396': './Images/IC1396.jpg',
    '2099': './Images/NGC2099.jpg',
    '281': './Images/NGC281.jpg',
    '1952': './Images/NGC1952.jpg',
    '2682': './Images/NGC2682.jpg',
    '752': './Images/NGC752.jpg',
    '188': './Images/NGC188.jpg',
    '1342': './Images/NGC1342.jpg',
    '2264': './Images/NGC2264.jpg',
    'I1848': './Images/IC1848.jpg',
    '6853': './Images/NGC6853.jpg',
    '3034': './Images/NGC3034.jpg',
    '4636': './Images/NGC4636.jpg',
    '4494': './Images/NGC4494.jpg',
    '1316': './Images/NGC1316.jpg',
    '1291': './Images/NGC1291.jpg',
    '1068': './Images/NGC1068.jpg',
    '1232': './Images/NGC1232.jpg',
    '1398': './Images/NGC1398.jpg',
    '1912': './Images/NGC1912.jpg',
    '1023': './Images/NGC1023.jpg',
    '1027': './Images/NGC1027.jpg',
    '2419': './Images/NGC2419.jpg',
    '2392': './Images/NGC2392.jpg',
    'I2149': './Images/IC2149.jpg',
    '1514': './Images/NGC1514.jpg',
    '205': './Images/NGC205.jpg',
    '221': './Images/NGC221.jpg',
    'I 342': './Images/IC342.jpg',
    '2403': './Images/NGC2403.jpg',
    '1960': './Images/NGC1960.jpg',
    '147': './Images/NGC147.jpg',
    '6341': './Images/NGC6341.jpg',
    'I1369': './Images/IC1369.jpg',
    '5194': './Images/NGC5194.jpg',
    '6229': './Images/NGC6229.jpg',
    '5055': './Images/NGC5055.jpg',
    '4736': './Images/NGC4736.jpg',
    '5195': './Images/NGC5195.jpg',
    '2683': './Images/NGC2683.jpg',
    '2841': './Images/NGC2841.jpg',
    '3077': './Images/NGC3077.jpg',
    '2366': './Images/NGC2366.jpg',
    '1569': './Images/NGC1569.jpg',
    '2273': './Images/NGC2273.jpg',
    '2128': './Images/NGC2128.jpg',
    '2344': './Images/NGC2344.jpg',
    '1501': './Images/NGC1501.jpg',
    '3587': './Images/NGC3587.jpg',
    '40': './Images/NGC40.jpg',
    '2232': './Images/NGC2232.jpg',
    '1981': './Images/NGC1981.jpg',
    '2287': './Images/NGC2287.jpg',
    '2422': './Images/NGC2422.jpg',
    '1976': './Images/NGC1976.jpg',
    '2537': './Images/NGC2537.jpg',
    '2460': './Images/NGC2460.jpg',
    '2541': './Images/NGC2541.jpg',
    '2500': './Images/NGC2500.jpg',
    '2639': './Images/NGC2639.jpg',
    '2371': './Images/NGC2371.jpg',
    '2242': './Images/NGC2242.jpg',
    'I 289': './Images/IC289.jpg',
    '1778': './Images/NGC1778.jpg',
    '2768': './Images/NGC2768.jpg',
    '2681': './Images/NGC2681.jpg',
    '2549': './Images/NGC2549.jpg',
    '2787': './Images/NGC2787.jpg',
    '2654': './Images/NGC2654.jpg',
    '2903': './Images/NGC2903.jpg',
    '2022': './Images/NGC2022.jpg',
    '2420': './Images/NGC2420.jpg',
    '2331': './Images/NGC2331.jpg',
    '7497': './Images/NGC7497.jpg',
    '3628': './Images/NGC3627.jpg',
    '3623': './Images/NGC3627.jpg',
    '3627': './Images/NGC3627.jpg',
    '4559': './Images/NGC4559.jpg',
    '1499': './Images/NGC1499.jpg',
    '2253': './Images/NGC2253.jpg',
    '2404': './Images/NGC2404.jpg',
    '2495': './Images/NGC2495.jpg',
    '2689': './Images/NGC2689.jpg',
    '2458': './Images/NGC2458.jpg',
    '1985': './Images/NGC1985.jpg',
    '2247': './Images/NGC2247.jpg',
    '2282': './Images/NGC2282.jpg',
    '1435': './Images/NGC1435.jpg',
    '1432': './Images/NGC1432.jpg',
    '1433': './Images/NGC1433.jpg',
    '1554': './Images/NGC1554.jpg',
    '1579': './Images/NGC1579.jpg',
    '1491': './Images/NGC1491.jpg',
    '2632': './Images/NGC2632.jpg',
    '2174': './Images/NGC2174.jpg',
    '2237': './Images/NGC2237.jpg',
    'I2168': './Images/IC2168.jpg',
    'I 446': './Images/IC446.jpg',
    'I2087': './Images/IC2087.jpg',
    'I 349': './Images/IC349.jpg',
    'I 417': './Images/IC417.jpg',
    'I 444': './Images/IC444.jpg',
    'I 405': './Images/IC405.jpg',
};

let user;
let pass;

if (window.location.search.length != 0) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    user = params.user
    pass = params.pass
    if (user != "" || user != undefined || pass != "" || pass != undefined) {
        document.getElementById("Long").value = "Loading..."
        document.getElementById("Long").readOnly = true
    }

    window.history.pushState("", "", "/astroTargetFinder");
    document.getElementById("favs").style.display = "block"
    document.getElementById("indicator2").innerHTML = "Logged in as: " + user
    document.getElementById("indicator").style.display = "block"

    fetch(
        'https://' + window.location.hostname + '/api/params?user=' + user + '&pass=' + pass,
        { method: 'GET' }
    )
        .then(response => response.text())
        .then(res => {
            res = JSON.parse(res)
            let type = res.type.split(",")

            if (!type.includes("Gx")) document.getElementById("Gx").checked = false;
            if (!type.includes("OC")) document.getElementById("OC").checked = false;
            if (!type.includes("Gb")) document.getElementById("Gb").checked = false;
            if (!type.includes("Nb")) document.getElementById("Nb").checked = false;
            if (!type.includes("Pl")) document.getElementById("Pl").checked = false;
            if (!type.includes("CpN")) document.getElementById("CpN").checked = false;
            if (!type.includes("Ast")) document.getElementById("Ast").checked = false;
            if (!type.includes("Kt")) document.getElementById("Kt").checked = false;
            if (!type.includes("TS")) document.getElementById("TS").checked = false;
            if (!type.includes("DS")) document.getElementById("DS").checked = false;
            if (!type.includes("SS")) document.getElementById("SS").checked = false;
            if (!type.includes("Q")) document.getElementById("Q").checked = false;
            if (!type.includes("U")) document.getElementById("U").checked = false;
            if (!type.includes("D")) document.getElementById("D").checked = false;
            if (!type.includes("PD")) document.getElementById("PD").checked = false;

            document.getElementById("tolerance").value = res.tol
            document.getElementById("toleranceMag").value = res.magTol
            document.getElementById("Long").value = res.lat + ", " + res.long
            document.getElementById("Long").readOnly = false;
        })
        .catch(error => console.log('error:', error));

    document.getElementById("prefs1").style.visibility = "hidden"
    document.getElementById("cookie").style.visibility = "hidden"
}

if (getCookie("checked") == "true" && document.getElementById("cookie") != null && user == undefined && pass == undefined) {
    document.getElementById("cookie").checked = true;
    document.getElementById("tolerance").value = getCookie("tol")
    document.getElementById("toleranceMag").value = getCookie("tolMag")
    let cookieTypes = getCookie("type").split(",")

    if (!cookieTypes.includes("Gx")) document.getElementById("Gx").checked = false;
    if (!cookieTypes.includes("OC")) document.getElementById("OC").checked = false;
    if (!cookieTypes.includes("Gb")) document.getElementById("Gb").checked = false;
    if (!cookieTypes.includes("Nb")) document.getElementById("Nb").checked = false;
    if (!cookieTypes.includes("Pl")) document.getElementById("Pl").checked = false;
    if (!cookieTypes.includes("CpN")) document.getElementById("CpN").checked = false;
    if (!cookieTypes.includes("Ast")) document.getElementById("Ast").checked = false;
    if (!cookieTypes.includes("Kt")) document.getElementById("Kt").checked = false;
    if (!cookieTypes.includes("TS")) document.getElementById("TS").checked = false;
    if (!cookieTypes.includes("DS")) document.getElementById("DS").checked = false;
    if (!cookieTypes.includes("SS")) document.getElementById("SS").checked = false;
    if (!cookieTypes.includes("Q")) document.getElementById("Q").checked = false;
    if (!cookieTypes.includes("U")) document.getElementById("U").checked = false;
    if (!cookieTypes.includes("D")) document.getElementById("D").checked = false;
    if (!cookieTypes.includes("PD")) document.getElementById("PD").checked = false;
}

let date = new Date();
function onSubmit(event) {
    if (event.submitter.id == "home_button") {
        event.preventDefault();
        window.location.href = "./";
    } else if (event.submitter.id == "login_button") {
        event.preventDefault();
        window.location.href = "./login/";
    } else if (event.submitter.id == "loc_button") {
        event.preventDefault();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            document.getElementById("p1").innerHTML = "Geolocation is not supported by this browser.";
        }
        function showPosition(position) {
            document.getElementById("Long").value = position.coords.latitude + ", " + position.coords.longitude;
        }
    } else {
        let timer = new Date();
        let [lat, long] = document.getElementById("Long").value.split(",");
        long = parseFloat(long);
        lat = parseFloat(lat);
        let dateToSend = document.getElementById("date43").value
        let types = []
        let Gx = document.getElementById("Gx");
        let OC = document.getElementById("OC");
        let Gb = document.getElementById("Gb");
        let Nb = document.getElementById("Nb");
        let Pl = document.getElementById("Pl");
        let CpN = document.getElementById("CpN");
        let Ast = document.getElementById("Ast");
        let Kt = document.getElementById("Kt");
        let TS = document.getElementById("TS");
        let DS = document.getElementById("DS");
        let SS = document.getElementById("SS");
        let Q = document.getElementById("Q");
        let U = document.getElementById("U");
        let D = document.getElementById("D");
        let PD = document.getElementById("PD");
        isWeatherGood(lat, long, dateToSend);
        let tol = document.getElementById("tolerance").value;
        let tolMag = document.getElementById("toleranceMag").value;

        if (Gx.checked) {
            types.push("Gx")
        }
        if (OC.checked) {
            types.push("OC")
        }
        if (Gb.checked) {
            types.push("Gb")
        }
        if (Nb.checked) {
            types.push("Nb")
        }
        if (Pl.checked) {
            types.push("Pl")
        }
        if (CpN.checked) {
            types.push("CpN")
        }
        if (Ast.checked) {
            types.push("Ast")
        }
        if (Kt.checked) {
            types.push("Kt")
        }
        if (TS.checked) {
            types.push("TS")
        }
        if (DS.checked) {
            types.push("DS")
        }
        if (SS.checked) {
            types.push("SS")
        }
        if (Q.checked) {
            types.push("Q")
        }
        if (U.checked) {
            types.push("U")
        }
        if (D.checked) {
            types.push("D")
        }
        if (PD.checked) {
            types.push("PD")
        }

        if (document.getElementById("cookie").checked) {
            setCookie("checked", "true", 365)
            setCookie("tol", tol, 365)
            setCookie("tolMag", tolMag, 365)
            setCookie("type", types, 365)
            setCookie("tol", tol, 365)
        } else {
            setCookie("checked", "false", 365)
        }

        if (user == undefined && pass == undefined) {
            fetch(
                'https://' + window.location.hostname + '/astro?lat=' + lat + '&long=' + long + '&tol=' + tol + '&tolMag=' + tolMag + '&type=' + types + "&date=" + dateToSend,
                { method: 'GET' }
            )
                .then(response => response.text())
                .then(finalData => {
                    updateUI(JSON.parse(finalData), timer, lat, long)
                })
                .catch(error => console.log('error:', error));
        } else if (user != undefined && pass != undefined) {
            fetch(
                'https://' + window.location.hostname + '/astro?lat=' + lat + '&long=' + long + '&tol=' + tol + '&tolMag=' + tolMag + '&type=' + types + "&date=" + dateToSend + "&user=" + user + "&pass=" + pass,
                { method: 'GET' }
            )
                .then(response => response.text())
                .then(finalData => {
                    updateUI(JSON.parse(JSON.parse(finalData)[0]), timer, lat, long, JSON.parse(finalData)[1])
                })
                .catch(error => console.log('error:', error));
        }
        event.preventDefault();
    }
    return false;
}

function ShowHideDivQuestion(event) {
    let thing = document.getElementsByClassName("tooltiptext")[0];
    thing.style.display = event.srcElement.checked ? "block" : "none"
    if (document.getElementsByClassName("checkboxes")[0].offsetWidth + document.getElementsByClassName("params")[0].offsetWidth > window.innerWidth * 0.64) {
        document.getElementsByClassName("tooltiptext")[0].style.marginLeft = "0";
    }
}

function updateUI(final, timer, lat, long, final2) {
    if (final[0] != 'null') {
        if (user == undefined) {
            final[0] = JSON.parse(final[0])
            final = final[0]
        }
        if (final.length == 1) {
            document.getElementById("p1").innerHTML = "Best target: " + (() => { let firstChar = final[0][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[0][0].split(""); if (firstChar[0] == "I") { return final[0][0].substring(1) } else { return final[0][0] } })() + ", Magnitude: " + (() => { if (final[0][2] == "") { return "N/A" } else { return final[0][2] } })() + ", Type: " + final[0][3] + ", Constellation: " + final[0][4] + "<br />";
        } else if (final.length == 2) {
            document.getElementById("p1").innerHTML = "Best target: " + (() => { let firstChar = final[0][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[0][0].split(""); if (firstChar[0] == "I") { return final[0][0].substring(1) } else { return final[0][0] } })() + ", Magnitude: " + (() => { if (final[0][2] == "") { return "N/A" } else { return final[0][2] } })() + ", Type: " + final[0][3] + ", Constellation: " + final[0][4] + "<br />" +
                "2nd best target: " + (() => { let firstChar = final[1][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[1][0].split(""); if (firstChar[0] == "I") { return final[1][0].substring(1) } else { return final[1][0] } })() + ", Magnitude: " + (() => { if (final[1][2] == "") { return "N/A" } else { return final[1][2] } })() + ", Type: " + final[1][3] + ", Constellation: " + final[1][4] + "<br />";
        } else if (final.length == 3) {
            document.getElementById("p1").innerHTML = "Best target: " + (() => { let firstChar = final[0][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[0][0].split(""); if (firstChar[0] == "I") { return final[0][0].substring(1) } else { return final[0][0] } })() + ", Magnitude: " + (() => { if (final[0][2] == "") { return "N/A" } else { return final[0][2] } })() + ", Type: " + final[0][3] + ", Constellation: " + final[0][4] + "<br />" +
                "2nd best target: " + (() => { let firstChar = final[1][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[1][0].split(""); if (firstChar[0] == "I") { return final[1][0].substring(1) } else { return final[1][0] } })() + ", Magnitude: " + (() => { if (final[1][2] == "") { return "N/A" } else { return final[1][2] } })() + ", Type: " + final[1][3] + ", Constellation: " + final[1][4] + "<br />" +
                "3rd best target: " + (() => { let firstChar = final[2][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[2][0].split(""); if (firstChar[0] == "I") { return final[2][0].substring(1) } else { return final[2][0] } })() + ", Magnitude: " + (() => { if (final[2][2] == "") { return "N/A" } else { return final[2][2] } })() + ", Type: " + final[2][3] + ", Constellation: " + final[2][4] + "<br />";
        } else if (final.length == 4) {
            document.getElementById("p1").innerHTML = "Best target: " + (() => { let firstChar = final[0][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[0][0].split(""); if (firstChar[0] == "I") { return final[0][0].substring(1) } else { return final[0][0] } })() + ", Magnitude: " + (() => { if (final[0][2] == "") { return "N/A" } else { return final[0][2] } })() + ", Type: " + final[0][3] + ", Constellation: " + final[0][4] + "<br />" +
                "2nd best target: " + (() => { let firstChar = final[1][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[1][0].split(""); if (firstChar[0] == "I") { return final[1][0].substring(1) } else { return final[1][0] } })() + ", Magnitude: " + (() => { if (final[1][2] == "") { return "N/A" } else { return final[1][2] } })() + ", Type: " + final[1][3] + ", Constellation: " + final[1][4] + "<br />" +
                "3rd best target: " + (() => { let firstChar = final[2][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[2][0].split(""); if (firstChar[0] == "I") { return final[2][0].substring(1) } else { return final[2][0] } })() + ", Magnitude: " + (() => { if (final[2][2] == "") { return "N/A" } else { return final[2][2] } })() + ", Type: " + final[2][3] + ", Constellation: " + final[2][4] + "<br />" +
                "4th best target: " + (() => { let firstChar = final[3][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[3][0].split(""); if (firstChar[0] == "I") { return final[3][0].substring(1) } else { return final[3][0] } })() + ", Magnitude: " + (() => { if (final[3][2] == "") { return "N/A" } else { return final[3][2] } })() + ", Type: " + final[3][3] + ", Constellation: " + final[3][4] + "<br />";
        } else {
            document.getElementById("p1").innerHTML = "Best target: " + (() => { let firstChar = final[0][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[0][0].split(""); if (firstChar[0] == "I") { return final[0][0].substring(1) } else { return final[0][0] } })() + ", Magnitude: " + (() => { if (final[0][2] == "") { return "N/A" } else { return final[0][2] } })() + ", Type: " + final[0][3] + ", Constellation: " + final[0][4] + "<br />" +
                "2nd best target: " + (() => { let firstChar = final[1][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[1][0].split(""); if (firstChar[0] == "I") { return final[1][0].substring(1) } else { return final[1][0] } })() + ", Magnitude: " + (() => { if (final[1][2] == "") { return "N/A" } else { return final[1][2] } })() + ", Type: " + final[1][3] + ", Constellation: " + final[1][4] + "<br />" +
                "3rd best target: " + (() => { let firstChar = final[2][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[2][0].split(""); if (firstChar[0] == "I") { return final[2][0].substring(1) } else { return final[2][0] } })() + ", Magnitude: " + (() => { if (final[2][2] == "") { return "N/A" } else { return final[2][2] } })() + ", Type: " + final[2][3] + ", Constellation: " + final[2][4] + "<br />" +
                "4th best target: " + (() => { let firstChar = final[3][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[3][0].split(""); if (firstChar[0] == "I") { return final[3][0].substring(1) } else { return final[3][0] } })() + ", Magnitude: " + (() => { if (final[3][2] == "") { return "N/A" } else { return final[3][2] } })() + ", Type: " + final[3][3] + ", Constellation: " + final[3][4] + "<br />" +
                "5th best target: " + (() => { let firstChar = final[4][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[4][0].split(""); if (firstChar[0] == "I") { return final[4][0].substring(1) } else { return final[4][0] } })() + ", Magnitude: " + (() => { if (final[4][2] == "") { return "N/A" } else { return final[4][2] } })() + ", Type: " + final[4][3] + ", Constellation: " + final[4][4];
        }
    } else {
        document.getElementById("p1").innerHTML = "No targets found for the search params, try widening the search."
    }
    if (final2 != undefined) {
        if (final2.length != 0) {
            if (final2.length == 1) {
                document.getElementById("p2").innerHTML = "Favorites: <br /> <br /> Best target: " + (() => { let firstChar = final2[0][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final2[0][0].split(""); if (firstChar[0] == "I") { return final2[0][0].substring(1) } else { return final2[0][0] } })() + ", Magnitude: " + (() => { if (final2[0][2] == "") { return "N/A" } else { return final2[0][2] } })() + ", Type: " + final2[0][3] + ", Constellation: " + final2[0][4] + "<br />";
            } else if (final2.length == 2) {
                document.getElementById("p2").innerHTML = "Favorites: <br /> <br /> Best target: " + (() => { let firstChar = final2[0][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final2[0][0].split(""); if (firstChar[0] == "I") { return final2[0][0].substring(1) } else { return final2[0][0] } })() + ", Magnitude: " + (() => { if (final2[0][2] == "") { return "N/A" } else { return final2[0][2] } })() + ", Type: " + final2[0][3] + ", Constellation: " + final2[0][4] + "<br />" +
                    "2nd best target: " + (() => { let firstChar = final2[1][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final2[1][0].split(""); if (firstChar[0] == "I") { return final2[1][0].substring(1) } else { return final2[1][0] } })() + ", Magnitude: " + (() => { if (final2[1][2] == "") { return "N/A" } else { return final2[1][2] } })() + ", Type: " + final2[1][3] + ", Constellation: " + final2[1][4] + "<br />";
            } else if (final2.length == 3) {
                document.getElementById("p2").innerHTML = "Favorites: <br /> <br /> Best target: " + (() => { let firstChar = final2[0][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final2[0][0].split(""); if (firstChar[0] == "I") { return final2[0][0].substring(1) } else { return final2[0][0] } })() + ", Magnitude: " + (() => { if (final2[0][2] == "") { return "N/A" } else { return final2[0][2] } })() + ", Type: " + final2[0][3] + ", Constellation: " + final2[0][4] + "<br />" +
                    "2nd best target: " + (() => { let firstChar = final2[1][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final2[1][0].split(""); if (firstChar[0] == "I") { return final2[1][0].substring(1) } else { return final2[1][0] } })() + ", Magnitude: " + (() => { if (final2[1][2] == "") { return "N/A" } else { return final2[1][2] } })() + ", Type: " + final2[1][3] + ", Constellation: " + final2[1][4] + "<br />" +
                    "3rd best target: " + (() => { let firstChar = final2[2][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final2[2][0].split(""); if (firstChar[0] == "I") { return final2[2][0].substring(1) } else { return final2[2][0] } })() + ", Magnitude: " + (() => { if (final2[2][2] == "") { return "N/A" } else { return final2[2][2] } })() + ", Type: " + final2[2][3] + ", Constellation: " + final2[2][4] + "<br />";
            } else if (final2.length == 4) {
                document.getElementById("p2").innerHTML = "Favorites: <br /> <br /> Best target: " + (() => { let firstChar = final2[0][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final2[0][0].split(""); if (firstChar[0] == "I") { return final2[0][0].substring(1) } else { return final2[0][0] } })() + ", Magnitude: " + (() => { if (final2[0][2] == "") { return "N/A" } else { return final2[0][2] } })() + ", Type: " + final2[0][3] + ", Constellation: " + final2[0][4] + "<br />" +
                    "2nd best target: " + (() => { let firstChar = final2[1][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final2[1][0].split(""); if (firstChar[0] == "I") { return final2[1][0].substring(1) } else { return final2[1][0] } })() + ", Magnitude: " + (() => { if (final2[1][2] == "") { return "N/A" } else { return final2[1][2] } })() + ", Type: " + final2[1][3] + ", Constellation: " + final2[1][4] + "<br />" +
                    "3rd best target: " + (() => { let firstChar = final2[2][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final2[2][0].split(""); if (firstChar[0] == "I") { return final2[2][0].substring(1) } else { return final2[2][0] } })() + ", Magnitude: " + (() => { if (final2[2][2] == "") { return "N/A" } else { return final2[2][2] } })() + ", Type: " + final2[2][3] + ", Constellation: " + final2[2][4] + "<br />" +
                    "4th best target: " + (() => { let firstChar = final2[3][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final2[3][0].split(""); if (firstChar[0] == "I") { return final2[3][0].substring(1) } else { return final2[3][0] } })() + ", Magnitude: " + (() => { if (final2[3][2] == "") { return "N/A" } else { return final2[3][2] } })() + ", Type: " + final2[3][3] + ", Constellation: " + final2[3][4] + "<br />";
            } else {
                document.getElementById("p2").innerHTML = "Favorites: <br /> <br /> Best target: " + (() => { let firstChar = final2[0][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final2[0][0].split(""); if (firstChar[0] == "I") { return final2[0][0].substring(1) } else { return final2[0][0] } })() + ", Magnitude: " + (() => { if (final2[0][2] == "") { return "N/A" } else { return final2[0][2] } })() + ", Type: " + final2[0][3] + ", Constellation: " + final2[0][4] + "<br />" +
                    "2nd best target: " + (() => { let firstChar = final2[1][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final2[1][0].split(""); if (firstChar[0] == "I") { return final2[1][0].substring(1) } else { return final2[1][0] } })() + ", Magnitude: " + (() => { if (final2[1][2] == "") { return "N/A" } else { return final2[1][2] } })() + ", Type: " + final2[1][3] + ", Constellation: " + final2[1][4] + "<br />" +
                    "3rd best target: " + (() => { let firstChar = final2[2][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final2[2][0].split(""); if (firstChar[0] == "I") { return final2[2][0].substring(1) } else { return final2[2][0] } })() + ", Magnitude: " + (() => { if (final2[2][2] == "") { return "N/A" } else { return final2[2][2] } })() + ", Type: " + final2[2][3] + ", Constellation: " + final2[2][4] + "<br />" +
                    "4th best target: " + (() => { let firstChar = final2[3][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final2[3][0].split(""); if (firstChar[0] == "I") { return final2[3][0].substring(1) } else { return final2[3][0] } })() + ", Magnitude: " + (() => { if (final2[3][2] == "") { return "N/A" } else { return final2[3][2] } })() + ", Type: " + final2[3][3] + ", Constellation: " + final2[3][4] + "<br />" +
                    "5th best target: " + (() => { let firstChar = final2[4][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final2[4][0].split(""); if (firstChar[0] == "I") { return final2[4][0].substring(1) } else { return final2[4][0] } })() + ", Magnitude: " + (() => { if (final2[4][2] == "") { return "N/A" } else { return final2[4][2] } })() + ", Type: " + final2[4][3] + ", Constellation: " + final2[4][4];
            }
        } else {
            document.getElementById("p2").innerHTML = "No favorites found."
        }
    }
    document.getElementById("timerLable").innerHTML = "Computed in:" + (new Date() - timer) / 1000 + "s";

    document.getElementById("weather").src = "https://clearoutside.com/forecast/" + lat + "/" + long + "?view=midday";

    let frame1 = document.getElementById("iframe1");
    let frame2 = document.getElementById("iframe2");
    let frame3 = document.getElementById("iframe3");
    let frame4 = document.getElementById("iframe4");
    let frame5 = document.getElementById("iframe5");

    if (final == null) {
        frame1.src = "./blank.jpg"
        frame2.src = "./blank.jpg"
        frame3.src = "./blank.jpg"
        frame4.src = "./blank.jpg"
        frame5.src = "./blank.jpg"
    }
    if (final.length == 1) {
        if (mapImages[final[0][0]] == null) {
            fetch(
                'https://athesto.ddns.net/astroBlank?id=' + final[0][0],
                { method: 'POST' }
            )
        }
        frame1.src = mapImages[final[0][0]] ?? "./blank.jpg";
        frame2.src = "./blank.jpg"
        frame3.src = "./blank.jpg"
        frame4.src = "./blank.jpg"
        frame5.src = "./blank.jpg"
    }
    if (final.length == 2) {
        if (mapImages[final[0][0]] == null) {
            fetch(
                'https://athesto.ddns.net/astroBlank?id=' + final[0][0],
                { method: 'POST' }
            )
        }
        if (mapImages[final[1][0]] == null) {
            fetch(
                'https://athesto.ddns.net/astroBlank?id=' + final[1][0],
                { method: 'POST' }
            )
        }
        frame1.src = mapImages[final[0][0]] ?? "./blank.jpg";
        frame2.src = mapImages[final[1][0]] ?? "./blank.jpg";
        frame3.src = "./blank.jpg"
        frame4.src = "./blank.jpg"
        frame5.src = "./blank.jpg"
    }
    if (final.length == 3) {
        if (mapImages[final[0][0]] == null) {
            fetch(
                'https://athesto.ddns.net/astroBlank?id=' + final[0][0],
                { method: 'POST' }
            )
        }
        if (mapImages[final[1][0]] == null) {
            fetch(
                'https://athesto.ddns.net/astroBlank?id=' + final[1][0],
                { method: 'POST' }
            )
        }
        if (mapImages[final[2][0]] == null) {
            fetch(
                'https://athesto.ddns.net/astroBlank?id=' + final[2][0],
                { method: 'POST' }
            )
        }
        frame1.src = mapImages[final[0][0]] ?? "./blank.jpg";
        frame2.src = mapImages[final[1][0]] ?? "./blank.jpg";
        frame3.src = mapImages[final[2][0]] ?? "./blank.jpg";
        frame4.src = "./blank.jpg"
        frame5.src = "./blank.jpg"
    }
    if (final.length == 4) {
        if (mapImages[final[0][0]] == null) {
            fetch(
                'https://athesto.ddns.net/astroBlank?id=' + final[0][0],
                { method: 'POST' }
            )
        }
        if (mapImages[final[1][0]] == null) {
            fetch(
                'https://athesto.ddns.net/astroBlank?id=' + final[1][0],
                { method: 'POST' }
            )
        }
        if (mapImages[final[2][0]] == null) {
            fetch(
                'https://athesto.ddns.net/astroBlank?id=' + final[2][0],
                { method: 'POST' }
            )
        }
        if (mapImages[final[3][0]] == null) {
            fetch(
                'https://athesto.ddns.net/astroBlank?id=' + final[3][0],
                { method: 'POST' }
            )
        }
        frame1.src = mapImages[final[0][0]] ?? "./blank.jpg";
        frame2.src = mapImages[final[1][0]] ?? "./blank.jpg";
        frame3.src = mapImages[final[2][0]] ?? "./blank.jpg";
        frame4.src = mapImages[final[3][0]] ?? "./blank.jpg";
        frame5.src = "./blank.jpg"
    }
    if (final.length >= 5) {
        if (mapImages[final[0][0]] == null) {
            fetch(
                'https://athesto.ddns.net/astroBlank?id=' + final[0][0],
                { method: 'POST' }
            )
        }
        if (mapImages[final[1][0]] == null) {
            fetch(
                'https://athesto.ddns.net/astroBlank?id=' + final[1][0],
                { method: 'POST' }
            )
        }
        if (mapImages[final[2][0]] == null) {
            fetch(
                'https://athesto.ddns.net/astroBlank?id=' + final[2][0],
                { method: 'POST' }
            )
        }
        if (mapImages[final[3][0]] == null) {
            fetch(
                'https://athesto.ddns.net/astroBlank?id=' + final[3][0],
                { method: 'POST' }
            )
        }
        if (mapImages[final[4][0]] == null) {
            fetch(
                'https://athesto.ddns.net/astroBlank?id=' + final[4][0],
                { method: 'POST' }
            )
        }
        frame1.src = mapImages[final[0][0]] ?? "./blank.jpg";
        frame2.src = mapImages[final[1][0]] ?? "./blank.jpg";
        frame3.src = mapImages[final[2][0]] ?? "./blank.jpg";
        frame4.src = mapImages[final[3][0]] ?? "./blank.jpg";
        frame5.src = mapImages[final[4][0]] ?? "./blank.jpg";
    }
}

function ShowHideDiv(chk) {
    var dv = document.getElementById(chk.id + "-container");
    dv.style.display = chk.checked ? "block" : "none";
    let current = history.state || {};
    current[chk.id] = chk.checked;
    history.pushState(current, "", "#" + JSON.stringify(current));
}

window.onpopstate = handleHistroyState;

function handleHistroyState() {
    [
        "visAdv",
        "visWeather",
    ].forEach(id => {
        let chk = document.getElementById(id);
        chk.checked = history.state[id];
        var dv = document.getElementById(chk.id + "-container");
        dv.style.display = chk.checked ? "block" : "none";
    })
}

window.addEventListener('DOMContentLoaded', (event) => {
    history.state && handleHistroyState();
});

function bottomForm(event) {
    event.preventDefault();
    window.location.href = "https://github.com/Perrytheplaty43/Algorithums-and-Astronomy-Calculator";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function isWeatherGood(lat, long, reqDate) {
    if (reqDate == "") {
        let curDate = new Date();
        reqDate = (curDate.getMonth() + 1) + "-" + curDate.getDate() + "-" + curDate.getFullYear()
    }
    let runriseSet = sunsetriseTime(lat, long, reqDate)
    runriseSet = runriseSet.sort();
    let rise = new Date(reqDate)
    let seting = new Date(reqDate)
    let hours = (runriseSet[0] / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    rise.setHours(rhours, rminutes, 0)

    let hours1 = (runriseSet[1] / 60);
    let rhours1 = Math.floor(hours1);
    let minutes1 = (hours1 - rhours1) * 60;
    let rminutes1 = Math.round(minutes1);
    seting.setHours(rhours1, rminutes1, 0)

    let timesUNIX = [rise.getTime() / 1000, seting.getTime() / 1000];
    timesUNIX = timesUNIX.sort()
    fetch(
        'https://' + window.location.hostname + '/astroTargetFinder/weatherAPI?lat=' + lat + '&lon=' + long,
        { method: 'GET' }
    )
        .then(response => response.text())
        .then(res => {
            save(res, timesUNIX)
        })
        .catch(error => console.log('error:', error));
}
let theJSON;
function save(inputs, timesUNIX) {
    let condition = "unknown";
    theJSON = inputs
    theJSON = JSON.parse(theJSON)
    let clouds = [];
    for (i = 0; i <= theJSON.list.length - 1; i++) {
        if (timesUNIX[0] <= theJSON.list[i].dt) {
            if (timesUNIX[1] <= theJSON.list[i].dt) {
                break;
            }
            clouds.push(theJSON.list[i].clouds.all)
        }
    }
    clouds = clouds.sort()
    if (clouds[clouds.length - 1] < 10) {
        condition = "Perfect"
        document.getElementById("condition").classList.add('p1green')
        document.getElementById("condition").classList.remove('p1red')
        document.getElementById("condition").classList.remove('p1yellow')
    } else if (((() => { let turning = 0; for (i = 0; i <= clouds.length - 1; i++) { turning += clouds[i]; } return turning })()) / clouds.length < 30) {
        condition = "Fair"
        document.getElementById("condition").classList.add('p1yellow')
        document.getElementById("condition").classList.remove('p1red')
        document.getElementById("condition").classList.remove('p1green')
    } else if (clouds.length == 0) {
        condition = "Unknown (too far in the future or too near to present time)"
        document.getElementById("condition").classList.add('p1')
        document.getElementById("condition").classList.remove('p1red')
        document.getElementById("condition").classList.remove('p1green')
        document.getElementById("condition").classList.remove('p1yellow')
    } else {
        condition = "Bad"
        document.getElementById("condition").classList.add('p1red')
        document.getElementById("condition").classList.remove('p1green')
        document.getElementById("condition").classList.remove('p1yellow')
    }
    document.getElementById("condition").innerHTML = "Weather Condition: " + condition;
}

function sunsetriseTime(lat, long, targetDate) {
    let now = new Date(targetDate)
    let start = new Date(now.getFullYear(), 0, 0);
    let diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    let oneDay = 1000 * 60 * 60 * 24;
    let day = Math.floor(diff / oneDay);

    let y = ((2 * Math.PI) / 365) * (day - 365)

    let eqtime = 229.18 * (0.000075 + 0.001868 * Math.cos(y) - 0.032077 * Math.sin(y) - 0.014615 * Math.cos(2 * y) - 0.040849 * Math.sin(2 * y))
    let decl = 0.006918 - 0.399912 * Math.cos(y) + 0.070257 * Math.sin(y) - 0.006758 * Math.cos(2 * y) + 0.000907 * Math.sin(2 * y) - 0.002697 * Math.cos(3 * y) + 0.00148 * Math.sin(3 * y)

    let haP = Math.acos(((Math.cos(toRadians(90.833))) / (Math.cos(toRadians(lat)) * Math.cos(decl))) - Math.tan(toRadians(lat)) * Math.tan(decl))
    haP = toDegrees(haP)

    let haM = -1 * Math.acos(((Math.cos(toRadians(90.833))) / (Math.cos(toRadians(lat)) * Math.cos(decl))) - Math.tan(toRadians(lat)) * Math.tan(decl))
    haM = toDegrees(haM)

    let sunRiseSet1 = 720 - 4 * (long + haP) - eqtime
    let sunRiseSet2 = 720 - 4 * (long + haM) - eqtime
    let output = [sunRiseSet1, sunRiseSet2]
    return output
}

function toRadians(angle) {
    return angle * (Math.PI / 180)
}

function toDegrees(angle) {
    return angle * (180 / Math.PI)
}
