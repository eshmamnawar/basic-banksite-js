
document.getElementById("login-submit").addEventListener('click', function () {
    //   get user email 
    const emailField = document.getElementById("user-email");
    userEmail = emailField.value;
})

document.getElementById("login-submit").addEventListener('click', function () {
    //    get user password 
    const passwordField = document.getElementById("user-password");
    const userPassword = passwordField.value;



    if (userEmail == 'myemail@gmail.com' && userPassword == 'password') {
        window.location.href = 'banking.html'
    }
})