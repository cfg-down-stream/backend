CREATE DATABASE downStream;
USE downStream;
CREATE TABLE Users (
id INT PRIMARY KEY AUTO_INCREMENT,
Name VARCHAR(255),
Surname VARCHAR(255),
Username VARCHAR(255) ,
Password VARCHAR (255),
Email VARCHAR (255),
Date_of_birth DATE,
Country VARCHAR (255)
)
;

CREATE TABLE Previous_searches(
User_id INT,
FOREIGN KEY (User_id) REFERENCES Users(id),
Genre VARCHAR (255)
);


CREATE TABLE Favourites (
User_id INT,
FOREIGN KEY (User_id) REFERENCES Users(id),
Title VARCHAR (255),
Title_id VARCHAR (255)
);