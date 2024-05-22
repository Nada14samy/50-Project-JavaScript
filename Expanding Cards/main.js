let imgs = document.querySelectorAll('.card');

// Remove the active class from all images
function removeActive() {
    imgs.forEach((img)=>{
        img.classList.remove('active');
    })
}

// add the active class to the clicked image
function clickImage(img) {
    removeActive();
    img.classList.add('active');
}