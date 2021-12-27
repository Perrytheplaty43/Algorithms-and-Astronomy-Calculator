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
    document.getElementById("indicator").innerHTML = "Loged in as: " + user
    document.getElementById("indicator").classList.add('p1green2')
}

function bottomForm(event) {
    event.preventDefault();
    window.location.href = "https://" + window.location.hostname + "/astroTargetFinder?user=" + user + "&pass=" + pass;
}