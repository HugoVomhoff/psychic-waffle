let numberofStacks
let numberofCards
let check1 = 0
let check2 = 0
let save
let flip = true
let speed = 1 // sätter standardhastigheten till "långsam"
let vinst
let kortnummer

// Ändrar timeout-tiden för programmet vilket ändrar tiden mellan varje handling som sker vilket resulterar i ett snabbare eller långsammare spel
// Sätts med hastighetsnapparna i början av spelet (långsam, mellan, snabb)
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

// Sätter ut ett resultat, samt vilket resultatsnummer det är, på givet x och y-värde
function resultprint(värde,y,x){
    const p = document.createElement("p")
    p.innerHTML =  värde
    p.style.position = "fixed"
    p.style.top = (150 + y) + "px"
    p.style.left = (100 + x) + "px"  
    p.style.fontSize = 30 + "px"
    p.className = "results_value"
    
    const s = document.createElement("p")
    s.innerHTML =  kortnummer + ". "
    s.style.position = "fixed"
    s.style.top = (150 + y) + "px"
    s.style.left = (40 + x) + "px"  
    s.style.fontSize = 30 + "px"
    s.className = "siffror"


    document.body.appendChild(p)
    document.body.appendChild(s)
}
// Sätter alla värden till standard samt tar bort allt som kommit fram på skärmen under spelomgången.
// Ser alltså till att allt ser ut på samma sätt som när spelet började
function reset(){
    document.getElementById("fortsättknapp").remove()
    kort = document.getElementsByClassName("results_value")
    siffror = document.getElementsByClassName("siffror")
    scenetoggle()
    vinst = 0
    document.getElementById("cardinput").value = ""
    document.getElementById("cardstackinput").value = ""
    document.getElementById("FAILSAFE").innerHTML = ""
    while (kort.length > 0){
        kort[0].remove()
    }
    while (siffror.length > 0){
        siffror[0].remove()
    }

}
// Skapar resultatscenen och ser till så att alla resultat visas
function PrintaUtResult(cardstack_temp){
    let A = 0  
    let x = 0
    let y = 0
    kortnummer = 1
    remove()

    // Visar en knapp för att starta om spelet
    document.getElementById("fortsättknapp").addEventListener("click", () => {
        reset()
    })
    document.getElementById("fortsättknapp").innerHTML = "Restart"
    while (A < cardstack_temp.length){
        resultprint(cardstack_temp[A],(x*50),(y*400))
        A = A + 1
        x = x + 1
        kortnummer = kortnummer + 1
        if (x % 10 == 0){
            y = y + 1
            x = 0
        }
        
    }

    // Färglägger för att visa vilka utfall som antingen gav en vinst eller förlust med antingen grön eller röd
    resultat = document.getElementsByClassName("results_value")
    siffror2 = document.getElementsByClassName("siffror")
    let resultatValue = resultat.length.valueOf()
    let sifferValue = siffror2.length.valueOf()
    if (vinst == 1) { 
    resultat[resultatValue - 1].style.color = "rgb(0, 255, 0)"
    resultat[resultatValue - 2].style.color = "rgb(0, 255, 0)"
    siffror2[sifferValue - 1].style.color = "rgb(0, 255, 0)"
    siffror2[sifferValue - 2].style.color = "rgb(0, 255, 0)"
    }
    if (vinst == 2){
        let i = 0
        while (i < resultatValue){
            if (resultat[i].innerHTML == resultat[resultatValue - 1].innerHTML){
                resultat[i].style.color = "rgb(255, 0, 0)" 
                siffror2[(i-1)].style.color = "rgb(255, 0, 0)"
            }
            i = i + 1

        }
            
    
        resultat[resultatValue - 1].style.color = "rgb(255, 0, 0)"

    }
}
// Kollar om ditt resultat är en vinst eller en förlust och printar baserat på du "du vann" eller "du förlorade"
function vinststatus(vinststatus){
            const p = document.createElement("p")
            if (vinststatus == "vann") {p.innerHTML = "Du vann!"}
            else {p.innerHTML = "Du förlorade!"}
            p.style.position = "fixed"
            p.style.top = (0) + "px"
            p.style.left = (100) + "px"  
            p.style.fontSize = 60 + "px"
            p.className = "results_value"
            document.body.appendChild(p)
    }

// Skapar en knapp för att visa resultaten
function SlutSpelat(temp_cardstack){
    const knapp = document.createElement("button")
    knapp.setAttribute("id", "fortsättknapp")
    knapp.className = "två"
    knapp.innerHTML = "Resultat"
    knapp.style.position = "fixed"
    knapp.style.top = 40 + "%"
    knapp.style.right = 10 + "%"
    knapp.style.width = "200px"
    knapp.style.height = "75px"
    knapp.style.borderRadius = "20px"
    knapp.addEventListener("click", () => {
        PrintaUtResult(temp_cardstack)
    })
    document.body.appendChild(knapp)
}

