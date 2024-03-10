'use strict';
let modal=document.querySelector('.modal');
const show=document.querySelectorAll('.show-modal')  // to select all element with class name show-modal
const btnClose=document.querySelector('.close-modal');
const overlay=document.querySelector('.overlay')

const closeModal=function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden');
}

const openModal= function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let i=0; i<show.length; i++){
    show[i].addEventListener('click', openModal);
}

btnClose.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

