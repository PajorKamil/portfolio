document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const liElements = document.querySelectorAll('.mobile-li');

    hamburger.addEventListener("click", function() {
        liElements.forEach(function(li) {
            li.classList.toggle("active");
        });
    });
});