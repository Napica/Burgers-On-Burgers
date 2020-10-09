-- Use the DB wizard_schools_db for all the rest of the script
USE burgers_db;

CREATE TABLE burgers (
  id int AUTO_INCREMENT NOT NULL,
  name VARCHAR (50) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY(id)
);

-- DROP TABLE burgers;

INSERT INTO burgers (name, devoured)
VALUE ("She's a super Leek Burger", true), ("New Bacon-ings Burger", true), ("Rest-in-Peas Burger", false), ("Olive and Let Die Burger",false)