// Skapar ett kort och lägger det på givet x och y värde (på skärmen).
function createCard(y,x){
    const img = document.createElement("img")
    img.src="Images/baksida kort.png" 
    img.style.width = "100px"
    img.style.position = "fixed"
    img.style.top = (150 + y) + "px"
    img.style.left = (50 + x) + "px"
    img.className = "kort"
    document.body.appendChild(img)

}
// Lägger med hjälp av funktionen "create card" ut alla kort som är med i spelet på skärmen
function Print(cardStack){
    let counter_1 = 0
    let counter_2 = 0
    while (counter_1 <= cardStack.length){
        while (counter_2 < cardStack[counter_1]){
         createCard(counter_2*30,counter_1*125) 
         counter_2 = counter_2 + 1  
        }
        counter_2 = 0
        counter_1 = counter_1 + 1
    }
    
}

// Tar bort alla kort från skärmen
function remove(){
    var cards = document.getElementsByClassName("kort")
    let cardValue = cards.length.valueOf()
    for (var i = 0; i < cardValue ; i++) {
    cards[0].remove()
}
        }

// Gömmer / visar förstascenen
function scenetoggle(){
    if (flip == true){
    var scene1_objects = document.getElementsByClassName("ett")
    var speed_types = document.getElementsByClassName("fart")
    for (var i = 0; i < scene1_objects.length; i++) {
        scene1_objects[i].style.visibility = "hidden"}
    for (var i = 0; i < speed_types.length; i++) {
        speed_types[i].style.visibility = "hidden"}
        flip = false}
    else {
        var scene1_objects = document.getElementsByClassName("ett")
        var speed_types = document.getElementsByClassName("fart")
    for (var i = 0; i < scene1_objects.length; i++) {
        scene1_objects[i].style.visibility = "visible"}
        for (var i = 0; i < speed_types.length; i++) {
            speed_types[i].style.visibility = "visible"}
        flip = true}
    }

// Tvingar programmet att vänta en given tid innan functionen körs
async function sleep(seconds) {
        return new Promise((resolve) => setTimeout(resolve, seconds * 1000))
      }


// Starta spelet
async function run(){
    
    // Spelarinmatade variabler
    numberofStacks = Number(document.getElementById("cardstackinput").value)
    numberofCards = Number(document.getElementById("cardinput").value)

    // Failsafe för om man matar in fel
    if (isNaN(numberofStacks) == false && numberofStacks != "" && isNaN(numberofCards) == false && numberofCards != "" && numberofCards >= numberofStacks && numberofCards < 53 && numberofStacks < 11){
    scenetoggle()


    let cardStack = []
    let run_toggle = true
    let results = []
    let y = 1
    
    // Sorterar en lista i storleksordning
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
    
    
    // Sätter upp en slumpad andel av de totala korten i varje hög
    for (i=0; i < numberofStacks; i++) {
        cardStack.push(1)
    }
    numberofCards -= numberofStacks

    for(i=0; i < numberofCards; i++){
        allocated_cardstack = Math.floor((Math.random()*numberofStacks))
        cardStack[allocated_cardstack] += 1
    }

    // Sorterar dina högar i storleksordning
    cardStack = sort(cardStack)
    //Lägger till de nuvarande högarna i resultatlistan
    results.push([...cardStack])
    
    
    // Mainloopen
    while(run_toggle === true){
        
        remove()
        Print(cardStack)
        await sleep(speed)
        
        // Kör en "runda av patiansen" och tar ett kort från varje hög
        for (i=0; i < cardStack.length; i++){
            cardStack[i] = cardStack[i] - 1   
        } 
        
        // Lägger till en hög med ett kort taget från alla de andra högarna
        cardStack.push(cardStack.length)
        // Sorterar i storleksordning 
        cardStack = sort(cardStack)
        

        // Tar bort alla tomma högar
        while(cardStack[0] == 0){
                cardStack.splice(0, 1)
                }
    
        // Kollar om vi har vunnit eller förlorat
        for(i=0; i<results.length; i++){
            
            // Om de nuvarande högarna varit på samma sätt innan så har vi antingen vunnit eller förlorat
            if(results[i].toString() == cardStack.toString()){
            
            
                // Om de nuvarande högarna motsvarar förra omgångens högar har vi vunnit
                if(results[results.length - 1].toString() == cardStack.toString()){
                    vinststatus("vann")
                    vinst = 1
                }
                // Annars har vi förlorat  
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
    
        // Varje runda adderas 1 till räknren och om vi når 30 rundar har man automatiskt förlorat
        y += 1
        if(run_toggle == false){
            break
        }
    
        if(y == 30){
            remove()
            Print(cardStack)
            run_toggle = false 
            vinststatus("förlorade")
            SlutSpelat(results)
        }
    }
}
// Om något blivit fel så promtar vi med att skriva in korrekta värden
else {document.getElementById("FAILSAFE").innerHTML = "Du måste fylla i två värden! (nummer)"}
}