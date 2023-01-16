const newGame = document.querySelector('.main__button')
const title = document.querySelector('.main__title')
const main = document.querySelector('.main')


const startGame = () => {
    newGame.removeEventListener('click', startGame)
    setTimeout(() => {
        main.remove()
    }, 3000)
newGame.classList.add('main__button-off')
title.classList.add('main__title-off')
newGameButtonOn = true
setTimeout(() => {
   setInterval(addLetter, 200)
   setInterval(cursorAnimation, 400);
}, 3000)
}

 newGame.addEventListener('click', startGame)





 const spnText = document.querySelector('.text');
 const spnCursor = document.querySelector('.cursor');
 const txt = ['tekst1', 'tekst2', 'tekst3']

 let txtNumber = 0
 let txtLetter = 0

 const addLetter = () => {

    if((txtLetter >= txt[txtNumber].length )) {
        console.log('chuj');
        txtLetter = -2
        txtNumber++
        if(txtNumber < txt.length) {
        spnText.textContent = ''
     } else clearInterval(writingInterval)
        
    } 

    
    if((txtLetter >= 0) && (txtNumber < txt.length) ) {
spnText.textContent += txt[txtNumber][txtLetter]
    } 
  
txtLetter++

}
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
   }
   