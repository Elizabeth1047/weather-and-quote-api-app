const timeline = gsap.timeline({ default: { duration: 2 } });
timeline
  .to(".quotescontainer", {
    y: "0% ",
    ease: "power4.inOut",
    "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 2.2,
    opacity: 1,
  })
  .from(".weather", { x: "-100vw", ease: "power4.inOut", duration: 2.2 })
  .from("button", {
    opacity: 0,
    ease: "power4.inOut",
    rotation: 720,
    duration: 2.2,
  });
//
