// Image URL
document.getElementsByClassName("submit")[0].addEventListener('click', function () {
    var image = document.getElementById("image-value").value;
    document.body.style.backgroundImage = "url('" + image + "')";
});

