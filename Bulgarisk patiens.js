let cardStack = []
let run = true
let results = []
let numberofStacks = prompt("hur många högar?")
let y = 0

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

console.log(results)

// poppa sneare kanske

while(run === true){
    
    for (i=0; i < cardStack.length; i++){
        cardStack[i] = cardStack[i] - 1   
    } 
 
    cardStack.push(cardStack.length)
    cardStack = sort(cardStack)
    
    while(cardStack[0] == 0){
            cardStack.splice(0, 1)
            }


    if(results.includes(cardStack)){
        
        
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

    console.log(cardStack)

    y += 1

    if(y == 25){
        run = false 
    }
    console.log(y)
}