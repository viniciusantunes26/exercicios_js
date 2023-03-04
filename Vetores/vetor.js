//console.log(n) =  imprime o vetor inteiro
//console.log(n.indexOf(...)) = imprime o valor do INDICE do Vetor
//console.log[...] = imprime a posição do valor dentro do vetor
//length = tamanho do vetor


// DESAFIO Inverter o próprio N1

/*let n1 = [3,4,1,5,9]
//n1 = [9,5,1,4,3]
let aux

for(let i = 0; i < n1.length; i++){
    
    
}
*/
let n = [3,4,1,5,9]
let aux


for(let cont = 0; cont < n.length / 2; cont++){
    aux = n[n.length-1-cont]
    n[n.length-1-cont] = n[cont]
    n[cont] = aux
}
console.log(n)