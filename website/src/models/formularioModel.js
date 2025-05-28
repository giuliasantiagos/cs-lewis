var database = require("../database/config");

function recuperarDados(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function recuperarDados(): ", idUsuario);
    var instrucaoSql = `
        SELECT fkusuario, qtdLidos, genero_favorito FROM usuario_livros WHERE fkusuario = '${idUsuario}';
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

function atualizarGrafico(idUsuario, novaQtdLidos) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarGrafico(): ", idUsuario);
    var instrucaoSql = `
        UPDATE usuario_livros SET qtdLidos = '${novaQtdLidos}' WHERE fkusuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function enviar(selectGenero, qtdLidos, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function enviar():", selectGenero, qtdLidos, idUsuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario_livros (fkusuario, genero_favorito, qtdLidos) VALUES ('${idUsuario}', '${selectGenero}', '${qtdLidos}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    enviar,
    atualizarGrafico,
    recuperarDados,
    listarGenero
}
