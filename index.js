let num1=getRandomCard()
let num2=getRandomCard()
let sum=num1+num2
let cardsArr=[num1,num2]
let won=false
let isAlive=true
hasBlackJack=false
let message=""
let PLAYER={
    name:"Alfeen",
    chips:100
}

let playerEl=document.getElementById("player")
let msgEl=document.getElementById("msg")
let cardsEl=document.getElementById("cards")
let sumEl=document.getElementById("sum")
playerEl.textContent=PLAYER.name+" $"+PLAYER.chips
function getRandomCard(){
    let randomCard=Math.floor(Math.random()*13)+1
    if (randomCard===1)
    return 11
    if(randomCard>10)
    return 10
    else
    return randomCard
}


function startGame(){
    renderGame()
}
function renderGame()
{   
    sumEl.textContent="sum :"+sum
    cardsEl.textContent="cards :"
    for(i=0;i<cardsArr.length;++i)
    cardsEl.textContent+=cardsArr[i]+" "


    if (sum<=20){
        message="do you want to take new card"
    }
    else if(sum===21){
        message="you got black jack"
        won=true
        hasBlackJack=true

    }
    else
    {   
        message="You are out of the game"
        isAlive=false
    }
    msgEl.textContent=message

}

 function newCard()
 {
    if(isAlive===true && hasBlackJack===false)
    {
        let num3=getRandomCard()
        sum+=num3
        cardsArr.push(num3)
        renderGame()

    }

 }