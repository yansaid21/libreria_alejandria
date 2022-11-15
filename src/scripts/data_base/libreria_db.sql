create database if not exists libreria_db;
use libreria_db;
#drop database libreria_db;

create table usuarios(
tipo_documento varchar(30),
num_identificacion bigint not null primary key,
nombre1 varchar(10) not null,
nombre2 varchar(10),
apellido1 varchar(10) not null,
apellido2 varchar(10),
telefono bigint not null unique key,
email varchar(40) not null unique key,
password varchar(30) not null,
tipo_usuario enum("Usuario","Administrador","Autor"),
permiso boolean,
id_img int
);

Create table direcciones(
id_direccion int auto_increment primary key,
tipo varchar(30) not null,
num1 varchar(30),
num2 varchar(30),
num3 varchar(30)
);

Create table documentos(
id_documento int auto_increment primary key,
titulo varchar(30),
fecha_publicacion date,
fecha_creacion date,
fecha_eliminacion date,
activo boolean,
pago boolean
);

Create table registros(
id_registro int auto_increment not null primary key,
fecha_adquisicion date,
fk_num_identificacion bigint,
fk_id_documento int,
foreign key (fk_num_identificacion) references usuarios(num_identificacion),
foreign key (fk_id_documento) references documentos(id_documento)
);

Create table contactos(
id_contacto int auto_increment primary key,
email_editorial varchar(30) not null unique key,
telefono_contacto varchar(30) not null unique key,
fk_id_direccion int,
foreign key (fk_id_direccion) references direcciones(id_direccion)
);

create table editoriales(
id_editorial int auto_increment primary key,
nombre_editorial varchar(30) not null unique key,
fk_id_documento int,
fk_id_contacto int,
foreign key (fk_id_documento) references documentos(id_documento),
foreign key (fk_id_contacto) references contactos(id_contacto)
);

############
insert into usuarios(tipo_documento,num_identificacion,nombre1,nombre2,apellido1,apellido2,telefono,email,password,tipo_usuario,id_img)
values("Cédula",1000217300,"jean","said","arias","marin",3103767661,"yansaid21@gmail.com","0087","Administrador",1);