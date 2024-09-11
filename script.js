function mouseFollower() {
  var mouse = document.querySelector(".mousefollower");

  document.addEventListener("mousemove", function (dets) {
    var scrollX = window.scrollX || document.documentElement.scrollLeft;
    var scrollY = window.scrollY || document.documentElement.scrollTop;

    var mouseX = dets.clientX + scrollX;
    var mouseY = dets.clientY + scrollY;

    gsap.to(mouse, {
      top: mouseY,
      left: mouseX,
      ease: "power3"
    });
  });
}
function lenis() {
  const lenis = new Lenis()

  lenis.on('scroll', (e) => {

  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}
function stickyCircle() {
  var circle = document.querySelector(".innerdiv")

  window.addEventListener("scroll", function () {
    var scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    var scrollPosition = window.scrollY || window.pageYOffset;
    var scrollPercent = (scrollPosition / scrollableHeight) * 100;

    circle.style.height = scrollPercent + '%';

  })
}
function svgAnimation() {
  var path = `M 10 100 Q 500 100 1200 100`;
  var finalPath = path;

  var string = document.querySelectorAll(".svgstring");

  string.forEach(function (e) {
    e.addEventListener("mousemove", function (dets) {

      var divTop = e.getBoundingClientRect().top;
      var relativeY = dets.clientY - divTop;
      path = `M 10 100 Q ${dets.clientX} ${relativeY} 1200 100`;

      gsap.to("svg path", {
        attr: { d: path },
        duration: 0.3,
        ease: "elastic.out(1,0.3)"
      });
    });

    e.addEventListener("mouseleave", function () {
      gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 0.3,
        ease: "elastic.out(1,0.3)"
      });
    });
  })


}
function imgAnimation() {
  var textdivs = document.querySelectorAll(".textdiv");

  textdivs.forEach(function (dets) {
    var img = dets.querySelector("img");

    dets.addEventListener("mousemove", function (elem) {
      var rect = dets.getBoundingClientRect();
      var topY = elem.clientY - rect.top;
      var leftX = elem.clientX - rect.left;

      gsap.to(img, {
        opacity: 1,
        top: topY + "px",
        left: leftX + "px",
        ease: "power3"
      });
    });

    dets.addEventListener("mouseleave", function () {
      gsap.to(img, {
        opacity: 0,
        ease: "power3"
      });
    });
  });
}
function imgAnimation2() {
  var textdivs = document.querySelectorAll(".largetextdiv");

  textdivs.forEach(function (dets) {
    var img = dets.querySelector("img");
    var diffr = 0;
    var rotat = 0;
    dets.addEventListener("mousemove", function (elem) {
      diffr = elem.clientX - rotat;
      rotat = elem.clientX;
      var rect = dets.getBoundingClientRect();
      var topY = elem.clientY - rect.top;
      var leftX = elem.clientX - rect.left;


      gsap.to(img, {
        opacity: 1,
        height: "55vh",
        x: "-50%",
        y: "-50%",
        top: topY + "px",
        left: leftX + "px",
        ease: "expo.out",
        rotate: gsap.utils.clamp(-20, 20, diffr),

      });
    });

    dets.addEventListener("mouseleave", function () {
      gsap.to(img, {
        opacity: 0,
        height: "0vh",
        ease: "expo.out"
      });
    });
  });
}
function marqueAnimation() {

  window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
      gsap.to(".marque", {
        x: "-200%",
        duration: 4,
        repeat: -1,
        ease: "none"
      })
      gsap.to(".marque img", {
        rotate: 180
      })
    }
    else {
      gsap.to(".marque", {
        x: "0%",
        duration: 4,
        repeat: -1,
        ease: "none"
      })
      gsap.to(".marque img", {
        rotate: 0
      })
    }
  })

}
function colorAnimation() {
  var color1 = document.querySelector("#c1");
  var color2 = document.querySelector("#c2");
  var pageColor = document.querySelector(".color");
  color1.addEventListener("mouseenter", function (dets) {
    pageColor.style.backgroundColor = "#FFD7E7"
    color2.style.opacity = 0.5
  })
  color1.addEventListener("mouseleave", function (dets) {
    pageColor.style.backgroundColor = "#FFFFFF"
    color2.style.opacity = 1
  })
  color2.addEventListener("mouseenter", function (dets) {
    pageColor.style.backgroundColor = "#BAC4E2"
    color1.style.opacity = 0.5
  })
  color2.addEventListener("mouseleave", function (dets) {
    pageColor.style.backgroundColor = "#FFFFFF"
    color1.style.opacity = 1
  })
}
colorAnimation()
lenis();
mouseFollower();
stickyCircle();
svgAnimation();
imgAnimation();
imgAnimation2()
marqueAnimation();

function textAnimation() {
  var text = document.querySelector(".text .lowertext h1");
  var h1 = text.innerHTML; 
  var splittedText = h1.split("<br>"); 
  var clutter = "";

  splittedText.forEach(function(elem) {
    clutter += `<span><h1>${elem}</h1></span><br>`; 
  });

  text.innerHTML = clutter;

  gsap.to(".text .lowertext span h1",{
    y:0,
    duration:0.5,
    stagger:0.2,
    scrollTrigger:{
      trigger: ".page2",
      scroller:"body",
      start:"top 70%",
    }
  })
}

textAnimation();

gsap.to(".rightnav",{
  scale:0.75,
  scrollTrigger:{
    trigger:".page1",
    scroller:"body",
    start:"top top",
    scrub:4
  }
})

gsap.from(".div1 h1", {
  y: "200%",
  duration: 0.3,
  delay: 0.2,
  rotation: 6,
  ease: "circ.out"
})

gsap.to(".maintext h1",{
  y:0,
  rotate:0,
  duration:0.5,
  stagger:0.2,
  scrollTrigger:{
    trigger: ".maintext",
    scroller:"body",
    start:"top 90%",
  }
})

gsap.to(".maintext2 h1",{
  y:0,
  rotate:0,
  duration:0.5,
  delay:0.3,
  stagger:0.2,
  scrollTrigger:{
    trigger: ".page3",
    scroller:"body",
    start:"top 50%",


  }
})

gsap.to(".maintext3 h1",{
  y:0,
  rotate:0,
  duration:0.5,
  stagger:0.2,
  scrollTrigger:{
    trigger: ".page4",
    scroller:"body",
    start:"top 50%",
   
  }
})

gsap.to(".maintext4 h1",{
  y:0,
  rotate:0,
  duration:0.5,
  stagger:0.2,
  scrollTrigger:{
    trigger: ".maintext4",
    scroller:"body",
    start:"top 60%",

  }
})

function anim2(){
  var text = document.querySelector(".lasttext h1");
var h1 = text.innerHTML; // Use innerHTML to get the content with <br> tags
var splittedText = h1.split("<br>");
var clutter = "";

splittedText.forEach(function(elem){
  clutter += `<span><h1>${elem}</h1></span><br>`; 
})

text.innerHTML = clutter;

// gsap.to(".lasttext h1 span h1",{
//   y:0,
//   rotate:0,
//   duration:0.3,
//   delay:0.4,
//   stagger:0.2,
//   scrollTrigger:{
//     trigger: ".page2",
//     scroller:"body",
//     start:"90% 90%",
//     markers:true

//   }
// })
}

// anim2()















