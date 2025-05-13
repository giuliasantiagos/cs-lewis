let slideIndex = 1;
let slides = document.getElementsByClassName("div-slide");

function mostrarSlides(passar) {

    if (passar > slides.length) {
        slideIndex = 1;
    }

    if (passar < 1) {
        slideIndex = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function passarSlide(passar) {
    mostrarSlides(slideIndex += passar);
}

mostrarSlides(slideIndex);