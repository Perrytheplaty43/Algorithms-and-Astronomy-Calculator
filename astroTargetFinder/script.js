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
};
let date = new Date();
function onSubmit(event) {
    if (event.submitter.id == "home_button") {
        event.preventDefault();
        window.location.href = "./";
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
        long = parseFloat(long);
        lat = parseFloat(lat);
        fetch(
            'https://athesto.ddns.net/astro?lat=' + lat + '&long=' + long + '&tol=' + tol + '&tolMag=' + tolMag + '&type=' + types + "&date=" + dateToSend,
            { method: 'GET' }
        )
            .then(response => response.text())
            .then(finalData => {
                updateUI(JSON.parse(finalData), timer, lat, long)
            })
            .catch(error => console.log('error:', error));
        event.preventDefault();
    }
    return false;
}
function updateUI(final, timer, lat, long) {
    if (final != null) {
        if (final.length == 1) {
            document.getElementById("p1").innerHTML = "Best target: " + (() => { let firstChar = final[0][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[0][0].split(""); if (firstChar[0] == "I") { return final[0][0].substring(1) } else { return final[0][0] } })() + ", Magnitude: " + final[0][2] + ", Type: " + final[0][3] + ", Constellation: " + final[0][4] + "<br />";
        } else if (final.length == 2) {
            document.getElementById("p1").innerHTML = "Best target: " + (() => { let firstChar = final[0][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[0][0].split(""); if (firstChar[0] == "I") { return final[0][0].substring(1) } else { return final[0][0] } })() + ", Magnitude: " + final[0][2] + ", Type: " + final[0][3] + ", Constellation: " + final[0][4] + "<br />" +
                "2nd best target: " + (() => { let firstChar = final[1][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[1][0].split(""); if (firstChar[0] == "I") { return final[1][0].substring(1) } else { return final[1][0] } })() + ", Magnitude: " + final[1][2] + ", Type: " + final[1][3] + ", Constellation: " + final[1][4] + "<br />";
        } else if (final.length == 3) {
            document.getElementById("p1").innerHTML = "Best target: " + (() => { let firstChar = final[0][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[0][0].split(""); if (firstChar[0] == "I") { return final[0][0].substring(1) } else { return final[0][0] } })() + ", Magnitude: " + final[0][2] + ", Type: " + final[0][3] + ", Constellation: " + final[0][4] + "<br />" +
                "2nd best target: " + (() => { let firstChar = final[1][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[1][0].split(""); if (firstChar[0] == "I") { return final[1][0].substring(1) } else { return final[1][0] } })() + ", Magnitude: " + final[1][2] + ", Type: " + final[1][3] + ", Constellation: " + final[1][4] + "<br />" +
                "3rd best target: " + (() => { let firstChar = final[2][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[2][0].split(""); if (firstChar[0] == "I") { return final[2][0].substring(1) } else { return final[2][0] } })() + ", Magnitude: " + final[2][2] + ", Type: " + final[2][3] + ", Constellation: " + final[2][4] + "<br />";
        } else if (final.length == 4) {
            document.getElementById("p1").innerHTML = "Best target: " + (() => { let firstChar = final[0][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[0][0].split(""); if (firstChar[0] == "I") { return final[0][0].substring(1) } else { return final[0][0] } })() + ", Magnitude: " + final[0][2] + ", Type: " + final[0][3] + ", Constellation: " + final[0][4] + "<br />" +
                "2nd best target: " + (() => { let firstChar = final[1][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[1][0].split(""); if (firstChar[0] == "I") { return final[1][0].substring(1) } else { return final[1][0] } })() + ", Magnitude: " + final[1][2] + ", Type: " + final[1][3] + ", Constellation: " + final[1][4] + "<br />" +
                "3rd best target: " + (() => { let firstChar = final[2][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[2][0].split(""); if (firstChar[0] == "I") { return final[2][0].substring(1) } else { return final[2][0] } })() + ", Magnitude: " + final[2][2] + ", Type: " + final[2][3] + ", Constellation: " + final[2][4] + "<br />" +
                "4th best target: " + (() => { let firstChar = final[3][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[3][0].split(""); if (firstChar[0] == "I") { return final[3][0].substring(1) } else { return final[3][0] } })() + ", Magnitude: " + final[3][2] + ", Type: " + final[3][3] + ", Constellation: " + final[3][4] + "<br />";
        } else {
            document.getElementById("p1").innerHTML = "Best target: " + (() => { let firstChar = final[0][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[0][0].split(""); if (firstChar[0] == "I") { return final[0][0].substring(1) } else { return final[0][0] } })() + ", Magnitude: " + final[0][2] + ", Type: " + final[0][3] + ", Constellation: " + final[0][4] + "<br />" +
                "2nd best target: " + (() => { let firstChar = final[1][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[1][0].split(""); if (firstChar[0] == "I") { return final[1][0].substring(1) } else { return final[1][0] } })() + ", Magnitude: " + final[1][2] + ", Type: " + final[1][3] + ", Constellation: " + final[1][4] + "<br />" +
                "3rd best target: " + (() => { let firstChar = final[2][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[2][0].split(""); if (firstChar[0] == "I") { return final[2][0].substring(1) } else { return final[2][0] } })() + ", Magnitude: " + final[2][2] + ", Type: " + final[2][3] + ", Constellation: " + final[2][4] + "<br />" +
                "4th best target: " + (() => { let firstChar = final[3][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[3][0].split(""); if (firstChar[0] == "I") { return final[3][0].substring(1) } else { return final[3][0] } })() + ", Magnitude: " + final[3][2] + ", Type: " + final[3][3] + ", Constellation: " + final[3][4] + "<br />" +
                "5th best target: " + (() => { let firstChar = final[4][0].split(""); if (firstChar[0] == "I") { return "IC" } else { return "NGC" } })() + (() => { let firstChar = final[4][0].split(""); if (firstChar[0] == "I") { return final[4][0].substring(1) } else { return final[4][0] } })() + ", Magnitude: " + final[4][2] + ", Type: " + final[4][3] + ", Constellation: " + final[4][4];
        }
    } else {
        document.getElementById("p1").innerHTML = "No targets found for the search params, try widening the search."
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
    console.log(current)
    current[chk.id] = chk.checked;
    history.pushState(current, "");
}

window.onpopstate = () => {
    [
        "visAdv",
        "visWeather",
    ].forEach(id => {
        let chk = document.getElementById(id);
        chk.checked = history.state[id]; 
        ShowHideDiv(chk);
    })
}
function bottomForm(event) {
    event.preventDefault();
    window.location.href = "https://github.com/Perrytheplaty43/Algorithums-and-Astronomy-Calculator";
}
