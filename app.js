// document.addEventListener('contextmenu', (e) => {
//         e.preventDefault()
//     });

const box = document.querySelector('.box');
const form = document.querySelector('form');
const createInput = document.querySelector('#create');
const button1 = document.querySelector('.button1');
const listlar = document.querySelector('.listlar');
const random=Math.floor(Math.random()*100+1)
const a=random
button1.addEventListener('click', (e) => {
    e.preventDefault();
    if (createInput.value.trim() !== "") {
        const li = document.createElement('li');
        listlar.prepend(li)
        li.innerHTML = `
               <div class="inputval">
                    <input type="checkbox" id="text${a}" class="abs">
                    <label for="text${a}">${createInput.value}</label>
               </div>
                <div class="edit">
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>
        `;
        createInput.value=""
        a=0

    } else {
        console.log('yoq');

    }
})