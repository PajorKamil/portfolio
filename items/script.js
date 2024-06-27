document.addEventListener('DOMContentLoaded', function() {
    const radios = document.querySelectorAll('input[name="color"]');
    const containers = document.querySelectorAll('.container div');
    const colorMap = {
        red: '#522224',
        blue: '#464d84',
        gray: '#8f8e97',
        jade: '#5bb4a3',
        'light-gray': '#c3c1bb',
        'white-blue': '#0b68af'
    };

    function updateActiveClass() {
        const checkedRadio = document.querySelector('input[name="color"]:checked');
        const spanId = checkedRadio.nextElementSibling.id;

        containers.forEach(container => {
            if (container.classList.contains(spanId)) {
                container.classList.add('active');
            } else {
                container.classList.remove('active');
            }
        });
         document.body.style.backgroundColor = colorMap[spanId];
    }

    radios.forEach(radio => {
        radio.addEventListener('change', updateActiveClass);
    });

    updateActiveClass();
});