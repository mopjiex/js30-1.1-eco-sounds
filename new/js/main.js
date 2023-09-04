import birds from './birds.js'
import {changeMusicIcon, menuItemClick } from './functions.js';

const menuItem = document.querySelectorAll('.menu__item');
const sectionBackground = document.querySelector('.background');
const musicIcon = document.querySelector('.icons-music');

musicIcon.addEventListener('click', () => {
    changeMusicIcon(musicIcon, menuItem, birds);
})

menuItem.forEach((item, index) => {
    item.addEventListener('click', () => {
        menuItemClick(item, index, menuItem, sectionBackground, musicIcon, birds);  
    })
})