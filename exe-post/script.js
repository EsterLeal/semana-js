const button = document.getElementById("send_form");


// addEvent Listener = receita ---  click= ingrediente --- parametros= ingrediente de fora para acrescentar à receita
button.addEventListener("click" , (evento) => {
    console.log("OIIIIIII");
    evento.preventDefault();
    // EVENTO = é o parâmetro que espero prevenir.
    // preventDefalt = Previne um evento padrão.
    
    const nome = document.getElementById("first_name").value;
    const sobrenome= document.getElementById("last_name").value;
    const email= document.getElementById("email").value;

    fetch('https://reqres.in/api/users', {

        Method:'POST',
        Headers: {
            'Accepts':'applications/json',
            'Content-Type':'applications/json',
        },

        body: JSON.stringify ({
            // converte o json para string novamnete #stringify
            'first-name': nome,
            'last-name': sobrenome,
            'email': email,
        })
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById("message").textContent("Sucesso!!!")
    })
    .catch((erro) => {
        console.log(erro);
    })

})