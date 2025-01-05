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
    window.scrollTo({top: 0, behavior: 'smooth'});
};
window.onscroll = () => {
    btn.style.display = (window.scrollY > 100) ? 'flex' : 'none';
};

    const scrollToTopButton = document.getElementById("scrollToTop");

    // Initialize variables for dragging
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    // Set initial position for the button (for fixed positioning)
    let initialX = scrollToTopButton.offsetLeft;
    let initialY = scrollToTopButton.offsetTop;

    scrollToTopButton.addEventListener("mousedown", (e) => {
    isDragging = true;

    // Calculate offset relative to the button
    offsetX = e.clientX - scrollToTopButton.getBoundingClientRect().left;
    offsetY = e.clientY - scrollToTopButton.getBoundingClientRect().top;

    // Prevent text selection while dragging
    e.preventDefault();
});

    document.addEventListener("mousemove", (e) => {
    if (isDragging) {
    // Calculate new position
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    // Update the button's position while keeping it visible
    scrollToTopButton.style.position = "fixed";
    scrollToTopButton.style.left = `${x}px`;
    scrollToTopButton.style.top = `${y}px`;
}
});

    document.addEventListener("mouseup", () => {
    isDragging = false;
});



const destinations = [
    {
        image: "../img/bahamas.jpg",
        title: "Tropical Paradise",
        location: "BAHAMAS",
        rating: 4.7,
        link: "https://www.royalcaribbean.com/blog/wp-content/uploads/2023/10/Screenshot-2023-10-24-at-10.03.57-AM.jpg"
    },
    {
        image: "../img/miami.webp",
        title: "Vibrant Beaches",
        location: "MIAMI",
        rating: 4.5,
        link: "https://gentlemansportion.com/wp-content/uploads/2021/08/1000px-2021-weekend-cruises-norwegian-sky_2_0_edited-4.jpg?w=768"
    },
    {
        image: "../img/texas.jpg",
        title: "Cowboy Culture",
        location: "TEXAS",
        rating: 4.8,
        link: "https://www.royalcaribbean.com/blog/wp-content/uploads/2018/02/Allure-Of-The-Seas-Header-Option-460x300.jpg"
    },
    {
        image: "../img/Singapore.jpeg",
        title: "Modern hub for Asian cruises",
        location: "SINGAPORE",
        rating: 4.9,
        link: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/89/db/6d/caption.jpg?w=500&h=400&s=1"
    },
    {
        image: "../img/fiji.jpg",
        title: "A paradise for relaxation",
        location: "FIJI",
        rating: 4.8,
        link: "https://www.bluelagooncruises.com/library/images/zoomfiji_55_a11.jpg"
    },
    {
        image: "../img/Dubai-Marina.jpg",
        title: "Vibrant waterfront",
        location: "DUBAI MARINA",
        rating: 4.9,
        link: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR5rBIfBC8YlTx9xdKfjxM3wIcmvIl5Tx2bh5sDRAFX4Q62fm1O"
    }
];

