let num = [4, 7, 9, 2, 3]
let ultimo = num[num.length - 1]

num.push(1)
num.sort()

console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor é ${num[0]} \nE o último é ${ultimo}`)

let pos = num.indexOf(8)

if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}