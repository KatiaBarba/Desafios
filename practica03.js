//Desafio de la clase 3 "Loops y tentativas"

/*Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. 
Muestra cada número.*/
let i = 1;
while (i < 11);
{
    alert (`El numero es ${i}`);
    i += i;
}


/*Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. 
Muestra cada número.*/

let i = 10;
while (i > 0);
{
    alert (`El numero es:  ${i}`);
    i -= i;
}


/*Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número 
utilizando un bucle 'while' en la consola del navegador.*/

let numeroInicial = prompt ("Inicio de la cuenta regresiva: ");
let i = numeroInicial

while (i > 0);
{
    console.log (i);
    i = i - 1
}

/*Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número 
utilizando un bucle 'while' en la consola del navegador.*/

let numeroInicial = prompt ("Inicio de la cuenta progresiva: ");
let i = 0

while (i < numeroInicial)
{
    console.log (i)
    i = i + 1
}