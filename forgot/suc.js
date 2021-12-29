let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);

let user;
let token;

if (queryString != undefined) {
    user = urlParams.get('user')
    token = urlParams.get('token')
}

function onSubmit(event) {
    event.preventDefault();
    let pass;
    if (document.getElementById("pass") == document.getElementById("pass2")) {
        pass = document.getElementById("pass").value
    } else {
        document.getElementById("wrong").style.display = "block"
        return false
    }
    fetch(
        'https://' + window.location.hostname + '/api/forgot?user=' + user + '&token=' + token + '&pass=' + pass,
        { method: 'GET' }
    )
        .then(response => response.text())
        .then(finalData => {
            data = JSON.parse(finalData)
            if (data.res == "suc") {
                document.getElementById("suc").style.display = "flex"
            } else {
                alert("error, link might have expired")
            }
        })
        .catch(error => console.log('error:', error));
    return false
}

function SignOutRe() {
    window.location.href = "https://" + window.location.hostname + "/login/";
}