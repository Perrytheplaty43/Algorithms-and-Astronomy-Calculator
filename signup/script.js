function onSubmit(event) {
    if (event.submitter.id == "submit") {
        event.preventDefault();
        fetch(
            'https://' + window.location.hostname + '/api/signup?user=' + document.getElementById("user").value + '&pass=' + document.getElementById("pass").value,
            { method: 'POST' }
        )
            .then(response => response.text())
            .then(data => {
                if (JSON.parse(data).res == "same") {
                    document.getElementById("same").style.display = "block"
                    document.getElementById("suc").style.display = "none"
                } else if (JSON.parse(data).res == "suc") {
                    document.getElementById("suc").style.display = "block"
                    document.getElementById("same").style.display = "none"
                }
            })
            .catch(error => console.log('error:', error));
    }
    return false
}

function updateUI() {
    document.getElementById("indicator").innerHTML += user
}