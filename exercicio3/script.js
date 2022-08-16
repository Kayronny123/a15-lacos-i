// # Exercício 3
//  Crie um array com 5 strings. Faça um programa que percorra este array e
//  imprima as strings em formato de ranking, como no exemplo abaixo:
// ```jsx
// //entrada
// const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];
// //saída
// "1 - Rússia"
// "2 - Canadá"
// "3 - China"
// "4 - EUA"
// "5 - Brasil"
// ```

const lutadores = ["Ranking top 5 lutadores","Walderley Silva", "Gilbert Yvel", "Gerard Gordeau", "Frank Mir", "Alistair Overeem"]

for(let i = 0; i<lutadores.length; i++){
    console.log(`${i} ${lutadores[i]}`)
}

