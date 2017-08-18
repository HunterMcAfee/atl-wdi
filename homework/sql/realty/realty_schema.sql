DROP TABLE IF EXISTS Apartments;
DROP TABLE IF EXISTS Offices;
DROP TABLE IF EXISTS Storefronts;

CREATE TABLE Apartments (
    id SERIAL PRIMARY KEY,
    apartment_number INTEGER,
    number_bedrooms INTEGER,
    number_bathrooms INTEGER,
    address TEXT NOT NULL,
    tenant VARCHAR,
    occupied BOOLEAN,
    footage INTEGER,
    price MONEY
);

CREATE TABLE Offices (
    id SERIAL PRIMARY KEY,
    office_number INTEGER,
    footage INTEGER,
    number_floors INTEGER,
    number_cubicles INTEGER,
    number_bathrooms INTEGER,
    address TEXT NOT NULL,
    company_name VARCHAR,
    occupied BOOLEAN,
    price MONEY
);

CREATE TABLE Storefronts (
    id SERIAL PRIMARY KEY,
    address VARCHAR,
    occupied BOOLEAN,
    price MONEY,
    kitchen BOOLEAN DEFAULT FALSE,
    footage INTEGER,
    owner VARCHAR,
    seating BOOLEAN DEFAULT FALSE
);