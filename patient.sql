CREATE TABLE patient(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(15),
    address TEXT,
    email VARCHAR(255) NOT NULL,
    status ENUM('positive', 'recovered', 'dead') NOT NULL,
    in_date_at DATE,
    out_date_at DATE,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);