'use strict';


// profile toggle function

const elementToggleFunc = function (elem) { elem.classList.toggle("active");}


// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function() { elementToggleFunc(sidebar); });

// Toggle function ends here


//Testimonial variables
const testimonialsItem = document.querySelectorAll("[data-testimonial-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

//modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

//modal toggle function
const testimonialsModalFunc = function() {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
}

//add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener("click", function () {

        modalImg.src = this.querySelector("[data-testimonial-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonial-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonial-text]").innerHTML;


        testimonialsModalFunc();

    });

}

// Add click event to modal close button
// overlay.addEventListener("click", testimonialsModalFunc);
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
