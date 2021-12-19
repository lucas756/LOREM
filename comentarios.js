/*
Tipos de dados:
    String: cadeia de caracteres
    use "" para indicá-las
    console.log("Lorem")
    Use crase para os casos de somar valores dentro de uma string, ou passar uma string variável:
    console.log(`${1+1}`)
*/
console.log(`resultado: ${10+1}`)


/*
# Number

33// inteiros
12.5 // quebrados ou floot
NaN // not a number
Infinity // infinito
console.log(12.5 + 12)  // Números não precisam de aspas como as strings

console.log(12.5 / "string") - NaN


# Boolean (true or false)

# Undefined or Null (indefinido vs. nulo)

Null - Objeto sem nada dentro, diferente de indefinido
Indefinido - Não existe

# Object - Dado estrutural, possui propriedades e funcionalidades (function)
console.log({
    nome: "Lohani",
    idade: 18,
    profissão: "Desenvolvedora"
})

# Array (Caixa com objetos dentro)
var array = [{
    Nome: "Farinha",
    Quantidade: 0.5,
    Marca: "Dona Benta"
},
{
    Nome: "Chantilly",
    Quantidade: 2,
    Marca: "Amélia"
}]


Váriaveis
    Cria um espaço no "armário (memória do seu computador)", recebem dados.
    Nomes simbólicos para receberem algum valor
    3 palavras para criar uma variável: var, let, const

    Var/let (podem mudar o seu valor durante a aplicação):
    var clima (nome da variável) = "Quente"
    clima = "Frio"

    Const (não muda durante a aplicação):
    const clima = "Quente"

Console.log(typeof clima) Verifica o tipo da variável

JS é fracamente tipado e muito dinâmico

*/