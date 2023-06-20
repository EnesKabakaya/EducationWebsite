var swiper = new Swiper('.slider', {
    pagination: {
        el: '.swiper-pagination',
    },
    loop: true,
    grabCursor: true,
})

var swiper = new Swiper('.slider1', {
    loop: true,
    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        991: {
            slidesPerView: 3,
        },
    },
})


window.addEventListener('scroll', () => {
    document.querySelector('.header-container').classList.toggle('navbar-scroll', window.scrollY > 0);
});
