let korthög = []
for (i=0; i < prompt("hur många högar?"); i++) {
    korthög.push(Math.ceil(Math.random()* 10))
}
for (i=0; i < korthög.length; i++){
    korthög[i] = (korthög[i] - 1)
}
korthög.push(korthög.length)
for (i=0; i < korthög.length; i++){
    if (korthög[i] == 0)
    {korthög.pop(i)
    i -= 1}}
