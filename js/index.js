
const audio = new Audio();
const main = document.querySelector('.main');
const headerMenuLink = document.querySelectorAll('.header__menu-link');
const mainLinkAudio = document.querySelector('.main__link-audio');
const mainAudioImg = document.querySelector('.main__audio-img');
let src = '';

function playAudio(src) {
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}

function pauseAudio() {
    audio.pause();
}


for(let i = 0; i < headerMenuLink.length; i++) {
    headerMenuLink[i].addEventListener('click', function()  {
        isPlay = true;
        for(let i = 0; i < headerMenuLink.length; i++) {
            headerMenuLink[i].classList.remove('active');
        }
        this.classList.add('active');

        if(headerMenuLink[i].classList.contains('solovei')) {
            main.style.background = `url(/images/solovey.jpg)`;
            src = './sound/solovey.mp3';

        } 
        else if(headerMenuLink[i].classList.contains('drozd')) {
            main.style.background = `url(/images/drozd.jpg)`;
            src = './sound/drozd.mp3';
        }
        else if(headerMenuLink[i].classList.contains('malinovka')) {
            main.style.background = `url(/images/zarynka.jpg)`;
            src = './sound/zarynka.mp3';
        }
        else if(headerMenuLink[i].classList.contains('javoronok')) {
            main.style.background = `url(/images/javoronok.jpg)`;
            src = './sound/javoronok.mp3';
        }
        else if(headerMenuLink[i].classList.contains('slavka')) {
            main.style.background = `url(/images/slavka.jpg)`;
            src = './sound/slavka.mp3';
        }
    });

    mainLinkAudio.addEventListener('click', () => {

        
        mainLinkAudio.classList.toggle('pause');
        if(mainLinkAudio.classList.contains('pause')) {
            mainAudioImg.src = './images/svg/play.svg';
            pauseAudio();
        }
        else {
            mainAudioImg.src = './images/svg/pause.svg';
            playAudio(src);
        }
        
    })
}


