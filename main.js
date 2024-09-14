let imges = document.querySelectorAll('.header-slider-imges ul img');
let rightArrow = document.querySelector('.rightArrow');
let leftArrow = document.querySelector('.leftArrow');
let n = 0;

function changeSlide(){
    for(let i=0; i<imges.length; i++){
        imges[i].style.display = "none";
    }
    imges[n].style.display = "inline";
}

changeSlide();
leftArrow.addEventListener("click",()=>{
    if(n>0){
        n--;
    } else{
        n = imges.length-1;
    }
    changeSlide();
});

rightArrow.addEventListener("click",()=>{
    if(n<imges.length-1){
        n++;
    } else{
        n = 0;
    }
    changeSlide();
});

setInterval(() => {
    if(n>=0){
        n++;
        if(n>5){
            n=0;
        }
    }
    changeSlide();
}, 4000 );
