let numberofStacks;
let numberofCards;
let check1 = 0;
let check2 = 0;
let save;
let flip = true

function Fåvärde1(){
    numberofCards = document.getElementById("input").value;
    check1 = 1
    
}
function Fåvärde2(){
    numberofStacks = document.getElementById("input2").value;
    check2 = 1

}
function scenetoggle(){
    if (flip == true){
    var haha = document.getElementsByClassName("ett");
    for (var i = 0; i < haha.length; i++) {
        haha[i].style.opacity = "0.0"}
        document.getElementById("knapp1").style.bottom = "5000px";
        document.getElementById("knapp2").style.bottom = "5000px";
        document.getElementById("input").style.bottom = "5000px";
        document.getElementById("input2").style.bottom = "5000px";
        document.getElementById("körknapp").style.bottom = "5000px";
        flip = false}
    else {
        var yo = document.getElementsByClassName("ett");
        for (var i = 0; i < yo.length; i++) {
        yo[i].style.opacity = "1.0"}
        document.getElementById("knapp1").style.bottom = "350px";
        document.getElementById("knapp2").style.bottom = "225px";
        document.getElementById("input").style.bottom = "350px";
        document.getElementById("input2").style.bottom = "225px";
        document.getElementById("körknapp").style.bottom = "130px";
        flip = true
    }
}

function Kör(){
    if (check1 + check2 == 2){
    alert("Nukörvi")
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
    
    
        for(i=0; i<results.length; i++){
            
            
            if(results[i].toString() == cardStack.toString()){
            
            
                console.log(results)
        
                if(results[results.length - 1].toString() == cardStack.toString()){
                    console.log("WINNER")
                }
                    
                else{
                    console.log("det går inte ut")  
                }
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
            run = false 
        }
        console.log(y)
    }
}
else {document.getElementById("FAILSAFE").innerHTML = "Du måste fylla i två värden!";}
}

