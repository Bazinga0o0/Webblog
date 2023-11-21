window.onload = function() {
    // Überprüfen Sie das Seitenverhältnis
    if (window.innerWidth / window.innerHeight > 0.8) {
        // Verstecken Sie das Menü
        document.querySelector('.menu').style.visibility = 'visible';
        document.querySelector('.icons').style.visibility = 'visible';
    }else{
        document.querySelector('.menu').style.visibility = 'hidden';
        document.querySelector('.icons').style.visibility = 'hidden';
    }
};
window.addEventListener('resize', function() {
    // Überprüfen Sie das Seitenverhältnis
    if (window.innerWidth / window.innerHeight > 0.8) {
        // Zeigen Sie das Menü
        document.querySelector('.menu').style.visibility = 'visible';
        document.querySelector('.icons').style.visibility = 'visible';
    } else {
        document.querySelector('.menu').style.visibility = 'hidden';
        document.querySelector('.icons').style.visibility = 'hidden';
    }
});
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

setInterval(nextImage, 5000); // Change image every 3 seconds
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

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.burger').addEventListener('click', function() {
        var menu = document.querySelector('.menu');
        menu.style.visibility = menu.style.visibility === 'hidden' ? 'visible' : 'hidden';
        console.log(menu.style.visibility);
        var menu = document.querySelector('.icons');
        menu.style.visibility = menu.style.visibility === 'hidden' ? 'visible' : 'hidden';
    });
});
