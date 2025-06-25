gsap.registerPlugin(ScrollTrigger)

const timeline = gsap.timeline({ defaults: { duration: .6 } })

timeline
.from('.navbar', { y: '-100vh', opacity: 0, ease: 'power.in'})
.from('.hero-content', { opacity: 0, stagger: .5, ease: 'power1.in'})
.from('.tagline-heading', { opacity: 0, stagger: .5, ease: 'power.in'}, '<1')
.from('.tagline-para', { opacity: 0, y: '-100', ease: 'power.in'}, '<1')
.from('.tagline-btn', { opacity: 0, y: '-100', ease: 'power.in'}, '<1')


gsap.from('.showcase-1', { scrollTrigger: { trigger: '.showcase-1', start: 'top 80%', toggleActions: "play none none none"}, opacity: 0, x: -50, ease: 'power.in',  duration: .8}, 1)
gsap.from('.showcase-2', { scrollTrigger: { trigger: '.showcase-2', start: 'top 80%', toggleActions: "play none none none"}, opacity: 0, x: 50, ease: 'power.in',  duration: .8}, '<1')
gsap.from('.showcase-3', { scrollTrigger: { trigger: '.showcase-3', start: 'top 80%', toggleActions: "play none none none"}, opacity: 0, y: 100, ease: 'power.in', duration: .8}, '<1')

gsap.from('.category', { scrollTrigger: { trigger: '.category', start: 'top 80%', toggleActions: "play none none none"}, opacity: 0, y: -50, ease: 'power.in',  duration: .8})

function animateProductCards() {
  // Detect which container is visible
  const activeContainer = document.querySelector('.male-cloths.flex, .female-cloths.flex');
  if (!activeContainer) return;

  const cards = activeContainer.querySelectorAll('.product-card');

  gsap.from(cards, {
    scrollTrigger: {
      trigger: activeContainer,
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 50,
    scale: 0.95,
    stagger: 0.2,
    ease: 'power2.out',
    duration: .6
  });
}

window.animateProductCards = animateProductCards;
animateProductCards()

gsap.from('.contact-text', { scrollTrigger: { trigger: '.contact-text', start: 'top 80%', toggleActions: "play none none none"}, opacity: 0, y: -50, ease: 'power.in',  duration: .8}, 1)
gsap.from('.contact-card', { scrollTrigger: { trigger: '.contact-card', start: 'top 80%', toggleActions: "play none none none"}, opacity: 0, y: 50, ease: 'power.in',  duration: .8}, '<1')

gsap.from('.brand-name', { scrollTrigger: { trigger: '.brand-name', start: 'top 95%', toggleActions: "play none none none"}, opacity: 0, ease: 'power.in',  duration: .8}, 1)
gsap.from('.creater', { scrollTrigger: { trigger: '.creater', start: 'top 98%', toggleActions: "play none none none"}, opacity: 0, ease: 'power.in',  duration: .8}, '<1')