/* =========================================================
   AURA CAFÉ
   Vanilla JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu a");


  /* ================= STICKY HEADER ================= */

  const updateHeader = () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  updateHeader();

  window.addEventListener("scroll", updateHeader, {
    passive: true
  });


  /* ================= MOBILE MENU ================= */

  menuToggle.addEventListener("click", () => {

    const isOpen = navMenu.classList.toggle("active");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen
        ? "Close navigation menu"
        : "Open navigation menu"
    );

  });


  /* ================= CLOSE MENU AFTER CLICK ================= */

  navLinks.forEach((link) => {

    link.addEventListener("click", () => {

      navMenu.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

    });

  });


  /* ================= ESCAPE KEY ================= */

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

      navMenu.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

    }

  });


  /* ================= INTERSECTION OBSERVER ================= */

  const animatedElements = document.querySelectorAll(
    ".menu-card, .review-card, .about-content, .contact-content"
  );

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.style.animationPlayState = "running";

            observerInstance.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );

    animatedElements.forEach((element) => {

      element.style.animationPlayState = "paused";

      observer.observe(element);

    });

  }


  /* ================= CURRENT YEAR ================= */

  const footerYear = document.querySelector(".footer-bottom p");

  if (footerYear) {

    footerYear.textContent =
      `© ${new Date().getFullYear()} AURA Café. All rights reserved.`;

  }

});