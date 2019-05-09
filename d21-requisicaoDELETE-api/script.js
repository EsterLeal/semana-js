const caixa = document.getElementById("root");
const authors = document.createElement('div');
authors.setAttribute('class', 'authors');
caixa.appendChild(authors);

fetch('https://reqres.in/api/users')
.then((response) => {
    return response.json();
})
.then((info) => {
    console.log(info);

    info.data.forEach(pessoas=> {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('id', pessoas.id);
        authors.appendChild(card);
        
        const nome = document.createElement('h2');
        nome.textContent = pessoas.first_name + " " + pessoas.last_name;
        card.appendChild(nome);
        
        const email = document.createElement('p');
        email.textContent = pessoas.email;
        card.appendChild(email);

        const botao = document.createElement("button");
        botao.innerHTML = "✖";
        botao.setAttribute('data-id', pessoas.id);
        card. appendChild(botao);

        botao.addEventListener("click", () => {
            console.log("EAE");
        })

        // const avatar = document.createElement('img');
        // avatar.setAttribute ("src", pessoas.avatar);
        // authors.appendChild(avatar);
                
    })
})
.catch((erro) => {
    console.log(erro);
})




