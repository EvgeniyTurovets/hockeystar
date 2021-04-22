document.addEventListener('DOMContentLoaded', function() {

    const accordions = document.querySelectorAll(".accordion");

    const openAccordion = (accordion) => {
        const content = accordion.querySelector(".accordion__content");
        accordion.classList.add("accordion__active");
        content.style.maxHeight = content.scrollHeight + "px";
    };

    const closeAccordion = (accordion) => {
        const content = accordion.querySelector(".accordion__content");
        accordion.classList.remove("accordion__active");
        content.style.maxHeight = null;
    };

    accordions.forEach((accordion) => {
        const intro = accordion.querySelector(".accordion__intro");
        const content = accordion.querySelector(".accordion__content");

        intro.onclick = () => {
            if (content.style.maxHeight) {
                closeAccordion(accordion);
            } else {
                accordions.forEach((accordion) => closeAccordion(accordion));
                openAccordion(accordion);
            }
        };
    });


    const swiper = new Swiper('.swiper-container', {
        spaceBetween: 70,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
    });

    const swiper2 = new Swiper('.swiper-container2', {
        spaceBetween: 70,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
    });


    // refreshFsLightbox();


    let videoNext = document.getElementById('video-next')
    videoNext.addEventListener('click', function() {
        swiper.slideNext();
    })

    let videoPrev = document.getElementById('video-prev')
    videoPrev.addEventListener('click', function() {
        swiper.slidePrev();
    })

    let videoNext2 = document.getElementById('video-next2')
    videoNext2.addEventListener('click', function() {
        swiper2.slideNext();
    })

    let videoPrev2 = document.getElementById('video-prev2')
    videoPrev2.addEventListener('click', function() {
        swiper2.slidePrev();
    })


    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
})