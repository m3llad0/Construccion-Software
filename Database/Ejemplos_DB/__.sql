SET SQL_SAFE_UPDATES = 0;

DELETE FROM sakila.rental;
TRUNCATE TABLE sakila.lengage;

SELECT * from sakila.rental LIMIT 10;

SELECT * FROM sakila.payment LIMIT 10;

DELETE FROM sakila.payment ORDER BY customer_id LIMIT 10000;

UPDATE sakila.payment SET amount = amount * 1.1;

SELECT * FROM  sakila.actor;

UPDATE sakila.actor SET last_name = LOWER('cruz')
WHERE first_name LIKE 'PENELOPE' AND last_name LIKE 'GUINESS';