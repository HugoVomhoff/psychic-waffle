
let numberofStacks;
let numberofCards;
let check1 = 0;
let check2 = 0;
let save;
let flip = true
let speed = 1;

function setSpeed(speed_value){
   
    var speed_types = document.getElementsByClassName("fart")
    speed = speed_value

    for (var i = 0; i < speed_types.length; i++) {
        speed_types[i].style.opacity = "1"}

    if (speed == 1){
        var speed_type = document.getElementById("fartL")
        speed_type.style.opacity = "0.7"
    }
    if (speed == 0.5){
        var speed_type = document.getElementById("fartM")
        speed_type.style.opacity = "0.7"
    }
    if (speed == 0.2){
        var speed_type = document.getElementById("fartS")
        speed_type.style.opacity = "0.7"
    }
}



function createCard(x,y){
    const img = document.createElement("img");
    img.src="Images/baksida kort.png" 
    img.style.width = "100px"
    img.style.position = "fixed"
    img.style.top = (30 + x) + "px"
    img.style.left = (20 + y) + "px"
    img.className = "kortar"
    document.body.appendChild(img)

}

function Print(cardStack){
    let O = 0
    let G = 0
    while (O <= cardStack.length){
        while (G < cardStack[O]){
         createCard(G*30,O*125) 
         G = G + 1  
        }
        G = 0
        O = O + 1
    }
    
}

function remove(){
    var cards = document.getElementsByClassName("kortar")
    for (var i = 0; i < cards.length.valueOf() ; i++) {
    cards[0].remove()
}
        }

function scenetoggle(){
    if (flip == true){
    var scene1_objects = document.getElementsByClassName("ett");
    var speed_types = document.getElementsByClassName("fart");
    for (var i = 0; i < scene1_objects.length; i++) {
        scene1_objects[i].style.visibility = "hidden"}
    for (var i = 0; i < speed_types.length; i++) {
        speed_types[i].style.visibility = "hidden"}
        flip = false}
    else {
        var scene1_objects = document.getElementsByClassName("ett");
        var speed_types = document.getElementsByClassName("fart");
    for (var i = 0; i < scene1_objects.length; i++) {
        scene1_objects[i].style.visibility = "visible"}
        for (var i = 0; i < speed_types.length; i++) {
            speed_types[i].style.visibility = "visible"}
        flip = true}
    }

async function sleep(seconds) {
        return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
      }

async function run(){
    numberofStacks = Number(document.getElementById("input2").value);
    numberofCards = Number(document.getElementById("input").value);
    if (isNaN(numberofStacks) == false && numberofStacks != "" && isNaN(numberofCards) == false && numberofCards != "" && numberofCards >= numberofStacks){
    scenetoggle()


    let cardStack = []
    let run_toggle = true
    let results = []
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
        cardStack.push(1)
    }
    numberofCards -= numberofStacks

    for(i=0; i < numberofCards; i++){
        allocated_cardstack = Math.floor((Math.random()*numberofStacks))
        cardStack[allocated_cardstack] += 1
    }

    
    cardStack = sort(cardStack)
    results.push([...cardStack])
    
    console.log(results)
    
    // poppa sneare kanske
    
    while(run_toggle === true){
        
        remove()
        Print(cardStack)
        await sleep(speed);
        

        for (i=0; i < cardStack.length; i++){
            cardStack[i] = cardStack[i] - 1   
        } 
     
        cardStack.push(cardStack.length)
        cardStack = sort(cardStack)
        


        while(cardStack[0] == 0){
                cardStack.splice(0, 1)
                }
    
    
        for(i=0; i<results.length; i++){
            
            
            if(results[i].toString() == cardStack.toString()){
            
            
                console.log(results)
        
                if(results[results.length - 1].toString() == cardStack.toString()){
                    console.log("WINNER")
                }
                    
                else{
                    console.log("det går inte ut")  
                }
                remove()
                Print(cardStack)
            run_toggle = false
    
        }
        }
    
        results.push([...cardStack])
    
        console.log(cardStack)
    
        y += 1
        
        if(run_toggle == false){
            break
        }
    
        if(y == 50){
            console.log("det går inte ut")
            remove()
            Print(cardStack)
            run_toggle = false 
        }
        console.log(y)
    }
}
else {document.getElementById("FAILSAFE").innerHTML = "Du måste fylla i två värden! (nummer)";}
}

