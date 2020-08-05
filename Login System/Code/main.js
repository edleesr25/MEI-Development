// Alert Close
document.getElementById("alert-close").addEventListener('click', function() {
    const alert = document.getElementsByClassName("alert");
    alert[0].style.animation = "alert-animate 500ms ease-in-out";
    setTimeout(function() {
        document.getElementsByClassName("form-container")[0].style.marginTop = "100px";
        alert[0].remove();
    }, 500);
});

// Popup on join // Disabled for now
/*
setTimeout(function() {
    document.getElementsByClassName("popup")[0].style.display = "inline";
    document.getElementsByClassName("popup-content")[0].style.display = "flex";
}, 10000);

document.getElementById("alphatest-btn").addEventListener('click', function () {
    document.getElementById("alphatest-btn").innerText = "Enjoy!";
    setTimeout(function() {
        const clear = document.getElementsByClassName("popup");
        clear[0].style.animation = "lightbox-animation 0.5s ease-in-out";
    }, 500);
    setTimeout(function() {
        const clear = document.getElementsByClassName("popup");
        clear[0].remove();
    }, 500);
});
*/

// Check if password/username matchest 
document.getElementById("submit-btn").addEventListener('click', function() {
    const username = document.getElementById("adminusername");
    if(username.innerText.length < 3) {
        setTimeout(function() {
            document.getElementById("alert-l3").style.display = "flex";
        }, 1000);
    }
});

// Remove Scripts
document.getElementById("alert-l3-close").addEventListener('click', function() {
    const removeElement = document.getElementById("alert-l3");
    removeElement.style.animation = "alert-animate 0.5s ease-in-out";
    setTimeout(function() {
        document.getElementById("alert-l3").style.display = "none";
    }, 500);
});

// Dark Mode
document.getElementById("dark-mode").addEventListener('click', function() {
    document.querySelector("body").style.background = "url(../Img/login-bkg-dark.jpg) no-repeat center center/cover";
    document.getElementsByClassName("footer").style.animation = "footer-color-dark 0.5s ease-in-out forwards";
})

