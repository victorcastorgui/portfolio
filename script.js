
/*========== Scroll to top when refreshed =========*/
document.body.scrollTop = document.documentElement.scrollTop = 0;

/*========== Animate menu icon =========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let mode = document.querySelector('#mode');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*========== Theme Mode Change =========*/

mode.onclick = () => {
    document.body.classList.toggle('light-theme');
    if(document.body.classList.contains('light-theme')){
        document.querySelector('#mode').className = 'bx bxs-moon bx-spin-hover';
    }else{
        document.querySelector('#mode').className = 'bx bxs-sun bx-spin-hover';
    }
};

/*============== scroll sections active link ====== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
    
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // remove menu after click
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* ======= Scroll Reveal ====== */
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image, .skills-container, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-image', { origin: 'right' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });

/* ======= Typed JS ====== */
const typed = new Typed('.frontendtext', {
    strings: ['Web Developer', 'UI/UX Designer', 'Business Owner'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 700,
    loop: true
});