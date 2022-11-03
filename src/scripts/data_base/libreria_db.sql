create database if not exists Libreria_db;
use Libreria_db;

create table Personas(
Num_Identificacion bigint not null primary key,
Nombre varchar(30) not null,
Telefono bigint not null unique key,
Email varchar(40) not null unique key,
Tipo_Persona enum("Usuario","Administrador","Autor"),
Permiso boolean
);

Create table Direcciones(
id_Direccion int auto_increment primary key,
Tipo varchar(30) not null,
Num1 varchar(30),
Num2 varchar(30),
Num3 varchar(30)
);

Create table Documentos(
id_Documento int auto_increment primary key,
Titulo varchar(30),
Fecha_Publicacion date,
Fecha_Creacion date,
Fecha_Eliminacion date,
Activo boolean,
Pago boolean
);

Create table Registros(
id_Registro int auto_increment not null primary key,
Fecha_Adquisicion date,
FK_Num_identificacion bigint,
FK_id_Documento int,
foreign key (FK_Num_identificacion) references Personas(Num_Identificacion),
foreign key (FK_id_Documento) references Documentos(id_Documento)
);

Create table Contactos(
id_Contacto int auto_increment primary key,
Email_Editorial varchar(30) not null unique key,
Telefono_Contacto varchar(30) not null unique key,
FK_id_Direccion int,
foreign key (FK_id_Direccion) references Direcciones(id_Direccion)
);

create table Editoriales(
id_Editorial int auto_increment primary key,
Nombre_Editorial varchar(30) not null unique key,
FK_id_Documento int,
FK_id_Contacto int,
foreign key (FK_id_Documento) references Documentos(id_Documento),
foreign key (FK_id_Contacto) references Contactos(id_Contacto)
);