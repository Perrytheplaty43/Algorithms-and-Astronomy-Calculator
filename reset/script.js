function onSubmit(event) {
    if (event.submitter.id == "submit") {
        event.preventDefault();
        fetch(
            'https://' + window.location.hostname + '/api/reset?user=' + document.getElementById("user").value + '&pass=' + document.getElementById("pass").value + '&passNew=' + document.getElementById("passNew").value + '&email=' + document.getElementById("email").value,
            { method: 'POST' }
        )
            .then(response => response.text())
            .then(data => {
                if (JSON.parse(data).res == "err") {
                    document.getElementById("suc").style.display = "none"
                    document.getElementById("wrong").style.display = "block"
                } else if (JSON.parse(data).res == "suc") {
                    document.getElementById("suc").style.display = "block"
                    document.getElementById("wrong").style.display = "none"
                } else {
                    alert("unknown error")
                }
            })
            .catch(error => console.log('error:', error));
    }
    return false
}

function SignOutRe() {
    window.location.href = "https://" + window.location.hostname + "/signup/";
}

function LogInRe() {
    window.location.href = "https://" + window.location.hostname + "/login/";
}