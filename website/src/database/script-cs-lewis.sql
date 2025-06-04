create database csLivros;
use csLivros;

create table usuario(
idusuario int primary key auto_increment,
nome varchar(45) not null,
email varchar(65) not null,
senha varchar(30) not null,
key(email)
);

create table usuario_livros(
fkusuario int,
livro_favorito varchar(60),
genero_favorito varchar(45),
qtdLidos int,
tempo datetime,
constraint fk_usuario foreign key (fkusuario) references usuario(idusuario)
);