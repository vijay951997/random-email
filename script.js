function generateEmail() {
    var randomString = Math.random().toString(36).substring(2, 10);
    var domain = "example.com";
    var randomEmail = randomString + "@" + domain;
    document.getElementById("randomEmail").innerText = randomEmail;
}
