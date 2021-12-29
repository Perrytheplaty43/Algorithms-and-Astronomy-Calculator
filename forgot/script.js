function onSubmit(event) {
    if (event.submitter.id == "submit") {
        event.preventDefault();
        fetch(
            'https://' + window.location.hostname + '/forgot?user=' + document.getElementById("user").value + '&pass=' + document.getElementById("pass").value,
            { method: 'POST' }
        )
            .then(response => response.text())
            .then(data => {
                if (data == "nouser") {
                    document.getElementById("suc").style.display = "none"
                    document.getElementById("wrong").style.display = "block"
                } else if (data == "suc") {
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