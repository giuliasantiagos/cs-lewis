create database csLivros;
use csLivros;

create table usuario(
idusuario int primary key auto_increment,
nome varchar(45) not null,
email varchar(65) not null,
senha varchar(30) not null,
key(email)
);

create table livros(
idlivro int primary key auto_increment,
titulo varchar(60),
genero varchar(60)
);

create table usuario_livros(
fkusuario int,
genero_favorito varchar(45),
qtdLidos int,
constraint fk_usuario foreign key (fkusuario) references usuario(idusuario)
);

INSERT INTO livros (titulo, genero) 
VALUES	('Cartas de um Diabo a Seu Aprendiz', 'Suspense'),
		('Até que Tenhamos Rostos', 'Romance'),
		('As Crônicas de Nárnia', 'Fantasia'),
		('Trilogia Cósmica', 'Ficção científica'),
		('A Torre Sombria', 'Terror'),
		('As Crônicas de Nárnia', 'Fantasia'),
		('Cartas de um Diabo a Seu Aprendiz', 'Comédia'),
		('Todo o meu Caminho Diante de Mim', 'Não ficção'),
		('A Anatomia de um Luto', 'Drama');

