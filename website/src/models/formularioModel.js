var database = require("../database/config");

function enviar(selectLivro, selectGenero, qtdLidos, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function enviar():", selectLivro, selectGenero, qtdLidos, idUsuario);

    var instrucaoSql = `
        INSERT INTO usuario_livros (fkusuario, livro_favorito, genero_favorito, qtdLidos, tempo) VALUES ('${idUsuario}', '${selectLivro}', '${selectGenero}', '${qtdLidos}', current_timestamp());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function listarQtd(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarQtd():", idUsuario);

    var instrucaoSql = `
        select fkusuario, qtdLidos, tempo from usuario_livros where fkusuario = '${idUsuario}' order by tempo desc limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function listarGenero() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarGenero(): ");
    var instrucaoSql = `
        select 	(select count(genero_favorito) from usuario_livros ul where genero_favorito = 'suspense' order by ul.tempo desc limit 1) as suspense,
                (select count(genero_favorito) from usuario_livros ul where genero_favorito = 'romance' order by ul.tempo desc limit 1) as romance,
                (select count(genero_favorito) from usuario_livros ul where genero_favorito = 'fantasia' order by ul.tempo desc limit 1) as fantasia,
                (select count(genero_favorito) from usuario_livros ul where genero_favorito = 'ficcao_cientifica' order by ul.tempo desc limit 1) as ficcao_cientifica,
                (select count(genero_favorito) from usuario_livros ul where genero_favorito = 'comedia' order by ul.tempo desc limit 1) as comedia,
                (select count(genero_favorito) from usuario_livros ul where genero_favorito = 'nao_ficcao' order by ul.tempo desc limit 1) as nao_ficcao,
                (select count(genero_favorito) from usuario_livros ul where genero_favorito = 'drama' order by ul.tempo desc limit 1) as drama; `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function listarLivro() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarLivro(): ");
    var instrucaoSql = `
        select 	(select count(livro_favorito) from usuario_livros ul where livro_favorito = 'cronicas' order by ul.tempo desc limit 1) as cronicas,
                (select count(livro_favorito) from usuario_livros ul where livro_favorito = 'cristianismo' order by ul.tempo desc limit 1) as cristianismo,
                (select count(livro_favorito) from usuario_livros ul where livro_favorito = 'cartas' order by ul.tempo desc limit 1) as cartas,
                (select count(livro_favorito) from usuario_livros ul where livro_favorito = 'peso' order by ul.tempo desc limit 1) as peso,
                (select count(livro_favorito) from usuario_livros ul where livro_favorito = 'planeta' order by ul.tempo desc limit 1) as planeta;
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
