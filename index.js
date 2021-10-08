
//Global Variables
const kanyeUrl = 'https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json'
const trumpUrl = 'http://localhost:3000/quotes'
const kanyeButton = document.querySelector('button#k')
const trumpButton = document.querySelector('button#t')
const counter = document.getElementById('counter')
let score = parseInt(counter.textContent)
let randomUrlArray = [kanyeUrl,trumpUrl]
let randomUrl = randomUrlArray[Math.floor(Math.random()*randomUrlArray.length)] //Randomly selects URL to fetch data from
let textContainer = document.getElementById('quote_container')

//Function to start the game defined and assigned variable to indexed quote
startGame = () => {
    fetch(randomUrl)
    .then(resp => resp.json())
    .then(quotesArray => {
   let oneQuote = quotesArray[Math.floor(Math.random()*quotesArray.length)]
    textContainer.textContent = oneQuote
    
})}
//Function called to start game
startGame()



//KANYE BUTTON SECTION

//Creating "Kanye Button" to respond to URL variable
kanyeButton.addEventListener('click', (e) =>{
    e.preventDefault()
    if (randomUrl === kanyeUrl) {
        counter.textContent = ++score   //Score increased/decreased depending on URL
        alert(`Correct! Quote comes from ${randomUrl}`)               //Window alerts added to further signify response
    } else {                           
        counter.textContent = --score
        alert(`Incorrect! Quote comes from ${randomUrl}`)
    }
    randomUrl = randomUrlArray[Math.floor(Math.random()*randomUrlArray.length)] //Important to reassign randomURL value and call startGame function again restart game to generate new quote
    startGame()
})
//Seperate eventlistener to turn button green when 'mousedover'
kanyeButton.addEventListener('mouseover',(e) => {
    e.target.style.background = 'green'})
kanyeButton.addEventListener('mouseout', (e) => {  //Returns to default color when cursor leaves button space
    e.target.style.background = ''
} )
//TRUMP BUTTON SECTION

//Seperate eventlistener to turn button green when 'mousedover'
trumpButton.addEventListener('mouseover',(e) => {
    e.target.style.background = 'green'})
trumpButton.addEventListener('mouseout', (e) => {  //Returns to default color when cursor leaves button space
    e.target.style.background = ''
} )
//Creating "Kanye Button" to respond to URL variable
trumpButton.addEventListener('click', (e) =>{
    e.preventDefault()
    if (randomUrl === trumpUrl) {
        counter.textContent = ++score   //Score increased/decreased depending on URL
        alert(`Correct! Quote comes from ${randomUrl}`)               //Window alerts added to further signify response
    } else {
        counter.textContent = --score
        alert(`Incorrect! Quote comes from ${randomUrl}`)
    }
    randomUrl = randomUrlArray[Math.floor(Math.random()*randomUrlArray.length)] //Important to reassign randomURL value and call startGame function again restart game to generate new quote
    startGame()

})


