var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function enviar(varLivro1, varLivro2, varLivro3, varLivro4, varLivro5, varLivro6, varLivro7, varLivro8,
            varLivro9, varLivro10, varLivro11, varLivro12, varLivro13, varLivro14, varLivro15, varLivro16,
            varLivro17, varLivro18, varLivro19, varLivro20, varSelectGenero) {
    console.log("ACESSEI O FORMULÁRIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function enviar():", varLivro1, varLivro2, varLivro3, varLivro4, varLivro5, varLivro6, varLivro7, varLivro8,
                                                                                                                                                                                                                                                            varLivro9, varLivro10, varLivro11, varLivro12, varLivro13, varLivro14, varLivro15, varLivro16,
                                                                                                                                                                                                                                                            varLivro17, varLivro18, varLivro19, varLivro20, varSelectGenero);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario_livros (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    enviar
};