// Declaracion de variables:
let numeroMaximo = 100
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 6;

while (numeroUsuario != numeroSecreto)
{
    numeroUsuario = parseInt(prompt(`Adivina el número entre 1 y ${numeroMaximo}: `));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) 
    {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } 
    else 
    {
        if (numeroUsuario > numeroSecreto) 
        {
            alert('El número secreto es menor');
        } 
        else 
        {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        intentos++;

        if (intentos > maximosIntentos) 
        {
            alert(`Lo siento, no acertaste el número, llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }    
    }
}