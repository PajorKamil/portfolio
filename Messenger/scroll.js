window.addEventListener("load", function() {
    const convMain = document.getElementById('conv-main');
    convMain.scrollTop = convMain.scrollHeight;
});

document.querySelectorAll('.conv-link').forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevent the default action
        event.preventDefault();

        // Remove c_active class from all .chat elements
        document.querySelectorAll('.chat').forEach(chat => {
            chat.classList.remove('c_active');
        });

        // Add c_active class to the clicked .chat element
        this.querySelector('.chat').classList.add('c_active');
    });
});