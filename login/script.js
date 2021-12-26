function submit(event) {
    fetch(
        'https://' + window.location.hostname + '/api/login?user=' + document.getElementById("user").value + '&pass=' + document.getElementById("pass").value,
        { method: 'POST' }
    )
        .then(alert("suc"))
        .catch(error => console.log('error:', error));
    event.preventDefault();
    return false
}