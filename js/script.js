function passwordCheck() {
    var password = document.getElementById("passwordField");
    var confirmPassword = document.getElementById("confirmPassword");

    if (password.value === confirmPassword.value) {
        alert("Passwords Match");
        signUp();
    } else {
        alert("Passwords Do Not Match");
    }
}

auth.onAuthStateChanged(function(user) {
    if(user) {
        var email = user.email;
        document.getElementById("signOut").style.display = "inline-block";
        document.getElementById("makeDonation").style.display = "inline-block";
        welcomeText.textContent = 'Signed In: ' + email;
    } else {
        document.getElementById("signOut").style.display = "none";
        document.getElementById("makeDonation").style.display = "none";
        welcomeText.textContent = ' ';

    }
})

function makeDonation() {
    var user = firebase.auth().currentUser;
    if(user) {
        window.location = '/donation.html';
    } else {
        alert("Please Sign In");
    }
}