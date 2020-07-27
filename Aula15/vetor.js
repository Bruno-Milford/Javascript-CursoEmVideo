let valor = [2, 5, 8, 6, 3, 7]
/*
for(let pos = 0; pos < valor.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valor[pos]}`)
}
*/

for(let pos in valor){
    console.log(`A posição ${pos} tem o valor ${valor[pos]}`)
}