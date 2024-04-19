// document.addEventListener("DOMContentLoaded", (event) => {
//     gsap.registerPlugin(ScrollTrigger)
//     gsap.to('#Overview',{
//         scrollTrigger:{
//             trigger:"#Overview",
//             toggleActions: "play complete reverse reset",
//             start:'+=20 bottom',
//         },
//         y:-100,
//         duration:1,
//         ease:"power1.out",
//     })
//   ScrollTrigger.refresh();
//    });
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 80 * (i+1)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1200,
    easing: "easeOutExpo",
    delay: 2000
  });