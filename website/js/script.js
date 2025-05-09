let slideIndex = 1;
mostrarSlides(slideIndex);

// Função para passar os slides (setas!)
function proximoSlide(passar) {
mostrarSlides(slideIndex += passar);
}

// Função para ir a um slide específico
function slideAtual(passar) {
mostrarSlides(slideIndex = passar);
}

function mostrarSlides(passar) {

    let slides = document.getElementsByClassName("div-slide");
    let dots = document.getElementsByClassName("dot");

    let qtdSlides = slides.length;
    let qtdDots = dots.length;

    if (passar > qtdSlides){
        slideIndex = 1;
    }
    
    if (passar < 1){
        slideIndex = qtdSlides;
    }

    for (var i = 0; i < qtdSlides; i++){
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}