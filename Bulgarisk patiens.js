let korthög = []
let kör = false
let resultat = []
antal_högar = prompt("hur många högar?")

function sortera(array){
    let Fixad_array = []
    x = array.length
    
    while(x > Fixad_array.length){
        let index;
        Fixad_array.push(Math.min(...array))
        index = array.indexOf(Math.min(...array))
        array.splice(index, 1)
    }
    return Fixad_array
}

for (i=0; i < antal_högar; i++) {
    korthög.push(Math.ceil(Math.random()* 10))
}

resultat.push(sortera(korthög))
kör = true

// poppa sneare kanske

while(kör === true){

    for (i=0; i < korthög.length; i++){
        korthög[i] = (korthög[i] - 1)
    }

    korthög.push(korthög.length)

    for (i=0; i < korthög.length; i++){
        if (korthög[i] == 0){
            korthög.pop(i)
            i -= 1
            }
    
        }
    
    
    if(resultat.includes(korthög)){
        
        console.log(korthög)
        console.log(resultat)

        if(resultat[resultat.length - 1] === korthög){
            console.log("WINNER")
        }
            
        else{
            console.log("det går inte ut")  
        }
        kör = false
       
    }

    
    resultat.push(korthög)
    console.log(korthög)
}
