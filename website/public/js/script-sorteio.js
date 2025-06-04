b_usuario.innerHTML = sessionStorage.NOME_USUARIO;
b_qtd.innerHTML = sessionStorage.QTD_LIDOS;
b_restantes.innerHTML = 34-(sessionStorage.QTD_LIDOS);

const livros = [  

    {
        "capa": `<img src="./img/livros/livro_cartas.PNG" alt="Livro Cartas de um Diabo a Seu Aprendiz">`,
        "titulo": "Cartas de um Diabo a Seu Aprendiz",
        "genero": ["Suspense", "Comédia"]
    },
    {
        "capa": `<img src="./img/livros/livro_cristianismo.PNG" alt="Livro Cristianismo Puro e Simples">`,
        "titulo": "Cristianismo Puro e Simples",
        "genero": ["Literatura Cristã"]
    },
    {
        "capa": `<img src="./img/livros/peso_gloria.PNG" alt="Livro O Peso da Glória">`,
        "titulo": "O Peso da Glória",
        "genero": ["Literatura Cristã"]
    },
    {
        "capa": `<img src="./img/livros/tenhamos_rostos.PNG" alt="Livro Até que Tenhamos Rostos">`,
        "titulo": "Até que Tenhamos Rostos",
        "genero": ["Romance", "Fantasia"]
    },
    {
        "capa": `<img src="./img/livros/toda_minha_historia.PNG" alt="Livro Todo o meu Caminho Diante de Mim">`,
        "titulo": "Todo o meu Caminho Diante de Mim",
        "genero": ["Autobiografia", "Literatura Cristã"]
    },
    {
        "capa": `<img src="./img/livros/trilogia_cosmica.PNG" alt="Livro Além do Planeta Silencioso - Trilogia Cósmica">`,
        "titulo": "Além do Planeta Silencioso",
        "genero": ["Ficção Científica"]
    },
    {
        "capa": `<img src="./img/livros/livro_cronicas.PNG"
                    alt="Livro O Leão, a Feiticeira e o Guarda-Roupa - Crônicas de Nárnia">`,
        "titulo": "O Leão, a Feiticeira e o Guarda-Roupa",
        "genero": ["Fantasia", "Infantojuvenil"]
    },
    {
        "capa": `<img src="./img/livros/anatomia_luto.PNG" alt="Livro A Anatomia de um Luto">`,
        "titulo": "A Anatomia de um Luto",
        "genero": ["Drama", "Literatura Cristã"]
    },
    {
        "capa": `<img src="./img/livros/quatro_amores.PNG" alt="Livro Os Quatro Amores">`,
        "titulo": "Os Quatro Amores",
        "genero": ["Literatura Cristã"]
    },
    {
        "capa": `<img src="./img/livros/torre_sombria.PNG" alt="Livro A Torre Sombria">`,
        "titulo": "A Torre Sombria",
        "genero": ["Contos", "Suspense"]
    }

];

function sortearLeitura(){

    resposta.innerHTML = '';

    let sorteadorAuxiliador = Math.random();
    let sortearLivros = Math.floor(sorteadorAuxiliador * livros.length);

    resposta.innerHTML =    `${livros[sortearLivros].capa}
                            ${livros[sortearLivros].titulo}<br>
                            Gênero: ${livros[sortearLivros].genero}`;    
    

}

