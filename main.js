
var arrPic = [{
    img:"picOne.jpg",
    name: "Spring"
    },
    {
    img: "picTwo.jpg",
    name: "Summer"
    },
    {
    img: "picThree.jpg",
    name: "Autumn"
    },
    {
    img: "picFour.jpg",
    name: "Winter"
}];

function addPic(){
    arrPic.forEach(function(pic){
        var pictures = document.querySelector('.container');
        pictures.appendChild(createPic(pic));
    });
};


function createPic(imgData){
    var pic = document.createElement('div');
    pic.classList.add('picData');

    var img = '<img src ="img/' + imgData.img + '" alt= ""/>';
    var name = '<div>' + imgData.name + '</div>';
    
    pic.innerHTML = img + name;
    return pic;
};

addPic();

function addThumb(){
    arrPic.forEach(function(thumb){
        var tn = document.querySelector('.nails');
        tn.appendChild(createThumb(thumb));

    });
};

addThumb();

function createThumb(thumbData){
    var thumb = document.createElement('span');
    thumb.classList.add('thumbnails');

    var img = '<img src ="img/' + thumbData.img + '" alt= ""/>';
    thumb.innerHTML = img;
    return thumb;
}

var slideNum = 0; 

// SWITCH SLIDER//
   
// function slider(){ 
//     var images = document.getElementsByClassName("picData"); 
//     var dots = document.getElementsByClassName("thumbnails");   

//     for (var i = 0; i < images.length; i++){ 
//         images[i].style.display = "none";  
//     };

//     slideNum++;  
   
//     if (slideNum > images.length){ 
//         slideNum = 1; 
//     };

//     for (i = 0; i < dots.length; i++) { 
//         dots[i].className = dots[i].className.replace(" active", ""); 
//     }; 
   
//     dots[slideNum - 1].className += " active"; 
//     images[slideNum - 1].style.display = "flex"; 

//     setTimeout(slider, 5000);  
// };

// slider();

//SLIDE SLIDER//

var slideNumber = 0;
var dots = document.getElementsByClassName("thumbnails");
dots[slideNum].className += " active";

function slide(){
    var slideContainer = document.querySelector('div');
    var images = document.getElementsByClassName("picData");
    var thumb = document.getElementsByClassName("nails");
    
    slideContainer.style.marginLeft = slideNumber + "px"; 
    slideNumber = slideNumber - 1000;
    
    dots[slideNum].className = dots[slideNum].className.replace(" active", "");

};

 setInterval(function()
        {slide(); app()}, 5000);

 function app(){
    var container = document.querySelector('div');
    var first = document.querySelector('.picData');
   
    container.appendChild(first);
    container.style.marginLeft = "0px";
    
    slideNum = slideNum + 1;
    
    if(slideNum > dots.length -1){
        slideNum = 0; 
    };

    dots[slideNum].className += " active"; 
 };



