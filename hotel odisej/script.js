function textsplitting(){
    let allh1=document.querySelectorAll("#page2 h1")
let clutter=""
let h1text;
let spilletedtext;
allh1.forEach(function(element){
    clutter=""
   h1text=element.textContent
   spilletedtext=h1text.split("")
   spilletedtext.forEach(function(e){
    clutter+=`<span>${e}</span>`
   })
   element.innerHTML=clutter;
});
}
function gsapanimation(){
    let t1=gsap.timeline()
t1.from("#page1",{
    scale:0.5,
    duration:1.2,
    delay:.2
})
t1.from("#page1 h1",{
    y:-50,
    duration:1,
    opacity:0
})
gsap.to("#page2 h1 span",{
    color:"#E3E3C4",
    stagger:0.1,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        start:"top 45%",
        end:"top -15%",
        scrub:2
    }
})
}
function locoscroll(){
    sap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("main").style.transform
    ? "transform"
    : "fixed"*/
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
textsplitting()
gsapanimation()
locoscroll()