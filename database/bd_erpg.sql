create database eRPG;
use eRPG;

create table usuario(
	id_usuario int primary key auto_increment,
    nm_usuario varchar(45) not null,
    email varchar(45) not null,
    sexo char(1),
    senha varchar(20) not null
);

create table personagem(
	id_person int primary key auto_increment,
    nm_person varchar(45),
    classe varchar(15),
    especie varchar(15),
    natalidade varchar(15),
    historia varchar(100),
    historia varchar(100),
    id_usuario int,
    constraint fk_personagem_usuario foreign key (id_usuario) references usuario(id_usuario)
);