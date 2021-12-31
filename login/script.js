let user;
let pass;
function onSubmit(event) {
    if (event.submitter.id == "submit") {
        event.preventDefault();
        user = document.getElementById("user").value;
        pass = document.getElementById("pass").value;
        fetch(
            'https://' + window.location.hostname + '/api/login?user=' + document.getElementById("user").value + '&pass=' + document.getElementById("pass").value,
            { method: 'GET' }
        )
            .then(response => response.text())
            .then(data => {
                if (JSON.parse(data).res == "correct") {
                    document.getElementById("suc").style.display = "block"
                    document.getElementById("wrong").style.display = "none"
                    document.getElementById("nouser").style.display = "none"
                    updateUI()
                } else if (JSON.parse(data).res == "wrong") {
                    document.getElementById("suc").style.display = "none"
                    document.getElementById("wrong").style.display = "block"
                    document.getElementById("nouser").style.display = "none"
                } else if (JSON.parse(data).res == "nouser") {
                    document.getElementById("suc").style.display = "none"
                    document.getElementById("wrong").style.display = "none"
                    document.getElementById("nouser").style.display = "block"
                } else {
                    alert("unknown error")
                }
            })
            .catch(error => console.log('error:', error));
    } else if (event.submitter.id == "submitObj") {
        fetch(
            'https://' + window.location.hostname + '/api/fav?user=' + user + '&pass=' + pass + '&id=' + document.getElementById("object").value,
            { method: 'POST' }
        )
            .then(response => response.text())
            .then(res => {
                if (JSON.parse(res).res != "done") {
                    alert("error")
                }
            })
    } else if (event.submitter.id == "clear") {
        fetch(
            'https://' + window.location.hostname + '/api/fav?user=' + user + '&pass=' + pass + '&id=NGC0000',
            { method: 'POST' }
        )
            .then(response => response.text())
            .then(res => {
                if (JSON.parse(res).res != "done") {
                    alert("error")
                }
            })
    }
    return false
}

function updateUI() {
    document.getElementById("indicator").textContent = "Loged in as: " + user
    document.getElementById("indicator").classList.add('p1green2')

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
            document.getElementById("lat").value = res.lat
            document.getElementById("long").value = res.long
        })
        .catch(error => console.log('error:', error));
    document.getElementById("container8").style.display = "block"
    document.getElementById("container9").style.display = "block"
    document.getElementById("container10").style.display = "flex"
}

function bottomForm(event) {
    event.preventDefault();
    window.location.href = "https://" + window.location.hostname + "/astroTargetFinder?user=" + user + "&pass=" + pass;
}

function SignOutRe() {
    window.location.href = "https://" + window.location.hostname + "/signup/";
}

function ResetOutRe() {
    window.location.href = "https://" + window.location.hostname + "/reset/";
}
function ShowHideDivQuestion(event) {
    let thing = document.getElementsByClassName("tooltiptext")[0];
    thing.style.display = event.srcElement.checked ? "block" : "none"
    if (document.getElementsByClassName("checkboxes")[0].offsetWidth + document.getElementsByClassName("params")[0].offsetWidth > window.innerWidth * 0.64) {
        document.getElementsByClassName("tooltiptext")[0].style.marginLeft = "0";
    }
}

function submitParams() {
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

    if (user != undefined && pass != undefined) {
        fetch(
            'https://' + window.location.hostname + '/api/params?tol=' + tol + '&magTol=' + tolMag + '&type=' + types + "&user=" + user + "&pass=" + pass,
            { method: 'POST' }
        )
            .then(response => response.text())
            .then(res => {
                if (JSON.parse(res).res != "done") {
                    alert("error")
                }
            })
            .catch(error => console.log('error:', error));
    }
}

function ForgotOutRe() {
    window.location.href = "https://" + window.location.hostname + "/forgot/";
}

function Loc(event) {
    if (event.submitter.id == "loc_button") {
        event.preventDefault();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            document.getElementById("lat").innerHTML = "Geolocation is not supported by this browser.";
        }
        function showPosition(position) {
            document.getElementById("lat").value = position.coords.latitude
            document.getElementById("long").value = position.coords.longitude
        }
        return false
    } else {
        event.preventDefault();
        let lat = parseFloat(document.getElementById("lat").value)
        let long = parseFloat(document.getElementById("long").value)
        if (user != undefined && pass != undefined && lat != NaN && long != NaN) {
            fetch(
                'https://' + window.location.hostname + '/api/loc?lat=' + lat + '&long=' + long + '&user=' + user + '&pass=' + pass,
                { method: 'POST' }
            )
                .then(response => response.text())
                .then(res => {
                    if (JSON.parse(res).res != "done") {
                        alert("error")
                    }
                })
                .catch(error => console.log('error:', error));
        }
        return false
    }
}