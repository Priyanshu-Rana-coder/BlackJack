let sumEl= document.getElementById("sum-el")
let cardsEl= document.getElementById("cards-el")
let currentStatus=document.getElementById("message-el")
let cards=[]
let sum=0
let message=""
let isAlive=false
let isBlackJack=false
function startGame(){
    let firstCard=randomNumber()
    let secondCard=randomNumber()
    cards=[firstCard,secondCard]
    sum=0
   for(let i=0;i<cards.length;i+=1){
        sum+= cards[i]
    }
    isAlive=true
    renderGame()
}
function randomNumber(){
    let number=Math.floor(Math.random()*13)+1
    if(number===1){
        number=11
    }
    else if(number>10){
        number=10
    }
    else{}
    return number
}
function renderGame(){
    cardsEl.textContent=cards
    if(sum<21){
        message="Wanna Draw One More Card"
    }
    else if(sum===21){
        message="You hit BlackJack"
        isBlackJack=true
    }
    else{
        message="You are Out"
        isAlive=false
    }
    sumEl.textContent="Sum: "+sum
    currentStatus.textContent=message
}
function NewCard(){
    if(isAlive===true && isBlackJack===false){
    let newcard=randomNumber()
    cards.push(newcard)
    sum+=newcard
    renderGame()
}
}