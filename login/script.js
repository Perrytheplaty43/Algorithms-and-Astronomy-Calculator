function submit(event) {
    if (event.submitter.id == "submit") {
        fetch(
            'https://' + window.location.hostname + '/api/login?user=' + document.getElementById("user").value + '&pass=' + document.getElementById("pass").value,
            { method: 'POST' }
        )
            .then(alert("suc"))
            .catch(error => console.log('error:', error));
        event.preventDefault();
    }
    return false
}