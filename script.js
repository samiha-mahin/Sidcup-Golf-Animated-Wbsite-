var crsr= document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+30 +"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x -200 +"px"
    blur.style.top = dets.y -200 +"px"

})
var h4all= document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale= 3
        crsr.style.border= "0.6px solid #fff" 
        crsr.style.background="transparent" 
        
       
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale= 1
        crsr.style.border= "solid #95c11e" 
        crsr.style.background="#95c11e" 
        
       
    })
})

gsap.to("#nav",{
    backgroundColor : "#000",
    height : "110px",
    duration : 0.5,
    scrollTrigger: {
        trigger : "#nav",
        scroller : "body",
        // markers : true,
        start : "top -10%",
        end : "top -11%",
        scrub : 1,


    }

})
gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger: {
        trigger : "#main",
        scroller : "body",
        // markers : true ,
        start : "top -25%",
        end : "top -80%",
        scrub : 2,
    }
})
gsap.from("#about-us",{
     y: 90,
     opacity: 0.5,
    duration: 0.5,
    stagger:0.1,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 60%",
      end: "top 55%",
      scrub: 2,
    }

})
gsap.from(".cards", {
    scale: 0.6,
    // opacity:0,
    duration: 2,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".cards",
      scroller: "body",
      // markers:false,
      start: "top 70%",
      end: "top 65%",
      scrub: 2,
    },
  });
  gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#page4 h1", {
    y: 15,
    duration : 0.5,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 2,
    },
  });
  