function removeAddClass(menu) {
    for(let i of menu) {
        i.addEventListener('click', () => {
            if(!(i.classList.contains('active'))) {
                for(let i of menu) {
                    i.classList.remove('active');
                }
                i.classList.add('active');

            }
        });
        
    }
}

function backgroundChange(menu) {
    for(let i of menu) {
        removeAddClass(menu);
        i.addEventListener('click', () => {
            if(i.classList.contains('solovei')) {
                main.style.background = `url(/images/solovey.jpg)`;
            } 
            else if(i.classList.contains('drozd')) {
                main.style.background = `url(/images/drozd.jpg)`;
            }
            else if(i.classList.contains('malinovka')) {
                main.style.background = `url(/images/zarynka.jpg)`;
            }
            else if(i.classList.contains('javoronok')) {
                main.style.background = `url(/images/javoronok.jpg)`;
            }
            else if(i.classList.contains('slavka')) {
                main.style.background = `url(/images/slavka.jpg)`;
            }
        });
        
    }
}


let isplay = false;
const audio = new Audio();
function playAudio() {
    audio.src = '/sound/solovey.mp3';
    audio.currentTime = 0;
    audio.play();
}

function pauseAudio() {
    audio.pause();
}






const headerMenuLink = document.querySelectorAll('.header__menu-link');
const main = document.querySelector('.main');
const mainLinkAudio = document.querySelector('.main__link-audio');
const mainAudioImg = document.querySelector('.main__audio-img');
console.log(mainLinkAudio);



for(let i of headerMenuLink) {
    if(i.classList.contains('solovei active')) {
        console.log('solovei');
    }
    else if(i.classList.contains('drozd active')) {
        console.log('drozd');
    }
    else if(i.classList.contains('malinovka active')) {
        console.log('malinovka');
    }
    else if(i.classList.contains('javoronok active')) {
        console.log('javoronok');
    }
    else if(i.classList.contains('slavka active')) {
        console.log('slavka');
    }
}





mainLinkAudio.addEventListener('click', () => {

    mainLinkAudio.classList.toggle('pause');
    console.log(mainLinkAudio);
    if(mainLinkAudio.classList.contains('pause')) {
        console.log(1);
        mainAudioImg.src = './images/svg/play.svg';
        pauseAudio();
    }
    else {
        console.log(2);
        mainAudioImg.src = './images/svg/pause.svg';
        playAudio();
    }
})
backgroundChange(headerMenuLink);




