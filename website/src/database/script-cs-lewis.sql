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

INSERT INTO livros (titulo, editora, numpagina) VALUES
('Cristianismo Puro e Simples', 'Thomas Nelson Brasil', 320),
('Cartas de um Diabo a Seu Aprendiz', 'Thomas Nelson Brasil', 224),
('O Grande Divórcio', 'Thomas Nelson Brasil', 160),
('Deus no Banco dos Réus', 'Thomas Nelson Brasil', 304),
('Prefácio ao Paraíso Perdido', 'Thomas Nelson Brasil', 240),
('Reflexões Cristãs', 'Thomas Nelson Brasil', 176),
('O Regresso do Peregrino', 'Thomas Nelson Brasil', 208),
('A Torre Sombria', 'Thomas Nelson Brasil', 160),
('A Última Noite do Mundo', 'Thomas Nelson Brasil', 160),
('A Abolição do Homem', 'Thomas Nelson Brasil', 176),
('A Anatomia de um Luto', 'Thomas Nelson Brasil', 112),
('O Assunto do Céu', 'Thomas Nelson Brasil', 128),
('O Peso da Glória', 'Thomas Nelson Brasil', 208),
('O Problema da Dor', 'Thomas Nelson Brasil', 160),
('Os Quatro Amores', 'Thomas Nelson Brasil', 208),
('Surpreendido pela Alegria', 'Thomas Nelson Brasil', 240),
('Até que Tenhamos Rostos', 'Thomas Nelson Brasil', 352),
('Todo o meu Caminho Diante de Mim', 'Thomas Nelson Brasil', 368),
('Trilogia Cósmica', 'Thomas Nelson Brasil', 896),
('As Crônicas de Nárnia', 'HarperCollins Brasil', 752);
