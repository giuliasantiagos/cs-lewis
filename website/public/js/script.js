var slideIndex = 0;

    let slides = document.getElementsByClassName("div-slide");
    var qtdSlides;

function mostrarSlides(slideIndex) {

    qtdSlides = slides.length;

    for(var i = 0; i < qtdSlides; i++){
        slides[i].style.display = "none";
    }

    slides[slideIndex-i].style.display = "block";

}

function proximoSlide(){
    qtdSlides = slides.length;
    slideIndex = (slideIndex+1) % qtdSlides;
    mostrarSlides(slideIndex);
}

mostrarSlides(slideIndex);
