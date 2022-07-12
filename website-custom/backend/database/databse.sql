public id: number,
        public model: string,
        public min_price: number,
        public max_price: number,
        public onsale: number,
        public stock_quantity: number,
        public stock_status: number,
        public rating_count: number,
        public average_rating: number,
        public total_sales: number

CREATE DATABASE IF NOT EXISTS vento_motorcycles;
USE vento_motorcycles;

CREATE TABLE motorcycles(
    id  BIGINT AUTO_INCREMENT NOT NULL,
    model VARCHAR(255) NOT NULL,
    min_price DECIMAL(65, 4) NOT NULL,
    max_price DECIMAL(65, 4) NOT NULL,
    onsale TINYINT(3) NOT NULL,
    stock_quantity INT(255) NOT NULL,
    stock_status VARCHAR(100) NOT NULL,
    rating_count BIGINT,
    average_rating DECIMAL(65, 2),
    total_sales BIGINT NOT NULL,
    tax_status VARCHAR(100),
    tax_class VARCHAR(100),
    image VARCHAR(255),
    created_at DATETIME DEFAULT NULL,
    updated_at DATETIME DEFAULT NULL,
    CONSTRAINT pk_motorcycles PRIMARY KEY(id)
)ENGINE=InnoDb;