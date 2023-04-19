let korthög = []
let kör = true
let resultat = []
antal_högar = prompt("hur många högar?")

for (i=0; i < antal_högar; i++) {
    korthög.push(Math.ceil(Math.random()* 10))
    
}

korthög.sort()
console.log(korthög)

resultat.push(korthög)
console.log(resultat)



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