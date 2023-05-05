
let numberofStacks;
let numberofCards;
let check1 = 0;
let check2 = 0;
let save;
let flip = true
let speed = 1;
let result;

function hastighet(ehm){
    speed = ehm
    var haha = document.getElementsByClassName("fart")
    for (var i = 0; i < haha.length; i++) {
        haha[i].style.opacity = "1"}
    if (speed == 1){
        var yo = document.getElementById("fartL")
        yo.style.opacity = "0.7"
    }
    if (speed == 0.5){
        var yo = document.getElementById("fartM")
        yo.style.opacity = "0.7"
    }
    if (speed == 0.2){
        var yo = document.getElementById("fartS")
        yo.style.opacity = "0.7"
    }
}


function resultprint(värde,x,y){
    const p = document.createElement("p");
    p.innerHTML = värde
    p.style.position = "fixed"
    p.style.top = (30 + x) + "px"
    p.style.left = (20 + y) + "px"    
    document.body.appendChild(p);
}

function PrintaUtResult(hej){
    let A = 0  
    let x = 0
    let y = 0
    while (A < hej.length){
        resultprint(hej[A],(x*30),(y*125))
        A = A + 1
        x = x + 1
        if (x % 5 == 0){
            y = y + 1
            x = 0
        }
        
    }

}


function skapakort(x,y){
const img = document.createElement("img");
img.src="Images/baksida kort.png" 
img.style.width = "100px"
img.style.position = "fixed"
img.style.top = (30 + x) + "px"
img.style.left = (20 + y) + "px"
img.className = "kortar"
document.body.appendChild(img)

}

function SlutSpelat(bob){
    const knapp = document.createElement("button")
    knapp.className = "två"
    knapp.innerHTML = "Fortsätt"
    knapp.style.position = "fixed"
    knapp.style.top = 40 + "%"
    knapp.style.right = 10 + "%"
    knapp.style.width = "200px"
    knapp.style.height = "75px"
    knapp.style.borderRadius = "20px"
    knapp.addEventListener("click", () => {
        PrintaUtResult(bob)
    })
    document.body.appendChild(knapp)
}

function PrintaUt(hej){
    let O = 0
    let G = 0
    while (O <= hej.length){
        while (G < hej[O]){
         skapakort(G*30,O*125) 
         G = G + 1  
        }
        G = 0
        O = O + 1
    }
    
}

function tabort(){
    var haha = document.getElementsByClassName("kortar")
    let yo = haha.length.valueOf()
    for (var i = 0; i < yo ; i++) {
    haha[0].remove()
}
        }

function scenetoggle(){
    if (flip == true){
    var haha = document.getElementsByClassName("ett");
    var haha2 = document.getElementsByClassName("fart");
    for (var i = 0; i < haha.length; i++) {
        haha[i].style.visibility = "hidden"}
    for (var i = 0; i < haha2.length; i++) {
        haha2[i].style.visibility = "hidden"}
        flip = false}
    else {
        var haha = document.getElementsByClassName("ett");
        var haha2 = document.getElementsByClassName("fart");
    for (var i = 0; i < haha.length; i++) {
        haha[i].style.visibility = "visible"}
        for (var i = 0; i < haha2.length; i++) {
            haha2[i].style.visibility = "visible"}
        flip = true}
    }

async function sleep(seconds) {
        return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
      }

async function Kör(){
    numberofStacks = Number(document.getElementById("input2").value);
    numberofCards = Number(document.getElementById("input").value);
    if (isNaN(numberofStacks) == false && numberofStacks != "" && isNaN(numberofCards) == false && numberofCards != "" && numberofCards >= numberofStacks){
    scenetoggle()
   

    let cardStack = []
    let run = true
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
    
    while(run === true){
        
        tabort()
        PrintaUt(cardStack)
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
                tabort()
                PrintaUt(cardStack)
            SlutSpelat(results)    
            run = false
    
        }
        }
    
        results.push([...cardStack])
    
        console.log(cardStack)
    
        y += 1
        
        if(run == false){
            break
        }
    
        if(y == 50){
            console.log("det går inte ut")
            tabort()
            PrintaUt(cardStack)
            SlutSpelat(results)
            run = false 
        }
        console.log(y)
    }
}
else {document.getElementById("FAILSAFE").innerHTML = "Du måste fylla i två värden! (nummer)";}
}

