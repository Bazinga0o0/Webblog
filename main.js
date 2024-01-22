var images = ["unibild.jpg",  "unibild2.jpg"];
var currentIndex = 0;

function showImage(index) {
    var img = $("#slideshow");
    img.fadeOut(700, function() {
        img.attr("src", images[index]);
        img.fadeIn(700);
    });
}
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}



if (window.location.href.indexOf('index.html') > -1) {
    setInterval(nextImage, 5000);
    fetch('articlelist.html')
        .then(response => response.text())
        .then(data => {
            var parser = new DOMParser();
            var htmlDocument = parser.parseFromString(data, 'text/html');
            var divElement = htmlDocument.querySelector('.ul');
            document.body.appendChild(divElement);
        })
        .catch(error => {
            console.warn(error);
        });
}
