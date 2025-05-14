console.log("Hello World");

document.querySelectorAll('[industry-card]').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('is-active');
    card.querySelectorAll('[toggle-class]').forEach(el => {
      el.classList.add('is-active');
    });
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('is-active');
    card.querySelectorAll('[toggle-class]').forEach(el => {
      el.classList.remove('is-active');
    });
  });
});


// Home-Hero stars
const settings = {
    duration: 1.5,     // How long each fade animation lasts (in seconds)
    overlap: 0.4       // Interval between starting new animations (in seconds)
  };
  
  const stars = gsap.utils.toArray('[rx=1]');
  
  function animateStar(star) {
    gsap.fromTo(
      star,
      { opacity: 0.1 },
      {
        opacity: 1,
        duration: settings.duration,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut"
      }
    );
  }
  
  function loopAnimation() {
    const randomStar = gsap.utils.random(stars);
    animateStar(randomStar);
    setTimeout(loopAnimation, settings.overlap * 1000); // convert to ms
  }
  
  // Start the animation loop
  loopAnimation();



  