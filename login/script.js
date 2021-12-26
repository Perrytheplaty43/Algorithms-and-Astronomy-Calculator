function onSubmit(event) {
    if (event.submitter.id == "submit") {
        event.preventDefault();
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
    }
    return false
}