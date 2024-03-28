var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

const tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#scene",
        pin:true,
        scrub:1,
        end:"+=3000"
    }
});

tl.to("#scene>div:nth-child(1)>div",{
    rotate:360, opacity:0
}).from("#scene>div:nth-child(2)>div",{
    rotate:-300, opacity:0
},"<").to("#scene>div:nth-child(2)>div",{
    rotate:0, opacity:1
},"<").to("#scene>div:nth-child(2)>div",{
    rotate:360, opacity:0
}).from("#scene>div:nth-child(3)>div",{
    rotate:0, opacity:0
},"<").to("#scene>div:nth-child(3)>div",{
    rotate:360, opacity:1
},"<")


// Smooth scroll
const lenis = new Lenis(
    {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    }
  )
  
  lenis.on('scroll', (e) => {
    console.log(e)
  })
  
  function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf)