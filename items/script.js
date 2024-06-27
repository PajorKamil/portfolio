document.addEventListener('DOMContentLoaded', function() {
    const radios = document.querySelectorAll('input[name="color"]');
    const containers = document.querySelectorAll('.container div');

    function updateActiveClass() {
        containers.forEach(container => container.classList.remove('active'));
        const checkedRadio = document.querySelector('input[name="color"]:checked');
        const spanId = checkedRadio.nextElementSibling.id;
        document.querySelector(`.${spanId}`).classList.add('active');
    }

    radios.forEach(radio => {
        radio.addEventListener('change', updateActiveClass);
    });

    // Initial check to set the correct active class on page load
    updateActiveClass();
});