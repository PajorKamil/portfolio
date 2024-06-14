document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".conv-link");
    const contentDiv = document.getElementById("conv");
    const chat = document.querySelector(".chats");
    const conversation = document.querySelector(".conversation");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Zapobieganie domyślnemu zachowaniu przeglądarki
            const url = this.getAttribute("href");

            // Pobieranie nowej zawartości za pomocą Fetch API
            fetch(url)
                .then(response => response.text())
                .then(data => {
                    contentDiv.innerHTML = data; // Podmiana zawartości diva

                    const convMain = document.getElementById('conv-main');
                    convMain.scrollTop = convMain.scrollHeight;
                })
                .catch(error => {
                    console.error('Błąd:', error);
                });
                            
            var delayInMilliseconds = 200; //1 second

            var conversation = document.querySelector('.conversation');
            const mediaQuery = window.matchMedia('(max-width: 535px)');
if (mediaQuery.matches) {
    setTimeout(function() {
        chat.style.display = "none";
        conversation.style.display = "block";
        const back = document.querySelector(".back");
        const convMain = document.getElementById('conv-main');
        convMain.scrollTop = convMain.scrollHeight;
            back.addEventListener('click', function() {
                setTimeout(function() {
                console.log(1);
                chat.style.display = "block";
                conversation.style.display = "none";
            }, delayInMilliseconds);
            });
    }, delayInMilliseconds);
}

mediaQuery.addEventListener((event) => {
    if (event.matches) {
        setTimeout(function() {
            chat.style.display = "none";
            conversation.style.display = "block";
            const back = document.querySelector(".back");
            const convMain = document.getElementById('conv-main');
            convMain.scrollTop = convMain.scrollHeight;
                back.addEventListener('click', function() {
                    setTimeout(function() {
                        
                    console.log(1);
                    chat.style.display = "block";
                    conversation.style.display = "none";
                }, delayInMilliseconds);
                });
        }, delayInMilliseconds);
    }
});
        });
    });
});

