CREATE TABLE users (
    id int not null primary key auto_increment,
    email varchar(50) not null unique,
    password varchar(100) not null
);