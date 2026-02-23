-- Toppings table
CREATE TABLE IF NOT EXISTS toppings (
    t_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL
);

-- Create order table
CREATE TABLE IF NOT EXISTS orders (
    o_id INT AUTO_INCREMENT PRIMARY KEY,
    t_id INT,
    quantity INT NOT NULL,
    notes VARCHAR(3000),
    month INT NOT NULL,
    year INT NOT NULL,
    FOREIGN KEY (t_id) REFERENCES toppings(t_id)
);

-- Initial toppings
INSERT INTO toppings (name, price) VALUES
('plain', 9.99),
('vegan', 11.50),
('chocolate', 12.10),
('cherry', 14.95);

-- Initial orders
-- (t_id, quantity, notes, month, year)
INSERT INTO orders (t_id, quantity, notes, month, year) VALUES 
(1, 2, 'extra sprinkles', 1, 2023),
(2, 1, 'no sprinkles', 2, 2023),
(3, 3, 'extra chocolate', 3, 2023),
(1, 4, 'no sprinkles', 4, 2023),
(2, 5, 'extra sprinkles', 5, 2023),
(3, 6, 'no sprinkles', 6, 2023);
