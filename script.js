
const jokePara = document.querySelector('#joke');
const btn = document.querySelector('.button-52');

function displayJoke () {

    const xhr = new XMLHttpRequest();

    xhr.open('GET','https://api.api-ninjas.com/v1/dadjokes?limit=1');

    xhr.setRequestHeader('X-Api-Key', 'CfO4g8xXSVpWsdqjAGuAHg==RJ2FismZ9jUWBgwJ');

    xhr.send();

    btn.innerText = 'loading...';

    jokePara.innerText = 'Updating...';
    
    xhr.onload = () => {
        const joke = JSON.parse(xhr.response)[0].joke; 
        jokePara.innerText = joke;
        btn.innerText = 'TELL ME A JOKE';
    };

    xhr.onerror = () => {
        console.log('error occured');
        btn.innerText = 'TELL ME A JOKE';
    };

};


/////////////////////////////////////

const bg = document.querySelector('.section');
const toggleBtn = document.querySelector('#toggle-btn');
const slider = document.querySelector('#circle');

function handleClick() {
    // bg-color-change
    if (bg.classList.contains('light-to-dark')) {
        bg.classList.remove('light-to-dark');
        bg.classList.add('dark-to-light');
    } else {
        bg.classList.remove('dark-to-light');
        bg.classList.add('light-to-dark');
    }

    // button-color-change
    if (bg.classList.contains('light-to-dark')) {
        btn.style.backgroundColor = '#222222';
    } else {
        btn.style.backgroundColor = 'black';
    }

    // circle-slide
    if (slider.classList.contains('slide-right')) {
        slider.classList.remove('slide-right');
        slider.classList.add('slide-left');
    } else {
        slider.classList.remove('slide-left');
        slider.classList.add('slide-right');
    }

};


