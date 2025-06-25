gsap.registerPlugin(ScrollTrigger)

const menBtn = document.querySelector(".men")
const womenBtn = document.querySelector(".women")
const maleCloths = document.querySelector(".male-cloths")
const femaleCloths = document.querySelector(".female-cloths")
const femaleUnderline = document.querySelector('.female-underline')
const maleUnderline = document.querySelector('.male-underline')

function toggleDisplay(showEl, hideEl, showUnderline, hideUnderline) {
    showEl.classList.remove("hidden");
    showEl.classList.add("flex");

    hideEl.classList.remove("flex");
    hideEl.classList.add("hidden");

    showUnderline.classList.remove("hidden");
    showUnderline.classList.add("flex");

    hideUnderline.classList.remove("flex");
    hideUnderline.classList.add("hidden");

    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    if (typeof window.animateProductCards === 'function') {
        window.animateProductCards();
    }
    
    ScrollTrigger.refresh();
}


toggleDisplay(femaleCloths, maleCloths, femaleUnderline, maleUnderline);


menBtn.addEventListener("click", () =>
    toggleDisplay(maleCloths, femaleCloths, maleUnderline, femaleUnderline)
);

womenBtn.addEventListener("click", () =>
    toggleDisplay(femaleCloths, maleCloths, femaleUnderline, maleUnderline)
);