let num = [5, 8, 9,2] 
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posiçoes`)
console.log(`o primeiro valor do vetor e ${num[0]}`)
let pos = num.indexOf(4)
console.log(`O valor 8 esta na posiçao  ${pos}`)
if(pos == -1){
    console.log('O valor nao foi encontrado!')
} else{
    console.log(`O valor esta na pósiçao ${pos}`)

}