let cardStack = []
let run = true
let results = []
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

cardStack = sort(cardStack)
results.push([...cardStack])

console.log(cardStack)
console.log(results)

// poppa sneare kanske

while(run === true){
    
    for (i=0; i < cardStack.length; i++){
        alert(cardStack)
        x = cardStack[i]
        alert(x)
        cardStack[i] = x - 1    
    }

    cardStack.push(5)
    cardStack = sort(cardStack)
    
    for (i=0; i < cardStack.length; i++){
        if (cardStack[i] === 0){
            cardStack.pop(i)
            }
        }

    alert(cardStack)

    if(results.includes(cardStack)){
        
        console.log(cardStack)
        console.log(results)

        if(results[results.length - 1] === cardStack){
            console.log("WINNER")
        }
            
        else{
            console.log("det går inte ut")  
        }
       run = false
    }

    results.push([...cardStack])

    
    results.push(cardStack)
    console.log(cardStack)
}