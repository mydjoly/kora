const button = document.querySelector('button');


button.addEventListener('click', () => {
    // duración total de la lluvia (en ms)
    const rainDuration = 2000; // 2 segundos
    const intervalTime = 120; // cada cuánto salen corazones


    const rainInterval = setInterval(() => {
        for (let i = 0; i < 6; i++) {
            createHeart();
        }
    }, intervalTime);


    // detener la lluvia después de un par de segundos
    setTimeout(() => {
        clearInterval(rainInterval);
    }, rainDuration);
});


function createHeart() {
  const heart = document.createElement('img');
  heart.src = 'kora.webp';
  heart.classList.add('heart');

  // Posición horizontal
  heart.style.left = Math.random() * window.innerWidth + 'px';

  // Animación de caída
  const animations = ['fall', 'fall-left', 'fall-right'];
  heart.style.animationName =
    animations[Math.floor(Math.random() * animations.length)];

  // Duración
  heart.style.animationDuration = 3 + Math.random() * 2 + 's';

  // 👉 ROTACIÓN EN AMBOS SENTIDOS
  const rotationDirection = Math.random() < 0.5 ? -1 : 1;
  const rotationAmount = 180 + Math.random() * 360;

  heart.style.transform = `rotate(${rotationDirection * rotationAmount}deg)`;

  // Tamaño variable
  const size = 18 + Math.random() * 10;
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

const popLeft = document.getElementById('pop-left');
const popRight = document.getElementById('pop-right');

// altura aproximada donde quieres el pop
const popY = Math.round(window.innerHeight * 0.4);

popLeft.style.left = '40px';
popLeft.style.top = popY + 'px';

popRight.style.right = '40px';
popRight.style.top = popY + 'px';

// dispara el pop cuando la serpiente va por la mitad
setTimeout(() => {
  popLeft.classList.add('show');
  popRight.classList.add('show');
}, 1400);
