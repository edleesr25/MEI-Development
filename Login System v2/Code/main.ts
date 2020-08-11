// Image URL
document.getElementsByClassName("submit")[0].addEventListener('click', function () {
    const image:any = document.getElementById("image-value").value;
    document.body.style.backgroundImage = "url('" + image + "')";
});






