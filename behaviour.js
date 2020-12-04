var intro = document.querySelector("h1");
var vsco = document.querySelector("#vsco");
var lis = document.querySelectorAll(".icons");

window.addEventListener("scroll",function(){

    var header =  document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0)

});

const logo = document.querySelectorAll('#logo path');
console.log(logo);
for (let i = 0; i<logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

gsap.registerPlugin(ScrollTrigger);

gsap.from(".soFar",{
    x:-100
})

gsap.to(".soFar",{
    scrollTrigger:{
        trigger:".soFar",
        toggleActions:"restart pause none none"
    },
    x:50
});


gsap.from("#oneSf",{
    x:-100
})

gsap.to("#oneSf",{
    scrollTrigger:{
        trigger:"#oneSf",
        toggleActions:"restart pause none none"
    },
    x:50
});



gsap.from("#twoSf",{
    x:-100
})

gsap.to("#twoSf",{
    scrollTrigger:{
        trigger:"#twoSf",
        toggleActions:"restart pause none none"
    },
    x:50
});

gsap.from(".ltr",{
    x:-100
})

gsap.to(".ltr",{
    scrollTrigger:{
        trigger:".ltr",
        toggleActions:"restart pause none none"
    },
    x:2
});

gsap.from(".rtl",{
    x:100
})

gsap.to(".rtl",{
    scrollTrigger:{
        trigger:".rtl",
        toggleActions:"restart pause none none"
    },
    x:-2
});

gsap.from(".mainLogo",{
    x:100
})

gsap.to(".mainLogo",{
    scrollTrigger:{
        trigger:".mainLogo",
        toggleActions:"restart pause none none"
    },
    x:-2
});


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector(".nav-links");
    const leenks = document.querySelectorAll(".nav-links li");


    burger.addEventListener("click",function(){
        nav.classList.toggle('nav-active');
        
        leenks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = ""
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`;
        }
    });

    burger.classList.toggle('toggle'); 

    });


}
navSlide();


(function() {

    'use strict';
  
    // define variables
    var items = document.querySelectorAll(".timeline li");

    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  
  })();


  