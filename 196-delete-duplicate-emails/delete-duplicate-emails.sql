# Write your MySQL query statement below
DELETE P
FROM Person P
JOIN Person D
ON P.email = D.email
WHERE P.id > D.id