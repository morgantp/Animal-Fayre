var firebaseConfig = {
    apiKey: "AIzaSyDS7mbF8prZqqudhZQz9zFEHn4Uwp2CQ_E",
    authDomain: "animal-fayre.firebaseapp.com",
    databaseURL: "https://animal-fayre.firebaseio.com",
    projectId: "animal-fayre",
    storageBucket: "animal-fayre.appspot.com",
    messagingSenderId: "611791927437",
    appId: "1:611791927437:web:61eb984a688988903e8ac4",
    measurementId: "G-71PHY02LCV"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

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

function signUp() {
    var email = document.getElementById("emailField");
    var password = document.getElementById("passwordField");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed Up");

}
