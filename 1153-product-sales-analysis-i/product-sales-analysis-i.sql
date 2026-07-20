# Write your MySQL query statement below
SELECT Product.product_name , Sales.year , sales.price FROM Product JOIN Sales ON Product.product_id = Sales.product_id