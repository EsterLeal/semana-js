// Ocorre o evento de escutar e ele executa o fetch    
const container = document.querySelector('.stickers')
const botao = document.querySelector('.btn-search-sticker');

botao.addEventListener('click', (buscar) => {
    buscar.preventDefault();

    const busca = document.getElementById('sticker');
    const valorBusca = busca.value;
    const linkConsulta = 'https://api.giphy.com/v1/stickers/search?q=' + busca.value + '&api_key=GvPeMRVnKHDDee5PTvIUMM5oI9iDT6Gu'

fetch(linkConsulta)
.then(response =>{
    console.log(response.json);
    return response.json();
})
.then(infoApi => {
    console.log(infoApi);

    infoApi.data.forEach(gif => {
        const img = document.createElement('img');
        img.setAttribute('src', gif.images.original.url);
        container.appendChild(img);
    })
})
    .catch(erro =>{
        console.log(erro);
    })
})
