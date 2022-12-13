class Calculadora{

    somar (valor1, valor2) {
        const somar = parseInt(valor1) + parseInt(valor2)
        return somar
    }

    diminuir (valor1, valor2) {
        const diminuir = parseInt(valor1) - parseInt(valor2)
        return diminuir
    }
}








// Observações:
// span - texto pequeno --- 0.00 é porque vai começar vazio
// textContent - é o conteudo do texto
// addEventListener - quando o que estiver dentro do primeiro () acontecer o segundo parametro será executado
// parseInt - transformar a string e numero inteiro
// <div></div> - É uma caixa
// value -- serve para pegar o valor de dentro do imput
// const guardar a variável
// document.getElementById - chamar a variável do html
// elementoTextoResultado - 