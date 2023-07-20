let num1 = prompt("Insira o primeiro Número");
let num2 = prompt("Insira o segundo Número");

let sum = Number(num1) + Number(num2);
let subtraction = Number(num1) - Number(num2);
let multiplication = Number(num1) * Number(num2);
let division = Number(num1) / Number(num2);
let rest = Number(num1) % Number(num2);

console.log(alert(`A Soma dos números é: ${sum}`));
console.log(alert(`A Subtração dos números é: ${subtraction}`));
console.log(alert(`A Multiplicação dos números é: ${multiplication}`));
console.log(alert(`A Divisão dos números é: ${division}`));
console.log(alert(`O Resto da Divisão dos números é: ${rest}`));

if (sum % 2 === 0) {
    console.log(alert("O Número é: Par."));
    
} else {
    console.log(alert("O Número é: Impar."));
}

if (num1 === num2) {
    console.log(alert("Os números são iguais."));
} else {
    console.log(alert("Os numeros são diferentes."));
}