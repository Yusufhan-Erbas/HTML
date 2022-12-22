//initiation of the card's position and  index
var cardIndex=4;
var positionLeft=0;
//accessing div that holds all slides in one
var cardSlider=document.querySelector("#cardSlider");
console.log(cardSlider);
//get the size of carouselInner width that contains all slide items
var carouselInnerWidth=$('.carousel-inner')[0].scrollWidth;
console.log(carouselInnerWidth);
//get the size of card item's width in order to calculating count of 
var cardItemWidth=$('.carousel-item').width();
console.log(cardItemWidth);
//carouselInnerWidth is divided by cardItemwidth because of calculation countItem
var countItem=carouselInnerWidth/cardItemWidth;
console.log("countItem="+countItem);
//slide item right to left if next button clicked
$(".carousel-control-next").on("click",function(){
    if(cardIndex<countItem){
        positionLeft-=cardItemWidth;
        console.log(positionLeft);
    }
    else{}
  
    $('.carousel-inner').animate({left:positionLeft});
});
$(".carousel-control-prev").on("click",function(){
    if(cardIndex>0){
        cardIndex--;
        positionLeft-=cardItemWidth;        
    }
    else{}
  
    $('.carousel-inner').animate({left:positionLeft});
});


