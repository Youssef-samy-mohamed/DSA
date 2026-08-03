# Write your MySQL query statement below
-- انا عايز اسم اي حد معملش اوردر وهعرف ده من خلال ان ف جدول الاوردر ان customerId مش موجود 
SELECT Customers.name AS Customers
FROM Customers
LEFT JOIN Orders
ON Customers.id = Orders.customerId
WHERE Orders.customerId IS NULL;