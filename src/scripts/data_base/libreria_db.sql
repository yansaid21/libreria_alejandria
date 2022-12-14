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
suscrito enum("si","no") default("no"),
tipo_usuario enum("Usuario","Administrador","Autor") default ("Usuario"),
id_img varchar (1000)
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
titulo varchar(300),
fecha_publicacion date,
fecha_creacion date,
fecha_eliminacion date,
tipo enum ("artículo","ponencia","libro"),
tema varchar (20),
activo boolean,
url_img varchar (10000)
);

Create table registros(
id_registro int auto_increment not null primary key,
fecha_adquisicion date,
fk_num_identificacion bigint,
fk_id_documento int,
sumaAmbos bigint unique key,
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
create table comentarios(
id_comentario int auto_increment primary key,
body varchar (15000),
tipo_comentario enum ("principal","ayuda"),
fk_num_identificacion bigint,
foreign key (fk_num_identificacion) references usuarios(num_identificacion)
);

############ insertar usuarios
insert into usuarios(tipo_documento,num_identificacion,nombre1,nombre2,apellido1,apellido2,telefono,email,password,tipo_usuario,id_img)
values("Cédula",1000217300,"jean","said","arias","marin",3103767661,"yansaid21@gmail.com","0087","Administrador","https://thumbs.dreamstime.com/b/avatar-de-la-panda-45383457.jpg");
##################insertar documentos
insert into documentos(titulo,fecha_publicacion,fecha_creacion,tipo,activo,url_img)
values
("Movimiento Científico","2016-08-20","2022-11-25","artículo",1,"https://revmovimientocientifico.ibero.edu.co/public/journals/4/cover_issue_101_es_ES.jpg"),
("los saberes populares como herramienta educativa y tecnológica, ara el fortalecimiento social de la comunidad rural 'camacho'","2012-03-10","2022-11-27","artículo",1,"https://th.bing.com/th/id/R.b9cf233a50c2df541f93e147c87df183?rik=cFWfJIsLJyIlpw&riu=http%3a%2f%2fimage.slidesharecdn.com%2farticulocientifico-120422160125-phpapp02%2f95%2farticulo-cientifico-1-728.jpg%3fcb%3d1335110544&ehk=n%2blnVt8dbNnB%2f5n7LclEgG8n1NmsYj1aglaKzS5TFJQ%3d&risl=&pid=ImgRaw&r=0"),
("Experimento fisico sobre motor a vapor","2018-08-20","2022-11-27","artículo",1,"https://p.calameoassets.com/151029024840-c9578ae72bbc6cab319de2e5bf614007/p1.jpg"),
("Biotecnologia Vegetal","2020-08-20","2022-11-27","artículo",1,"https://www.ecured.cu/images/c/c3/Portada_Revista_Biotecnolog%C3%ADa_Vegetal.jpg");

insert into documentos(titulo,fecha_publicacion,fecha_creacion,tipo,activo,url_img)
values("Retos Digitales","2018-02-16","2022-11-25","ponencia",1,"https://www.ainaralegardon.com/wp-content/uploads/2015/02/Portada-Ponencia-Retos-Digitales.jpg"),
("Empleo y Politica social","2017-05-21","2022-11-27","ponencia",1,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5jDomOQlE33_QMWxEPkbA5F2G0YAxEFkaVpiGsPyK8DPDK9mUX7352NZNi76695XngiM&usqp=CAU"),
("pueblos con Futuro","2017-05-21","2022-11-27","ponencia",1,"data:image/png;base64,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");

insert into documentos(titulo,fecha_publicacion,fecha_creacion,tipo,tema,activo,url_img)
values("El psicoanalista","2002-01-29","2022-11-25","libro","romance",1,"https://tercerafundacion.net/imagenes/portada/P-00064247.jpg"),
("Alicia en el País de las Maravillas","1865-11-25","2022-11-27","libro","infantil",1,"https://panamericana.vteximg.com.br/arquivos/ids/338654-1080-1080/la-aventuras-de-alicia-en-el-pais-de-las-maravillas-9789583059285.jpg?v=637075485277730000"),
("Fahrenheit 451","1953-10-19","2022-11-27","libro","ficcion",1,"https://bibliolibros.files.wordpress.com/2014/11/fahrenheit-451.jpg");

############# insertar registros
insert into registros(fecha_adquisicion,fk_num_identificacion,fk_id_documento,sumaAmbos)
values("2022-11-27",1000217300,1,1000217301),
("2022-11-27",1000217300,5,1000217305),
("2022-11-27",1000217300,9,1000217309),
("2022-11-27",1000217300,10,10002173010);


#####
SELECT * FROM documentos as doc
  inner join usuarios as u
  inner join registros as re
  on u.num_identificacion = re.fk_num_identificacion
  and doc.id_documento=re.fk_id_documento
  WHERE u.email = "yansaid21@gmail.com";
  
  select * from usuarios;
