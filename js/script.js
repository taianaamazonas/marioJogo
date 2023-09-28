const mario = document.querySelector('.mario'); /* elemento da imagem do mário  */
const pipe = document.querySelector('.pipe');

const jump = () => {

   mario.classList.add('jump');

   setTimeout(() => {
   
   mario.classList.remove('jump');
   ;
} , 500);
}

const loop = setInterval(( ) => {

console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.computedStyleMap.animation = 'none';
        pipe.style.left= `${pipePosition}px`;

        mario.computedStyleMap.animation = 'none';
        mario.style.bottom= `${marioPosition}px`;
        
        mario.src = './images/game-over.png';
        mario.style.width = '75px'
        margin.style.marginLeft= '50px'
    }
}, 10);


document. addEventListener('keydown', jump);
