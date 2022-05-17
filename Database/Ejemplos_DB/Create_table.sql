#CREATE SCHEMA nuevo;
#USE nuevo;

CREATE TABLE segunda_tabla (
	id_tabla SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) NOT NULL, 
    apellido VARCHAR(45) NOT NULL,
    PRIMARY KEY (actor_id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8; 
