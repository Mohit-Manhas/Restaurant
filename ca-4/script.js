
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

function scrollToTop() {
    document.documentElement.scrollTop = 0;

}

scrollToTopBtn.addEventListener("click", scrollToTop);

window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});



const cuisineOptionImages = document.querySelectorAll('.cuisine-option img');

cuisineOptionImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)'; 
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)'; 
    });
});


