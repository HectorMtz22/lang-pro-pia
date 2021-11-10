CREATE TABLE provincia(
codprov NUMBER(2) PRIMARY KEY,
nomprov CHAR(20) UNIQUE NOT NULL);

CREATE TABLE alumno(
num NUMBER(4),
nombre CHAR(10) NOT NULL,
apellidos CHAR(20) NOT NULL,
edad NUMBER(2) CHECK (edad>16),
codprov NUMBER(2),
nota NUMBER(4,2) CHECK (nota >=0 AND nota <= 10),
PRIMARY KEY (num),
FOREIGN KEY (codprov) REFERENCES provincia);
