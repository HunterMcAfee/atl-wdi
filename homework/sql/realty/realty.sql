1. The average square footage of all offices.
SELECT AVG(footage) FROM Offices

2. The total number of apartments.
SELECT COUNT(id) FROM Apartments;

3. The apartments where there is no tenant
SELECT apartment_number, occupied  FROM Apartments WHERE occupied = false;

4. The names of all of the companies
SELECT company_name FROM Offices;

5. The number of cubicles and bathrooms in the 3rd office
SELECT number_cubicles, number_bathrooms FROM Offices WHERE id = 3;

6. The storefronts that have kitchens
SELECT * FROM Storefronts WHERE kitchen = true;

7. The storefront with the highest square footage and outdoor seating
SELECT * FROM Storefronts ORDER BY footage DESC LIMIT 1;

8. The office with the lowest number of cubicles
SELECT * FROM Offices ORDER BY number_cubicles ASC LIMIT 1;

9. The office with the most cubicles and bathrooms
SELECT * FROM Offices ORDER BY number_cubicles + number_bathrooms DESC LIMIT 1;