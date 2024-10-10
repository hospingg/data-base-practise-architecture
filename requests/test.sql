-- Створення таблиці для Ліків
CREATE TABLE medicines (
    id SERIAL PRIMARY KEY,
    active_ingredient VARCHAR(255) NOT NULL,
    dosage DECIMAL(5, 2) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT NOT NULL
);

-- Створення таблиці для Аптек
CREATE TABLE pharmacies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    adress VARCHAR(400) NOT NULL
);

-- Створення таблиці для Користувачів
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

DELETE FROM medicines;


-- Створення таблиці для Замовлень
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    pharmacy_id INT NOT NULL,
    order_date DATE NOT NULL DEFAULT CURRENT_DATE,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (pharmacy_id) REFERENCES Pharmacies(id)
);


INSERT INTO orders (user_id, pharmacy_id)
VALUES (10, 12);

-- Створення таблиці для продажу Ліків в Аптеках
CREATE TABLE pharmacy_medicines (
    pharmacy_id INT NOT NULL,
    medicine_id INT NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (pharmacy_id, medicine_id),
    FOREIGN KEY (pharmacy_id) REFERENCES pharmacies(id),
    FOREIGN KEY (medicine_id) REFERENCES medicines(id)
);

INSERT INTO pharmacy_medicines (pharmacy_id, medicine_id, stock_quantity)
VALUES (12, 68, 180);


-- Створення таблиці для Позицій Замовлення
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INT NOT NULL,
    pharmacy_id INT NOT NULL,
    medicine_id INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (pharmacy_id, medicine_id) REFERENCES pharmacy_medicines(pharmacy_id, medicine_id)
);

INSERT INTO order_items (order_id, pharmacy_id, medicine_id, quantity, price_at_purchase)
VALUES (2, 12, 68, 3, 19.99);

DROP TABLE Medicines


