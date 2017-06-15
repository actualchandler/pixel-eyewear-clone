CREATE TABLE IF NOT EXISTS users (
   user_id SERIAL primary key,
   name varchar(255),
   email varchar(255) UNIQUE,
   password varchar(255)
);

CREATE TABLE IF NOT EXISTS orders (
   order_id SERIAL PRIMARY KEY,
   user_id integer,
   completed boolean
);

CREATE TABLE IF NOT EXISTS products (
   product_id SERIAL PRIMARY KEY,
   name text,
   price integer
);

CREATE TABLE IF NOT EXISTS cart (
   cart_id SERIAL PRIMARY KEY,
   product_id foreign key,
   order_id foreign key,
   qty integer
);

CREATE TABLE IF NOT EXISTS reviews (
   review_id SERIAL PRIMARY KEY,
   name text,
   content text, 
   rating integer
);