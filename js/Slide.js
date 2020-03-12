var slideIndex = 1;
mostraSlide(slideIndex);

function controleSlide(n) {
    mostraSlide(slideIndex += n);
}

function SlideAtual(n) {
    mostraSlide(slideIndex = n);
}

function mostraSlide(n) {
    var i;
    var slides = document.getElementsByClassName("meuSlide");
    var pontos = document.getElementsByClassName("ponto");
    if (n > slides.length){slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < pontos.length; i++){
        pontos[i].className = pontos[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    pontos[slideIndex-1].className += " active";
}