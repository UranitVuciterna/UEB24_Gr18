document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 1, 
            },
        },
    });
});


const btn = document.getElementById('scrollToTop'), sound = document.getElementById('scrollSound');
btn.onclick = () => {
    sound.play().catch(err => console.error('Sound error:', err));
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
window.onscroll = () => {
    btn.style.display = (window.scrollY > 100) ? 'flex' : 'none';
};
