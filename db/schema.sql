DROP DATABASE IF EXISTS s6xu95aimln1hriq;
CREATE DATABASE s6xu95aimln1hriq;
USE s6xu95aimln1hriq;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(80) NOT NULL,
    devoured BOOLEAN NOT NULL,
    date TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);