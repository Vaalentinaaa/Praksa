document.addEventListener("DOMContentLoaded", () => {
    const laptopImg = document.querySelector(".laptop img");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                laptopImg.classList.add("slide-in");
                observer.unobserve(laptopImg); 
            }
        });
    });

    observer.observe(laptopImg);
});
const laptopImg = document.querySelector('.laptop img');
laptopImg.classList.add('slide-in');

document.addEventListener("DOMContentLoaded", () => {
    const laptopImg = document.querySelector(".laptop img");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                laptopImg.classList.add("slide-in");
                observer.unobserve(laptopImg); 
            }
        });
    });

    observer.observe(laptopImg);

    const elements = document.querySelectorAll('.scroll-animation');
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    });
    
    elements.forEach(element => {
        scrollObserver.observe(element);
    });
});

