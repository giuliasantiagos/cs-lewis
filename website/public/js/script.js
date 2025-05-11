    let slideIndex = 0;
    let slides = document.getElementsByClassName("div-slide");

function mostrarSlides(slideIndex) {

    for(var i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";

}

function proximoSlide(){

    if(slideIndex > slides.length){
        slideIndex = 0
    } else{
        slideIndex += 1;
    }

    mostrarSlides(slideIndex);
}

function anteriorSlide(){

    if(slideIndex - 1 <= 0){
        slideIndex = slides.length - 1;
    } else{
        slideIndex -= 1;
    }

    mostrarSlides(slideIndex);
}

mostrarSlides(slideIndex);
