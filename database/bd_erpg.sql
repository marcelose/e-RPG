create database eRPG;
use eRPG;

create table usuario(
	id_usuario int primary key,
    nm_usuario varchar(45) not null,
    email varchar(45) not null,
    sexo char(1),
    senha varchar(20) not null
);