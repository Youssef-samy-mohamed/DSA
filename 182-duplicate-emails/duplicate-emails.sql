# Write your MySQL query statement below
SELECT P.email AS Email
FROM Person P 
GROUP BY email
HAVING COUNT(*) > 1