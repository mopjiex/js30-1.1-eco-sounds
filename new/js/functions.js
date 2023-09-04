
const audio = new Audio();

const playAudio = (src) => {
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}

const pauseAudio = () => {
    audio.pause();
}

const stopAudio = (musicIcon) => {
    musicIcon.src = `./images/svg/play.svg`;
    pauseAudio();
}


const changeMusicIcon = (musicIcon, menuItem, mediaList) => {
    musicIcon.classList.toggle('play');
    if(musicIcon.classList.contains('play')) {
        musicIcon.src = `./images/svg/play.svg`;
        pauseAudio();
    } 
    else {
        musicIcon.src = `./images/svg/pause.svg`;
        menuItem.forEach((item, index) => {
            if(item.classList.contains('menu__item_active')) playAudio(mediaList[index].sound);
        })
        
    }
}

const menuItemClick = (item, index, menuItem, sectionBackground, musicIcon, mediaList) => {
    for(let elem of menuItem) elem.classList.remove('menu__item_active');
    item.classList.add('menu__item_active');
    sectionBackground.style.backgroundImage = `url(${mediaList[index].image})`
    stopAudio(musicIcon);
}

export {audio, playAudio, pauseAudio, stopAudio, changeMusicIcon, menuItemClick};