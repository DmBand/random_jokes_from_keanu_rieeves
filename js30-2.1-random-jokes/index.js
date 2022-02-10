'use strict'
import i18Obj from './translate.js';

// const url = 'https://type.fit/api/quotes';
const content = document.querySelector('.text');
const button = document.querySelector('.button');
const image = document.querySelector('.keanu');
const ru = document.querySelector('.ru');
const en = document.querySelector('.en');


// async function getData() {
//     const res = await fetch(url);
//     const data = await res.json();
//     showData(data);
//     console.log(data)
// }

// function showData(data) {
//     let index = Math.floor(Math.random() * 1000);
//     content.textContent = data[index].text;
// }

// button.addEventListener('click', () => {
//     getData();
//     image.classList.toggle('active');
// })

// getData()

async function getQuotes() {  
    let quotes;
    if (en.classList.contains('active')) {
        quotes = './assets/quotes-en.json';
    } else if (ru.classList.contains('active')) {
        quotes = './assets/quotes-ru.json';
    }
    const res = await fetch(quotes);
    const data = await res.json(); 
    console.log(data);
    showData(data)
  }
getQuotes();

function showData(data) {
    let index = Math.floor(Math.random() * (data.length-1));
    content.textContent = data[index].text;
}

button.addEventListener('click', () => {
    getQuotes();
    image.classList.toggle('active');
})



// ____TRANSLATION____

function getTranslate(lang) {
    const dataList = document.querySelectorAll('[data-i18n]');
    dataList.forEach((el) => {
        el.textContent = i18Obj[lang][el.dataset.i18n]
    });
}

ru.addEventListener('click', () => {
    getTranslate('ru');
    en.classList.remove('active');
    ru.classList.add('active');
})

en.addEventListener('click', () => {
    getTranslate('en');
    ru.classList.remove('active');
    en.classList.add('active');
})