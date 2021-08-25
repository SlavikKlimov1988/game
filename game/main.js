const dino = document.getElementById('dino');
const cactus = document.getElementById('kaktus');


document.addEventListener('keydown', function() {
    jump();
})

function jump() {
    if(dino.classList != 'jump'){
        dino.classList.add('jump')
    }
    else{
        setTimeout(function () {
            dino.classList.remove('jump')
        }, 300)
    }
}

let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
        alert('game over');
    }

}, 10);