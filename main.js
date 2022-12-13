const calculadora = new Calculadora ();

function somar () {
    const valor1 = document.getElementById("valor1").value;
    const valor2 = document.getElementById("valor2").value;
    
    //Esse const deve ser nomeado com o que ele pretende mostrar
    const resultado = calculadora.somar (valor1, valor2);
    const elementoTextoResultado = document.getElementById ("textoResultado");
    elementoTextoResultado.textContent = "resultado:" + resultado;    

}

function diminuir () {
    const valor1 = document.getElementById("subtrair1").value;
    const valor2 = document.getElementById("subtrair2").value;

    const resultadoSubtrair = calculadora.diminuir (valor1, valor2);
    const elementoTextoResultadoSubtrair = document.getElementById ("textoResultadoSubtrair");
    elementoTextoResultadoSubtrair.textContent = "resultado:" + resultadoSubtrair;    

}


const botaoSomar = document.getElementById("botaoSomar");
botaoSomar.addEventListener ("click", () => somar());

const botaoSubtrair = document.getElementById("botaoSubtrair");
botaoSubtrair.addEventListener ("click", () => diminuir());