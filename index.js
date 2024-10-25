function toggleSidebar() {
    document.querySelector('#hidebar').classList.toggle('active');
}

function submitForm(event) {
    event.preventDefault(); 

    var firstname = document.getElementById('first-name').value;
    var lastname = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (firstname == "Chirag " && lastname == "Sharma" && email == "h9944667@gamil.com" && password == "@123456789") {
        alert("Login Successful");
        window.location.assign("home.html");
    }
    else {
        alert("Wrong Details");
        window.location.assign("home.html");
    }
}
