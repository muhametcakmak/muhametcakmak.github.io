
const letters = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ";
function animasyonBaslat() {
    let repetition = 0;
    const interval = setInterval(() => {
        document.querySelector("#animasyon-yazi").innerText = document.querySelector("#animasyon-yazi").innerText
            .split("")
            .map((letter, index) => {
                if (index < repetition) {
                    return document.querySelector("#animasyon-yazi").dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 29)];
            })
            .join("");

        if (repetition >= document.querySelector("#animasyon-yazi").dataset.value.length)
            clearInterval(interval);

        repetition += 1 / 6;
    }, 30);
}
window.onload = animasyonBaslat;


var loader;
function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function () {
            loadNow(opacity - 0.1);
        }, 50);
        }
    var divGizle = document.getElementById("divGizle");
    divGizle.style.display = "none"
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('içerik').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
    loader = document.getElementById('loader');
    setTimeout("loadNow(1)", 4000);
});
