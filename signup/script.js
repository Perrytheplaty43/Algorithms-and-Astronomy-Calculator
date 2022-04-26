function onSubmit(event) {
    if (event.submitter.id == "submit") {
        event.preventDefault();
        fetch(
            'https://' + window.location.hostname + '/api/signup?user=' + document.getElementById("user").value + '&pass=' + document.getElementById("pass").value + '&email=' + document.getElementById("email").value,
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
                } else if (JSON.parse(data).res == "sameemail") {
                    document.getElementById("email").style.display = "block"
                    document.getElementById("same").style.display = "none"
                    document.getElementById("suc").style.display = "none"
                    document.getElementById("passShort").style.display = "none"
                    document.getElementById("emailInvalid").style.display = "none"
                } else if (JSON.parse(data).res == "shortPass") {
                    document.getElementById("passShort").style.display = "block"
                    document.getElementById("suc").style.display = "none"
                    document.getElementById("same").style.display = "none"
                    document.getElementById("emailInvalid").style.display = "none"
                } else if (JSON.parse(data).res == "invalidEmail") {
                    document.getElementById("emailInvalid").style.display = "block"
                    document.getElementById("suc").style.display = "none"
                    document.getElementById("same").style.display = "none"
                    document.getElementById("passShort").style.display = "none"
                }
            })
            .catch(error => console.log('error:', error));
    }
    return false
}

function SignInRe() {
    window.location.href = "https://" + window.location.hostname + "/login/";
}