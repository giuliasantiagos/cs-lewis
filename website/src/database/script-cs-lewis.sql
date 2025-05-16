create database csLivros;
use csLivros;

create table usuario(
idusuario int primary key auto_increment,
nome varchar(45) not null,
email varchar(65) not null,
senha varchar(30) not null
);

select * from usuario;

create table livros(
idlivros int primary key auto_increment,
nome varchar(65) not null,
editora varchar(45) not null,
publicacao date,
genero_literario varchar(45),
numpagina int not null,
constraint chk_editora check (editora in ('Thomas Nelson Brasil', 'HarperCollins Brasil'))
)auto_increment = 1001;

create table usuario_livros(
fkusuario int,
fklivros int,
status_leitura varchar(45),
primary key(fkusuario, fklivros),
constraint fk_usuario foreign key (fkusuario) references usuario(idusuario),
constraint fk_livros foreign key (fklivros) references livros(idlivros)
);