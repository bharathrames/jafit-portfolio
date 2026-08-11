/* =====================================================
   JAFIT JESSICA
   PORTFOLIO JAVASCRIPT
===================================================== */


/* ================= PRELOADER ================= */

window.addEventListener("load", () => {

    const preloader =
        document.querySelector(".preloader");

    if (preloader) {

        setTimeout(() => {

            preloader.classList.add("hide");

        }, 700);

    }

});


/* ================= MOBILE MENU ================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const mobileMenu =
    document.querySelector(".mobile-menu");


if (menuToggle && mobileMenu) {

    menuToggle.addEventListener(
        "click",
        () => {

            mobileMenu.classList.toggle("active");

            document.body.classList.toggle(
                "menu-open"
            );

        }
    );


    const mobileLinks =
        document.querySelectorAll(
            ".mobile-menu a"
        );


    mobileLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileMenu.classList.remove(
                    "active"
                );

                document.body.classList.remove(
                    "menu-open"
                );

            }
        );

    });

}


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= PORTFOLIO FILTER ================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const portfolioItems =
    document.querySelectorAll(".portfolio-item");

if (
    filterButtons.length &&
    portfolioItems.length
) {

    /* ================= FILTER FUNCTION ================= */

    const applyFilter = (filter) => {

        portfolioItems.forEach(item => {

            const category =
                item.dataset.category;

            if (category === filter) {

                item.classList.remove("hidden");

            } else {

                item.classList.add("hidden");

            }

        });

    };


    /* ================= BUTTON CLICK ================= */

    filterButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const filter =
                    button.dataset.filter;


                /* Remove active from all buttons */

                filterButtons.forEach(btn => {

                    btn.classList.remove("active");

                });


                /* Add active to clicked button */

                button.classList.add("active");


                /* Apply selected category */

                applyFilter(filter);

            }
        );

    });


    /* ================= DEFAULT CATEGORY ================= */

    /* Garment is displayed when page loads */

    applyFilter("garment");

}



/* ================= LIGHTBOX ================= */

const lightbox =
    document.querySelector(".lightbox");

const lightboxImage =
    document.querySelector(
        ".lightbox img"
    );

const closeLightbox =
    document.querySelector(
        ".lightbox-close"
    );


const galleryImages =
    document.querySelectorAll(
        ".portfolio-image img, .image-wrapper img"
    );


if (
    lightbox &&
    lightboxImage
) {

    galleryImages.forEach(image => {

        image.addEventListener(
            "click",
            () => {

                lightboxImage.src =
                    image.src;

                lightboxImage.alt =
                    image.alt;

                lightbox.classList.add(
                    "active"
                );

                document.body.style.overflow =
                    "hidden";

            }
        );

    });


    const closeBox = () => {

        lightbox.classList.remove(
            "active"
        );

        document.body.style.overflow =
            "";

    };


    if (closeLightbox) {

        closeLightbox.addEventListener(
            "click",
            closeBox
        );

    }


    lightbox.addEventListener(
        "click",
        event => {

            if (
                event.target === lightbox
            ) {

                closeBox();

            }

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeBox();

            }

        }
    );

}


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                document.getElementById(
                    "name"
                ).value.trim();


            const email =
                document.getElementById(
                    "email"
                ).value.trim();


            const message =
                document.getElementById(
                    "message"
                ).value.trim();


            const status =
                document.getElementById(
                    "formStatus"
                );


            if (
                !name ||
                !email ||
                !message
            ) {

                status.textContent =
                    "Please complete all required fields.";

                return;

            }


            status.textContent =
                "Thank you. Your message is ready to send.";


            contactForm.reset();

        }
    );

}


/* ================= IMAGE ERROR HANDLER ================= */

document
    .querySelectorAll("img")
    .forEach(image => {

        image.addEventListener(
            "error",
            () => {

                image.style.background =
                    "#eeeeee";

            }
        );

    });


/* ================= ACTIVE PAGE ================= */

const currentPage =
    window.location.pathname
        .split("/")
        .pop() || "index.html";


document
    .querySelectorAll(
        ".desktop-nav a"
    )
    .forEach(link => {

        const href =
            link.getAttribute("href");


        if (
            href === currentPage
        ) {

            link.classList.add(
                "active"
            );

        }

    });