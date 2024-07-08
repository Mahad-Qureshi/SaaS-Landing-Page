const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item, index) => {
    const title = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-content');

    // Initially activate the first item
    if (index === 0) {
        item.classList.add('active');
    }

    title.addEventListener('click', () => {
        // Toggle the active class for the clicked item
        item.classList.toggle('active');

        // Ensure only one item is active at a time
        accordionItems.forEach((otherItem, i) => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
    });
});


// Testimonial Start

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}

// Testimonial End


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}