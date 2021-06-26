$(document).ready(function () {
    document.getElementById("btnCover").disabled = false;
    document.getElementById("loCover").classList.add("d-none");
    $("html, body").animate({ scrollTop: 0 }, 0);
});

let source = "./music/Beautiful-In-White_Shane-Filan.mp3";
let audio = new Audio();

audio.addEventListener("load", function () {
    audio.play();
}, true);

audio.src = source;
audio.autoplay = true;
audio.loop = true;

let btnToggleMusik = document.getElementById("btnToggleMusic");

btnToggleMusik.addEventListener("click", function () {
    let status = btnToggleMusik.getAttribute("data-status");
    let ipause = document.getElementById("iPause");
    let iplay = document.getElementById("iPlay");
    let marqueeMusic = document.getElementById("marqueeMusic");

    if (status == "play") {
        btnToggleMusik.setAttribute("data-status", "stop");
        ipause.classList.replace('d-block', 'd-none');
        iplay.classList.replace('d-none', 'd-block');
        marqueeMusic.stop();
        audio.pause();
    } else if (status == "stop") {
        btnToggleMusik.setAttribute("data-status", "play");
        ipause.classList.replace('d-none', 'd-block');
        iplay.classList.replace('d-block', 'd-none');
        marqueeMusic.start();
        audio.play();
    } else {
        btnToggleMusik.setAttribute("data-status", "play");
        ipause.classList.replace('d-none', 'd-block');
        iplay.classList.replace('d-block', 'd-none');
        marqueeMusic.start();
        audio.play();
    }
});

function closeCover() {
    document.querySelector('html').style.overflowY = "visible";
    document.getElementById("coverBg").classList.add('animate__animated', 'animate__fadeOut', 'animate__slower');
    audio.play();
    setTimeout(function () {
        document.getElementById("coverBg").classList.add('d-none');
    }, 3000);
    $("html, body").animate({ scrollTop: 0 }, 0);
    animateJudul();
}

function animateJudul() {
    document.getElementById("bingkai").classList.add('animate__animated', 'animate__fadeInDown', 'animate__delay-1s');
    document.getElementById("text-judul").classList.add('animate__animated', 'animate__fadeInDown', 'animate__delay-2s');
    document.getElementById("jadwal-akad").classList.add('animate__animated', 'animate__zoomIn', 'animate__delay-3s');
}
