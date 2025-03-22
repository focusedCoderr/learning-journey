let slideIndex = 1;

showSlides(slideIndex);



function plusSlides(n){
    showSlides(slideIndex += n)
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if(n > slides.length){
        slideIndex = 1;
    }

    if(n < 1) {
        slideIndex = slides.length;
    }

    for(i=0; i < slides.length; i++){
        dots[i].className = dots[i].className.replace("active", "");
    }
}