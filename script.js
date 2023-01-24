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

    const timer = document.querySelector('.timer')
    const timeSpan = document.querySelector('.timer__counting');

    if(timeToGame > 0) {
    timeToGame--
    timeSpan.textContent = timeToGame
} else { 
    for (let i = 1; i < 100; i++) {
        window.clearInterval(i);
      }
    //   timer.remove()
    timer.classList.remove('active')
      showStatistics()
      setInterval(showingPicture, 800)
}
}



// GAME STARTS

const game = document.querySelector('.game')
const gamePicture = document.querySelector('.gamePicture')

const lifePoints = document.querySelector('.life-points__number')
const level = document.querySelector('.level__number')
const gamePoints = document.querySelector('.game-points__number')

let lifePointsNumber = 2.5
let levelNumber = 1
let GamePointsNumber = 0

let lostLife = true

const showStatistics = () => {
game.style.display = 'block'
}



const showingPicture = () => {
const gamePicture = document.querySelector('.gamePicture')

const lifePoints = document.querySelector('.life-points__number')

    gamePicture.classList.toggle('on')
    
    const gamePlaceHeight = document.querySelector('.gamePlace').clientHeight
    const gamePlaceWidth = document.querySelector('.game__statistics').clientWidth
    const gamePictureWidth = document.querySelector('.gamePicture').clientWidth
const gamePictureHeight = document.querySelector('.gamePicture').clientHeight



    let pictureTop = Math.random() * gamePlaceHeight - gamePictureHeight 
    let pictureLeft = Math.random() * gamePlaceWidth - gamePictureWidth 


    if(pictureTop < 0) {
     gamePicture.style.top = pictureTop + gamePictureHeight + 'px' 
    } else gamePicture.style.top = pictureTop + 'px'

if(pictureLeft < 0) {
    gamePicture.style.left = pictureLeft + gamePictureWidth + 'px'
} else gamePicture.style.left = pictureLeft + 'px'

if(lostLife) {
    lifePointsNumber = lifePointsNumber - 0.5
    let floorlifePointsNumber = Math.floor(lifePointsNumber)
    lifePoints.textContent = floorlifePointsNumber
}

if(lifePointsNumber < 1) {
    console.log('przegrales');
    for (let i = 1; i < 1000; i++) {
        window.clearInterval(i);
      }
      document.body.innerHTML += '<div class="lose"><div class="lose__Text">PRZEGRAŁEŚ</div><div class="lose__button">NOWA GRA</div></div>'
      const replayGame = document.querySelector('.lose__button')
const lose = document.querySelector('.lose')

replayGame.addEventListener('click', function() {

    timeToGame = 3
    document.querySelector('.timer__counting').textContent = timeToGame
    document.querySelector('.timer').classList.add('active')
    lose.remove()
    setInterval(timerCounting, 1000)
    lifePointsNumber = 10.5
    GamePointsNumber = 0
    document.querySelector('.game-points__number').textContent = GamePointsNumber
    document.querySelector('.life-points__number').textContent = Math.floor(lifePointsNumber)

})

}

gamePicture.addEventListener('click', pictureClick)

}


const pictureClick = () => {
    
    const gamePicture = document.querySelector('.gamePicture')
    const gamePoints = document.querySelector('.game-points__number')


console.log('chuj');
gamePicture.classList.remove('on')
++GamePointsNumber
gamePoints.textContent = GamePointsNumber

lostLife = false
showingPicture()
lostLife = true

for (let i = 1; i < 1000; i++) {
    window.clearInterval(i);
  }
  setInterval(showingPicture, 800)
  

}


