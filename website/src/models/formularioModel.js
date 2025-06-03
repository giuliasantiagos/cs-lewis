var database = require("../database/config");

function enviar(selectLivro, selectGenero, qtdLidos, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function enviar():", selectLivro, selectGenero, qtdLidos, idUsuario);

    var instrucaoSql = `
        INSERT INTO usuario_livros (fkusuario, livro_favorito, genero_favorito, qtdLidos) VALUES ('${idUsuario}', '${selectLivro}', '${selectGenero}', '${qtdLidos}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarQtd(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarQtd():", idUsuario);

    var instrucaoSql = `
        select fkusuario, livro_favorito, genero_favorito, qtdLidos from usuario_livros where fkusuario = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarGenero() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarGenero(): ");
    var instrucaoSql = `
        select 	(select count(genero_favorito) from usuario_livros where genero_favorito = 'suspense' ) as suspense,
                (select count(genero_favorito) from usuario_livros where genero_favorito = 'romance' ) as romance,
                (select count(genero_favorito) from usuario_livros where genero_favorito = 'fantasia' ) as fantasia,
                (select count(genero_favorito) from usuario_livros where genero_favorito = 'ficcao_cientifica' ) as ficcao_cientifica,
                (select count(genero_favorito) from usuario_livros where genero_favorito = 'comedia' ) as comedia,
                (select count(genero_favorito) from usuario_livros where genero_favorito = 'nao_ficcao' ) as nao_ficcao,
                (select count(genero_favorito) from usuario_livros where genero_favorito = 'drama' ) as drama;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function listarLivro() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarLivro(): ");
    var instrucaoSql = `
        select 	(select count(livro_favorito) from usuario_livros where livro_favorito = 'cronicas' ) as cronicas,
                (select count(livro_favorito) from usuario_livros where livro_favorito = 'cristianismo' ) as cristianismo,
                (select count(livro_favorito) from usuario_livros where livro_favorito = 'cartas' ) as cartas,
                (select count(livro_favorito) from usuario_livros where livro_favorito = 'peso' ) as peso,
                (select count(livro_favorito) from usuario_livros where livro_favorito = 'planeta' ) as planeta;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    enviar,
    listarQtd,
    listarGenero,
    listarLivro
}
