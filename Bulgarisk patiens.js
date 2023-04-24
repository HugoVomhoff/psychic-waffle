let cardStack = []
let run = true
let results = []
let numberofStacks = prompt("hur många högar?")
let x = 0

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
        console.log(cardStack)
        cardStack[i] = cardStack[i] - 1  
        console.log(cardStack)  
    } 

    cardStack.push(cardStack.length)
    cardStack = sort(cardStack)
    
    while(cardStack[0] == 0){
            cardStack.splice(0, 1)
            }



    console.log(cardStack)
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

    x+= 1

    if(x==100){
        run = false
    }
}