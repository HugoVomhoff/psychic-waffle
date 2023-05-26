
let numberofStacks;
let numberofCards;
let check1 = 0;
let check2 = 0;
let save;
let flip = true
let speed = 1;
let vinst;

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


function resultprint(värde,x,y){
    const p = document.createElement("p");
    p.innerHTML = "• " + värde
    p.style.position = "fixed"
    p.style.top = (150 + x) + "px"
    p.style.left = (100 + y) + "px"  
    p.style.fontSize = 30 + "px"
    p.className = "resultsar"
    document.body.appendChild(p);
}

function reset(){
    document.getElementById("fortsättknapp").remove()
    kort = document.getElementsByClassName("resultsar")
    scenetoggle()
    vinst = 0
    document.getElementById("cardinput").value = ""
    document.getElementById("cardstackinput").value = ""
    document.getElementById("FAILSAFE").innerHTML = ""
    while (kort.length > 0){
        kort[0].remove()
    }

}

function PrintaUtResult(hej){
    let A = 0  
    let x = 0
    let y = 0
    remove()
    document.getElementById("fortsättknapp").addEventListener("click", () => {
        reset()
    })
    document.getElementById("fortsättknapp").innerHTML = "Restart"
    while (A < hej.length){
        resultprint(hej[A],(x*50),(y*400))
        A = A + 1
        x = x + 1
        if (x % 10 == 0){
            y = y + 1
            x = 0
        }
        
    }

    resultat = document.getElementsByClassName("resultsar")
    let resultatValue = resultat.length.valueOf()
    if (vinst == 1) { 
    resultat[resultatValue - 1].style.color = "rgb(0, 255, 0)"
    resultat[resultatValue - 2].style.color = "rgb(0, 255, 0)"}
    if (vinst == 2){
        let i = 0
        while (i < resultatValue){
            if (resultat[i].innerHTML == resultat[resultatValue - 1].innerHTML){
                resultat[i].style.color = "rgb(255, 0, 0)"
            }
            i = i + 1

        }
            
    
        resultat[resultatValue - 1].style.color = "rgb(255, 0, 0)"

    }
}

function vinststatus(yo){
            const p = document.createElement("p");
            if (yo == "vann") {p.innerHTML = "Du vann!"}
            else {p.innerHTML = "Du förlorade!"}
            p.style.position = "fixed"
            p.style.top = (0) + "px"
            p.style.left = (100) + "px"  
            p.style.fontSize = 60 + "px"
            p.className = "resultsar"
            document.body.appendChild(p);
    }

function SlutSpelat(bob){
    const knapp = document.createElement("button")
    knapp.setAttribute("id", "fortsättknapp")
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

function createCard(x,y){
    const img = document.createElement("img");
    img.src="Images/baksida kort.png" 
    img.style.width = "100px"
    img.style.position = "fixed"
    img.style.top = (150 + x) + "px"
    img.style.left = (50 + y) + "px"
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
    let cardValue = cards.length.valueOf()
    for (var i = 0; i < cardValue ; i++) {
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
    numberofStacks = Number(document.getElementById("cardstackinput").value);
    numberofCards = Number(document.getElementById("cardinput").value);

    if (isNaN(numberofStacks) == false && numberofStacks != "" && isNaN(numberofCards) == false && numberofCards != "" && numberofCards >= numberofStacks && numberofCards < 53 && numberofStacks < 11){
    scenetoggle()



    let cardStack = []
    let run_toggle = true
    let results = []
    let y = 1
    
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
                    vinststatus("vann")
                    vinst = 1
                }
                    
                else{
                    vinststatus("förlorade")
                    vinst = 2
                }
                remove()
                Print(cardStack)
            SlutSpelat(results)
            run_toggle = false
    
        }
        }
    
        results.push([...cardStack])
    
        console.log(cardStack)
    
        y += 1
        
        if(run_toggle == false){
            break
        }
    
        if(y == 30){
            console.log("det går inte ut")
            remove()
            Print(cardStack)
            run_toggle = false 
            vinststatus("förlorade")
            SlutSpelat(results)
        }
        console.log(y)
    }
}
else {document.getElementById("FAILSAFE").innerHTML = "Du måste fylla i två värden! (nummer)";}
}