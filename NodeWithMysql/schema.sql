create table Users (
   id varchar(40) primary key,
   username varchar(40) unique,
   email varchar(50) unique,
   password varchar(50) unique
);

-- C:\xampp\mysql\bin\mysql -u root -p  (this is used for the connect to the sql)

-- and the for run the sql file run command source schema.sql
