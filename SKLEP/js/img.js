function zmienZdane(imgnr) {
    var img1 = document.getElementById("img1-1");
    var img2 = document.getElementById("img2-1");
    var img3 = document.getElementById("img3-1");
    var imgmain = document.getElementById("imgmain");

    if (imgnr === 1) {
        var tempSrc = img1.src;
        imgmain.src = tempSrc;
        img1.classList.add('img-active');
        img2.classList.remove('img-active');
        img3.classList.remove('img-active');
    } else if (imgnr === 2) {
        var tempSrc = img2.src;
        imgmain.src = tempSrc;
        img1.classList.remove('img-active');
        img2.classList.add('img-active');
        img3.classList.remove('img-active');
    } else if (imgnr === 3) {
        var tempSrc = img3.src;
        imgmain.src = tempSrc;
        img1.classList.remove('img-active');
        img2.classList.remove('img-active');
        img3.classList.add('img-active');
    }
}