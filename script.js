const newGame = document.querySelector('.main__button')
const title = document.querySelector('.main__title')
const main = document.querySelector('.main')
const skip = document.querySelector('.skip')

const startGame = () => {
    newGame.removeEventListener('click', startGame)
    setTimeout(() => {
        main.remove()
    }, 3000)
newGame.classList.add('main__button-off')
title.classList.add('main__title-off')
setTimeout(() => {
   setInterval(addLetter, 200)
   setInterval(cursorAnimation, 400);
   skip.classList.add('active')
}, 3000)
}

 newGame.addEventListener('click', startGame)

// SKIP BUTTON
skip.addEventListener('click', function() {
    deleteText()
      skip.classList.remove('active')
})


 const spanText = document.querySelector('.text__text');
 const spanCursor = document.querySelector('.text__cursor');
 const txt = ['tekst1', 'tekst2', 'tekst3']

 let txtNumber = 0
 let txtLetter = 0

 const addLetter = () => {

    if((txtLetter >= txt[txtNumber].length )) {
        txtLetter = -20
        txtNumber++
        if(txtNumber < txt.length) {
        setTimeout(() => {
            spanText.textContent = ''    
        }, 2000); 
     }  else { 
        for (let i = 1; i < 100; i++) {
            window.clearInterval(i);
          }
          spanCursor.classList.remove('active');
            setTimeout(deleteText, 2000)
            skip.classList.remove('active')
     }
    } 
    if((txtLetter >= 0) && (txtNumber < txt.length) ) {
spanText.textContent += txt[txtNumber][txtLetter]
    } 
txtLetter++
}
// Mechanizm działania kursora
const cursorAnimation = () => {
    spanCursor.classList.toggle('active');
   }



const timer = document.querySelector('.timer')

// Referencja w funkcji addLetter()
const deleteText = () => {
    document.querySelector('.text').remove()
    timer.classList.add('active')
    skip.remove() 
    setInterval(timerCounting, 1000)
}

// Odliczanie do początku gry
const timeSpan = document.querySelector('.timer__counting');
let timeToGame = 3

const timerCounting = () => {
    if(timeToGame > 0) {
    timeToGame--
    timeSpan.textContent = timeToGame
} else { 
    for (let i = 1; i < 100; i++) {
        window.clearInterval(i);
      }
      timer.remove()
      showStatistics()
      setInterval(showingPicture, 1000)
}
}



// GAME STARTS

const game = document.querySelector('.game')

const showStatistics = () => {
game.style.display = 'block'
}

const showingPicture = () => {
    
}