var slider = document.getElementById("slider");

var images = [
  {
    id: 1,
    title: 'Image 1',
    image_url: 'images/1.jpg',
    image_alt: 'First image',
    isCurrent: true
  },
  {
    id: 2,
    title: 'Image 2',
    image_url: 'images/2.jpg',
    image_alt: 'Second image',
    isCurrent: false
  },
  {
    id: 3,
    title: 'Image 3',
    image_url: 'images/3.jpg',
    image_alt: 'Third image',
    isCurrent: false
  }
];

document.addEventListener("DOMContentLoaded", init(images));



function init(images) {
  images.forEach(function(image) {
    var first_slide = document.createElement("div");
    first_slide.id = image.id;
    first_slide.innerHTML = "<a href=\"\" class=\"popup\"><img alt=\""+ image.image_alt + "\" src=\"" + image.image_url + "\" /></a>";
  
    if(image.isCurrent) {
      first_slide.className = 'slide current';
    } else {
      first_slide.className = 'slide';
    }

    slider.appendChild(first_slide);
    
  });

document.querySelector(".prev").style.opacity = '0';
document.querySelector(".next").style.opacity = '0';




}

  slider.addEventListener("mouseenter", function() {
    
        document.querySelector(".prev").style.display = 'block';
        document.querySelector(".next").style.display = 'block';
        myMove();
    });

    slider.addEventListener("mouseleave", function() {
     
      Object.assign(document.querySelector(".prev").style,{display: "none", opacity: 0});
      Object.assign(document.querySelector(".next").style,{display: "none", opacity: 0});

  });


//Animate navigation appear

  function myMove() {
    var prevBtn = document.querySelector(".prev");
    var nextBtn = document.querySelector(".next");
    var id = setInterval(frame, 100);
    var pos = 0;
    function frame() {
        if (pos >= 1) {
            clearInterval(id);
        } else {
            pos = pos + 0.1;
            prevBtn.style.opacity = pos;
            nextBtn.style.opacity = pos;
        }
    }
} 


//Animate Slider 

document.querySelector("#nextSlide").addEventListener("click", 
function() { 
  
  var currentSlide = document.querySelector(".current");
  

    if (currentSlide.nextElementSibling == null) {
        document.querySelectorAll(".slide")[0].className = 'slide current';
        currentSlide.classList.remove('current');
      }

    currentSlide.nextElementSibling.className = 'slide current';
    currentSlide.classList.remove('current');
  
});

document.querySelector("#prevSlide").addEventListener("click", 
function(e) { 
  
  var currentSlide = document.querySelector(".current");
     
    if ( currentSlide.previousElementSibling.tagName == "A" ) {
        document.querySelector(".slide:last-child").className = 'slide current';
        currentSlide.classList.remove('current');
      } else {
        currentSlide.previousElementSibling.className = 'slide current';
        currentSlide.classList.remove('current');
      }

  
});

document.querySelectorAll("a.popup").forEach(function(elm) {
  elm.addEventListener("click", PopUpImage);
});

//PopUp Image
function PopUpImage(e) {
  var e = e || window.event;

  e.preventDefault();
  
  var currentImage = e.target.src,
  fullImage2 = document.querySelector("#popup img");

  console.log(currentImage);
  if(!document.querySelector("#popup .image_popup").hasChildNodes()) {
    var fullImage = document.createElement("img");
    fullImage.classList.add("img");
    fullImage.src = currentImage;
  
    document.querySelector(".image_popup").appendChild(fullImage);
  } else {
    fullImage2.src = currentImage;
  }

  if(fullImage2 && currentImage == undefined) {
    document.getElementById("popup").style.display = "none";
  }

  document.querySelector(".overlay_popup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
  
  });

  //fullImage2.src = currentImage;
  document.getElementById("popup").style.display = "block";

  //if User fires ESC and ENTER
  document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27 || evt.which == 32) {
      document.getElementById("popup").style.display = "none";
    }
};

  //Close PopUp Image
  document.querySelector(".popup_close_btn").addEventListener("click", function() {
  document.getElementById("popup").style.display = "none";

});



}


