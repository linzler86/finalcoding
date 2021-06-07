const prev = document.getElementById('prev');
const next = document.getElementById('next');
const thumbnail = document.getElementsByClassName('thumbnail');
const wrap = document.getElementById('wrap');

const backgroundImg = new Array(
    '../img/bg1.jpg',
    '../img/bg2.jpg',
    '../img/bg3.jpg',
    '../img/bg4.jpg',
    '../img/bg5.jpg',
);

let i = 0;

next.onclick = function() {
    if(i < 4) {
        wrap.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
        thumbnail[i+1].classList.add('active');
        thumbnail[i].classList.remove('active');
        i++;
    }
}

prev.onclick = function() {
    if(i > 0) {
        wrap.style.backgroundImage = 'url("'+backgroundImg[i-1]+'")';
        thumbnail[i-1].classList.add('active');
        thumbnail[i].classList.remove('active');
        i--;
    }
}
