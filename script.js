/* Toggle icon navbar */
document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
  };
});

/* Scroll section active link */
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav a");

  window.onscroll = () => {
    sections.forEach((sec) => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          document.querySelector(`header nav a[href*="${id}"]`).classList.add("active");
        });
      }
    });

    /* Sticky navbar */
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
  };
});

/* Scroll reveal */
document.addEventListener("DOMContentLoaded", function() {
  ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal(".home-content, heading", { origin: "top" });
  ScrollReveal().reveal(".home-img, .experience-container, .project-box,.contact form", { origin: "button" });
  ScrollReveal().reveal(".home-contact h1, .about-img", { origin: "left" });
  ScrollReveal().reveal(".home-contact p, .about-content", { origin: "right" });
});

/* Experience animation */
document.addEventListener("DOMContentLoaded", function() {
  const experienceBoxes = document.querySelectorAll(".experience-box");

  experienceBoxes.forEach((experienceBox) => {
    const images = experienceBox.querySelectorAll(".experience-images img");
    let currentImageIndex = 0;

    images[currentImageIndex].classList.add("active");

    setInterval(() => {
      images[currentImageIndex].classList.remove("active");
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].classList.add("active");
    }, 2000);
  });
});

/* Typed text */
document.addEventListener("DOMContentLoaded", function() {
  const typed = new Typed(".multiple-text", {
    strings: [
      "Embedded System and IoT Engineer",
      "Electrical Enthusiast",
      "Robotics Enthusiast",
      "Artificial Intelligence Enthusiast",
    ],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
  });
});


// /*==================================== toggle icon navbar ====================================*/

// let menuIcon = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");

// menuIcon.onclick = () => {
//   menuIcon.classList.toggle("fa-xmark");
//   navbar.classList.toggle("active");
// };

// /*==================================== scroll section active link ====================================*/

// let sections = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll("header nav a");

// window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach.apply((links) => {
//         links.classList.remove("active");
//         document
//           .querySelector("header nav a[href*=" + id + "]")
//           .classList.add("active");
//       });
//     }
//   });

//   /*==================================== sticky navbar ====================================*/
//   let header = document.querySelector("header");
//   header.classList.toggle("sticky", window.scrollY > 100);

//   /*==================================== remove toggle icon and navbar ====================================*/
//   menuIcon.classList.remove("fa-xmark");
//   navbar.classList.remove("active");
// };

// /*==================================== scroll reveal ====================================*/
// ScrollReveal({
//   distance: "80px",
//   duration: 2000,
//   delay: 200,
// });

// ScrollReveal().reveal(".home-content, heading", { origin: "top" });
// ScrollReveal().reveal(
//   ".home-img, .experience-container, .project-box,.contact form",
//   { origin: "button" }
// );
// ScrollReveal().reveal(".home-contact h1, .about-img", { origin: "left" });
// ScrollReveal().reveal(".home-contact p, .about-content", { origin: "right" });

// /* experience animation */
// document.addEventListener("DOMContentLoaded", function () {
//   const experienceBoxes = document.querySelectorAll(".experience-box");

//   experienceBoxes.forEach((experienceBox) => {
//     const images = experienceBox.querySelectorAll(".experience-images img");
//     let currentImageIndex = 0;

//     images[currentImageIndex].classList.add("active");

//     setInterval(() => {
//       images[currentImageIndex].classList.remove("active");
//       currentImageIndex = (currentImageIndex + 1) % images.length;
//       images[currentImageIndex].classList.add("active");
//     }, 2000);
//   });
// });

// /* typed text */
// document.addEventListener("DOMContentLoaded", function () {
//   // Typed.js configuration
//   const typed = new Typed(".multiple-text", {
//     strings: [
//       "Embedded System and IoT Engineer",
//       "Electrical Enthusiast",
//       "Robotics Enthusiast",
//       "Artificial Intelligence Enthusiast",
//     ],
//     typeSpeed: 100,
//     backSpeed: 50,
//     backDelay: 2000,
//     loop: true,
//   });
// });

// /*SLider experience*/
