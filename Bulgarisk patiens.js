let cardStack = []
let run = false
let resultat = []
let numberofStacks = prompt("hur många högar?")

function sort(array){
    let fixedArray = []
    x = [...array]
    
    for(let i of x){
        fixedArray.push(Math.min(...array))
        index = array.indexOf(Math.min(...array))
        array.splice(index, 1)
    }
    return fixedArray
}

for (i=0; i < numberofStacks; i++) {
    cardStack.push(Math.ceil(Math.random()* 10))
}

resultat.push(sort(cardStack))
run = true

// poppa sneare kanske


/*
while(run === true){

    for (i=0; i < cardStack.length; i++){
        cardStack[i] = (cardStack[i] - 1)
    }

    cardStack.push(cardStack.length)

    for (i=0; i < cardStack.length; i++){
        if (cardStack[i] == 0){
            cardStack.pop(i)
            i -= 1
            }
    
        }
    
    
    if(resultat.includes(cardStack)){
        
        console.log(cardStack)
        console.log(resultat)

        if(resultat[resultat.length - 1] === cardStack){
            console.log("WINNER")
        }
            
        else{
            console.log("det går inte ut")  
        }
        kör = false
       
    }

    
    resultat.push(cardStack)
    console.log(cardStack)
}
*/