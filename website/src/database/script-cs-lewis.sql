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

create table livros(
idlivros int primary key auto_increment,
titulo varchar(65) not null,
editora varchar(45) not null,
publicacao date,
genero_literario varchar(45),
numpagina int not null,
constraint chk_editora check (editora in ('Thomas Nelson Brasil', 'HarperCollins Brasil'))
);

create table usuario_livros(
fkusuario int,
fklivros int,
status_leitura int,
primary key(fkusuario, fklivros),
constraint fk_usuario foreign key (fkusuario) references usuario(idusuario),
constraint fk_livros foreign key (fklivros) references livros(idlivros),
constraint chk_status_leitura check (status_leitura in (1, 2, 3))
);

INSERT INTO livros
(titulo, editora, publicacao, genero_literario, numpagina) VALUES
('Cristianismo Puro e Simples',               'Thomas Nelson Brasil', '2016-05-02', 'Apologética cristã',              320),
('Cartas de um Diabo a Seu Aprendiz',         'Thomas Nelson Brasil', '2022-06-06', 'Ficção epistolar / sátira',       224),
('O Grande Divórcio',                         'Thomas Nelson Brasil', '2021-09-13', 'Ficção alegórica',                160),
('Deus no Banco dos Réus',                    'Thomas Nelson Brasil', '2021-01-18', 'Ensaios / apologética',           304),
('Prefácio ao Paraíso Perdido',               'Thomas Nelson Brasil', '2016-10-10', 'Crítica literária',               240),
('Reflexões Cristãs',                         'Thomas Nelson Brasil', '2023-03-06', 'Ensaios teológicos',              176),
('O Regresso do Peregrino',                   'Thomas Nelson Brasil', '2022-02-21', 'Ficção alegórica',                208),
('A Torre Sombria',                           'Thomas Nelson Brasil', '2022-08-08', 'Ficção alegórica',                160),
('A Última Noite do Mundo',                   'Thomas Nelson Brasil', '2023-09-04', 'Coletânea de palestras',          160),
('A Abolição do Homem',                       'Thomas Nelson Brasil', '2021-05-24', 'Filosofia da educação',           176),
('A Anatomia de um Luto',                     'Thomas Nelson Brasil', '2020-11-16', 'Memórias / luto',                 112),
('O Assunto do Céu',                          'Thomas Nelson Brasil', '2022-04-25', 'Sermões / teologia',              128),
('O Peso da Glória',                          'Thomas Nelson Brasil', '2021-07-19', 'Sermões / teologia',              208),
('O Problema da Dor',                         'Thomas Nelson Brasil', '2020-09-07', 'Apologética / sofrimento',        160),
('Os Quatro Amores',                          'Thomas Nelson Brasil', '2021-02-15', 'Teologia do amor',                208),
('Surpreendido pela Alegria',                 'Thomas Nelson Brasil', '2017-02-20', 'Autobiografia espiritual',        240),
('Até que Tenhamos Rostos',                   'Thomas Nelson Brasil', '2017-07-03', 'Romance mitológico',              352),
('Todo o meu Caminho Diante de Mim',          'Thomas Nelson Brasil', '2023-01-30', 'Diários / autobiografia',         368),
('Trilogia Cósmica',                          'Thomas Nelson Brasil', '2017-01-09', 'Ficção científica',               896),
('As Crônicas de Nárnia',                     'HarperCollins Brasil', '2013-10-21', 'Fantasia infanto-juvenil',        752);
