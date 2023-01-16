const newGame = document.querySelector('.main__button')
const title = document.querySelector('.main__title')

const startGame = () => {
newGame.classList.add('main__button-off')
title.classList.add('main__title-off')
}

newGame.addEventListener('click', startGame)