create table admin(
id serial primary key,
username varchar(25),
password varchar(250)
);

create table messages (
id serial primary key,
name varchar(50),
email varchar(100),
phone varchar(12), 
message varchar(250)
);

create table cats (
id serial primary key,
breed varchar(50),
name varchar(50),
animal_age varchar(2),
location_id int references location(location_id),
gender varchar(10),
houseTrained varchar(10),
health text,
preference text,
bio text,
imageUrl text 
);

create table dogs (
id serial primary key,
breed varchar(50),
name varchar(50),
animal_age varchar(2),
location_id int references location(location_id),
gender varchar(10),
houseTrained varchar(10),
health text,
preference text,
bio text,
imageUrl text 
);


create table location (
location_id serial primary key,
city varchar(50),
state varchar(30),
address varchar(50)
);