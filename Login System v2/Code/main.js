// Image URL
function imageChange() {
    var imageChangeValue = document.getElementById("image-value").value;
    document.querySelector("body").style.backgroundImage = "url('" + imageChangeValue + "')";
}
document.getElementById("image-btn").addEventListener('click', imageChange);
// Temporary Validation 
function tempvalidate() {
    if (document.getElementById("input-username").value == "Admin" && document.getElementById("input-password").value == "AdminPass") {
        window.location.href = "example.com";
    }
    else {
        return;
    }
}
document.getElementsById("login-btn").addEventListener('click', tempvalidate);
