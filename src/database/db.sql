CREATE DATABASE IF NOT EXISTS library_sql;

USE library_sql;

CREATE TABLE books (
    id_book INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(60) NOT NULL,
    editorial VARCHAR(25) NOT NULL,
    author VARCHAR(25) NOT NULL,
    genre VARCHAR(20) NOT NULL,
    author_country VARCHAR(20) NOT NULL,
    no_pages INT(5) NOT NULL,
    edition_year YEAR NOT NULL,
    price DECIMAL(7,2) NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id_book)
);

DESCRIBE books;

INSERT INTO books (title, editorial, author, genre, author_country, no_pages, edition_year, price)
    VALUES ("Don Quijote de La Mancha I", "Anaya", "Miguel de Cervantes", "Caballeresco", "España", 517, 1991, 2750);

INSERT INTO books (title, editorial, author, genre, author_country, no_pages, edition_year, price)
    VALUES ("Don Quijote de La Mancha II", "Anaya", "Miguel de Cervantes", "Caballeresco", "España", 611, 1991, 3125);

SELECT * FROM books;

CREATE TABLE users (
    id_user INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(15) NOT NULL,
    last_names VARCHAR(25) NOT NULL,
    dni VARCHAR(12) NOT NULL,
    residence VARCHAR(50) NOT NULL,
    town VARCHAR(30) NOT NULL,
    province VARCHAR(20) NOT NULL,
    birthdate DATE,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id_user)
);

DESCRIBE users;

INSERT INTO users (name, last_names, dni, residence, town, province, birthdate)
    VALUES ("Inés", "Posada Gil", "42.117.892-S", "Av. Escaleritas 12", "Las Palmas G.C.", "Las Palmas", "1999-4-4");

CREATE TABLE loans (
    id_loan INT(11) NOT NULL AUTO_INCREMENT,
    id_book INT(11) NOT NULL,
    id_user INT(11) NOT NULL,
    loan_date DATE NOT NULL,
    end_date DATE NOT NULL,
    return_date DATE,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id_loan)
);

DESCRIBE loans;

INSERT INTO loans (id_book, id_user, loan_date, end_date, return_date)
    VALUES (1, 2, "1999-11-1", "1999-11-15", "1999-11-13");

DESCRIBE loans;

SELECT * FROM loans;