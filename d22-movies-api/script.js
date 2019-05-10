const container = document.querySelector('.movies');
const botao = document.querySelector('.btn-search-movie');

botao.addEventListener('click', (acharFilme) =>{
    acharFilme.preventDefault();

    const busca = document.getElementById('movie');
    const valorBusca = busca.value;

    fetch('http://www.omdbapi.com/?s=' + busca.value + '&apikey=8e92ef36')
    .then(response =>{
        console.log(response.json)
        return response.json();
    })
    .then(data =>{
        console.log(data);

        data.search.forEach(filmes => {
            const filme = document.createElement('img');
            filme.setAttribute('src', )
            
        });
    })
})
