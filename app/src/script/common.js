let video = document.querySelector('.main-poster__video');
video.play();

// video.play();
// video.playbackRate = 8;
// video.loop = true;
// video.volume = 0.1

// window.addEventListener('load', function () {
//     video.muted = true;
//     video.play();
// })
video.loop == true;
video.muted = true;
window.addEventListener('scroll', function () {
    if (window.pageYOffset >= 700 && window.pageYOffset <= 1400) {
        video.play();

    } else {
        video.pause();
    }
})