# Write your MySQL query statement below
-- am going to use left join to fill the non exist unique id users with null 

SELECT Employees.name , EmployeeUNI.unique_id FROM Employees  LEFT JOIN EmployeeUNI  ON Employees.id = EmployeeUNI.id