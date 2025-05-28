create database csLivros;
use csLivros;

create table usuario(
idusuario int primary key auto_increment,
nome varchar(45) not null,
email varchar(65) not null,
senha varchar(30) not null,
key(email)
);

select * from usuario;

create table usuario_livros(
fkusuario int,
genero_favorito varchar(45),
qtdLidos int,
constraint fk_usuario foreign key (fkusuario) references usuario(idusuario)
);

select 	(select count(genero_favorito) from usuario_livros where genero_favorito = 'suspense' ) as suspense,
		(select count(genero_favorito) from usuario_livros where genero_favorito = 'romance' ) as romance,
        (select count(genero_favorito) from usuario_livros where genero_favorito = 'fantasia' ) as fantasia,
        (select count(genero_favorito) from usuario_livros where genero_favorito = 'ficcao_cientifica' ) as ficcao_cientifica,
        (select count(genero_favorito) from usuario_livros where genero_favorito = 'comedia' ) as comedia,
        (select count(genero_favorito) from usuario_livros where genero_favorito = 'nao_ficcao' ) as nao_ficcao,
        (select count(genero_favorito) from usuario_livros where genero_favorito = 'drama' ) as drama;

/*INSERT INTO livros
(titulo, editora, publicacao, genero_literario, numpagina) VALUES
('Cartas de um Diabo a Seu Aprendiz',         'Thomas Nelson Brasil', '2022-06-06', 'Suspense',       224),
('Até que Tenhamos Rostos',                   'Thomas Nelson Brasil', '2017-07-03', 'Romance',              352),
('As Crônicas de Nárnia',                     'HarperCollins Brasil', '2013-10-21', 'Fantasia',        752),
('Trilogia Cósmica',                          'Thomas Nelson Brasil', '2017-01-09', 'Ficção científica',               896),
('A Torre Sombria',                           'Thomas Nelson Brasil', '2022-08-08', 'Terror',                160),
('As Crônicas de Nárnia',                     'HarperCollins Brasil', '2013-10-21', 'Fantasia',        752),
('Cartas de um Diabo a Seu Aprendiz',         'Thomas Nelson Brasil', '2022-06-06', 'Comédia',       224),
('Todo o meu Caminho Diante de Mim',          'Thomas Nelson Brasil', '2023-01-30', 'Não ficção',         368),
('A Anatomia de um Luto',                     'Thomas Nelson Brasil', '2020-11-16', 'Drama',                 112);
*/
