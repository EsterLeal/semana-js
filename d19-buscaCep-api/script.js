// pegando o elemento #cep HTML 
const cep = document.getElementById("cep");

console.log(cep.value)

cep.addEventListener("focusout", () => {
    console.log("FOCUS OUT!")

    // Escrevendo no console o valor do cep
    let cepVal = cep.value;

// promessa de fazer algo. espera um parâmetro da url que iremos buscar. "busca" alguma coisa

fetch (`http://viacep.com.br/ws/${cep.value}/json/`)
.then((response) => {
    // cada #then executa uma função - o primeiro retorna a resposta
    return response.json();
})
.then((data) => {
    // A partir da resposta, faz algo.
    console.log(data)
    console.log(data.cep)
    document.getElementById("estado").value = data.uf;
    document.getElementById("bairro").value = data.bairro;
    document.getElementById("cidade").value = data.localidade;
    document.getElementById("endereco").value = data.logradouro;
})
.catch((erro) => {
    // estrutura de programação, se nao der certo, da catch no erro.
    console.log(erro);
})

})