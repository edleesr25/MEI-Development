// Color Theme

if(document.getElementsByClassName("color-mode")[0].innerText = "Dark Mode") {
    document.getElementsByClassName("color-mode")[0].addEventListener('click', function() {
        document.getElementsByClassName("form-wrapper")[0].style.backgroundColor = "#1e1e1e";
        document.getElementsByClassName("image-set")[0].style.backgroundColor = "#1e1e1e";
        document.querySelector("h1").style.color = "#fff";
        document.querySelector("#input-username").style.color = "fff";
        document.querySelector("#input-password").style.color = "fff";
        document.querySelectorAll("p")[0].style.color = "#fff";
        document.querySelectorAll("p")[1].style.color = "#fff";
        document.querySelectorAll("label")[0].style.color = "#fff";
        document.querySelectorAll("label")[1].style.color = "#fff";
        document.querySelectorAll("label")[2].style.color = "#fff";
        document.querySelectorAll("label")[0].style.display = "none";
        document.querySelectorAll("label")[1].style.display = "none";
        document.querySelectorAll("label")[2].style.display = "none";
        document.querySelectorAll("label")[0].style.display = "inline";
        document.querySelectorAll("label")[1].style.display = "inline";
        document.querySelectorAll("label")[2].style.display = "inline";
        document.getElementsByClassName("color-mode")[0].innerText = "Light Mode";
    });
}

// Image URL
document.getElementsByClassName("submit")[0].addEventListener('click', function () {
    const image:any = document.getElementById("image-value").value;
    document.body.style.backgroundImage = "url('" + image + "')";
});

// Valid Tests
document.getElementById("login-btn").addEventListener('click', function() {
    // Check if there is a username
    if(document.getElementById("input-username").value == "" || document.getElementById("input-username").value == null) {
        alert("Must Include Username");
    }   
});

// Check form input 
protected class {
    username: string;
    password: string;
}





