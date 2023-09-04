import naruto from './naruto.js'
import {changeMusicIcon, menuItemClick } from '../../js/functions.js';

const menuItem = document.querySelectorAll('.menu__item');
const sectionBackground = document.querySelector('.background');
const musicIcon = document.querySelector('.icons-music');

musicIcon.addEventListener('click', () => {
    changeMusicIcon(musicIcon, menuItem, naruto);
})

menuItem.forEach((item, index) => {
    item.addEventListener('click', () => {
        menuItemClick(item, index, menuItem, sectionBackground, musicIcon, naruto);  
    })
})