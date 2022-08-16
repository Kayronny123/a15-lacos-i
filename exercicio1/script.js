// # Exercício 1
// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando 
// se a pessoa deseja comer mais coxi
// nhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` 
// para guardar o valor total.
// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao 
// valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.

let = "S"
let pedido = prompt ("Deseja mais uma coxinha? S/N").toUpperCase();
let total = 0

while(pedido == "S"){
    total = total+2.50
    pedido = prompt("Deseja mais uma coxinha? S/N").toUpperCase();
    console.log(`Seu saldo foi de R$:${total}`);
}
alert(`Sua conta total foi de R$:${total}`)