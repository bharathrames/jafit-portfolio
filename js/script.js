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


    /* ================= URL CATEGORY ================= */

    const urlParams =
        new URLSearchParams(window.location.search);

    const selectedCategory =
        urlParams.get("category");


    /* ================= INITIAL CATEGORY ================= */

    if (selectedCategory) {

        /*
         * Find the button matching
         * the category from the URL
         */

        const matchingButton =
            document.querySelector(
                `.filter-btn[data-filter="${selectedCategory}"]`
            );


        if (matchingButton) {

            /* Remove active from all buttons */

            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            /* Activate matching button */

            matchingButton.classList.add("active");


            /* Show matching category */

            applyFilter(selectedCategory);

        } else {

            /* If URL category is invalid,
               show Garment */

            applyFilter("garment");

        }

    } else {

        /*
         * No category in URL,
         * so show Garment by default
         */

        applyFilter("garment");

    }


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


/* ================= CONTACT FORM → WHATSAPP ================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // WhatsApp number
        const whatsappNumber = "918015452392";

        // Create WhatsApp message
        const whatsappMessage =
            `Hello Jafit Jessica,
My name is ${name}.
Email: ${email}
Subject: ${subject || "General Enquiry"}
Message:${message}
Thank you.`;

        // Encode message for WhatsApp URL
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // Open WhatsApp
        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappURL, "_blank");

    });

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

/* =========================================================
   LUXURY PRELOADER
   ========================================================= */

const preloader = document.getElementById("preloader");

if (preloader) {

    window.addEventListener("load", () => {

        // Small delay so the animation feels intentional
        setTimeout(() => {

            preloader.classList.add("hide");

            // Remove from DOM after fade-out
            setTimeout(() => {
                preloader.style.display = "none";
            }, 1000);

        }, 900);

    });

}