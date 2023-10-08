var typed = new Typed(".span-text-2", {
    strings: ["Freelancer", "Full Stack Developer", "UI/UX Designer"],
    typeSpeed: 75,
    backSpeed: 75,
    loop: true
})

//js script for arrow in banner
const workLink = document.querySelector('.work-link');
const bannerArrow = document.querySelector('.banner-arrow');

workLink.addEventListener('mouseover', () => {
    bannerArrow.classList.add('rotate-arrow');
});

workLink.addEventListener('mouseout', () => {
    bannerArrow.classList.remove('rotate-arrow');
});

const visitLink = document.getElementById('visitLink');
const visitIcon = document.getElementById('visitIcon');