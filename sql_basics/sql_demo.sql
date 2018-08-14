-- CREATING A TABLE

/*
  This is a multi-line comment.
*/

-- CREATE TABLE cars (
--   id BIGSERIAL,
--   /*
--     [BIG]SERIAL is a special data type unique PostgreSQL. It
--     creates an integer that auto-increments. When inserting
--     a new row, we'll not specify this column ourselves.
--     We call this `id` the PRIMARY KEY. It acts as a unique
--     identifier for rows.
--   */
--   make VARCHAR(50),
--   /*
--     The VARCHAR(<char-max>) is a string type with specifiable
--     maximum number of characters, <char-max>.
--   */
--   model VARCHAR(255),
--   doors INTEGER,
--   /*
--     The INTEGER is a number type that can't have decimal values.
--     However, it can be negative.
--   */
--   description TEXT
--   /*
--     The TEXT type is a string that can be of any length.
--   */
-- );
/*
  ALWAYS terminate SQL queries with a `;`. This is NON-NEGOTIABLE.
  If you forget it, SQL will think that you're still writing a query.
*/

/*
  To run this or any other sql files, do the following:

  `psql -d <db-name> <path-to-sql-script>`

  From a the `psql` REPL:

  `\i <path-to-sql-script>`
*/

-- DELETE A TABLE

-- DROP TABLE cars;

-- ALTERING A TABLE

-- ALTER TABLE "cars"
--   ADD COLUMN "drive_system" VARCHAR(255);
-- ALTER TABLE "cars"
--   RENAME COLUMN "drive_system" TO "drive";

-- https://www.postgresql.org/docs/10/static/sql-altertable.html

-- CRUD OPERATIONS

-- CREATING ROWS (OR INSERTING ROWS)

-- INSERT INTO students
--   (first_name, last_name, email, phone_number)
--   VALUES
--   ('Jon', 'Snow', 'js@winterfell.gov', '778.994.8776');

-- INSERT INTO students
--   (first_name, last_name, email, phone_number)
--   VALUES
--   ('Cersei', 'Baratheon', 'cersei@kingslanding.com', '778.994.9999')
--   RETURNING *;

-- READING DATA

-- SELECT * FROM students;
-- This will get all rows from the students displaying all columns.

-- SELECT id, first_name FROM students;
-- This will get all rows from the students displaying only
-- the id and first_name columns.

-- USE WHERE TO FILTER SELECTED DATA

-- SELECT * FROM students
--   WHERE id = 1;
-- This will get the student from students that has an id of 1.

-- Demo: Select all students whose ids are more than 100

-- SELECT id, first_name
--   FROM students
--   WHERE id > 100;

-- Execise: Select all students whose ages are more than 40

-- SELECT id, first_name, age
--   FROM students
--   WHERE age > 40;

-- Exercise: Select all students that have registered in the last
-- 115 days

-- SELECT id, first_name, registration_date
--   FROM students
--   WHERE registration_date > CURRENT_DATE - interval '115' day;

-- SELECT id, first_name, registration_date
--   FROM students
--   WHERE registration_date > NOW() - interval '115 days';

-- Demo: Select all students whose ids are more than 100
-- and less than 200

-- SELECT id, first_name
--   FROM students
--   WHERE id > 100 AND id < 200;

-- Exercise: Select all students whose ages are more
-- than 40 or less than 20

-- SELECT id, first_name, age
--   FROM students
--   WHERE age > 40 OR age < 20;

-- Demo: Select all students whose `registration_date`
-- is NULL

-- SELECT id, first_name, registration_date
--   FROM students
--   WHERE registration_date IS NULL;

-- SELECT id, first_name, registration_date
--   FROM students
--   WHERE registration_date IS NOT NULL;

-- Exercise: Find all students whose first_name begins
-- with 'Jo'

-- SELECT id, first_name
--   FROM students
--   WHERE first_name LIKE 'Jo%';
-- When using LIKE (or ILIKE), you must specify
-- a % character in the search string to indicate
-- which part of the seached strings can be ignored.

-- Exercise: Select all students whose first_name or
-- last_name contains 'nn'

-- SELECT id, first_name, last_name
--   FROM students
--   WHERE first_name ILIKE '%nn%' OR last_name ILIKE '%nn%';

-- Demo: Select all students that have registered between
-- 120 days ago and 115 days ago

-- SELECT id, first_name, registration_date
--   FROM students
--   WHERE registration_date
--     BETWEEN NOW() - INTERVAL '120 days'
--     AND NOW() - INTERVAL '115 days';

-- The above BETWEEN can rewritten like the WHERE below:
--   WHERE registration_date >= NOW() - INTERVAL '120 days'
--     AND registration_date <= NOW() - INTERVAL '115 days';

-- Demo: Find students whose first_name begin with 'j'
-- and order by their age then last_name

-- SELECT id, first_name, last_name, age
--   FROM students
--   WHERE first_name ILIKE 'j%'
--   ORDER BY age DESC, last_name ASC;

-- Demo: Select the first 5 students whose
-- first_name begin with 'ke'

-- SELECT id, first_name
--   FROM students
--   WHERE first_name ILIKE 'ke%'
--   LIMIT 5;

-- Demo: Select the second set of the first 10 students

-- SELECT id, first_name
--   FROM students
--   LIMIT 10
--   OFFSET 20;

-- AGGREGATE FUNCTIONS

-- These feature allows to do calculation on data
-- we get from queries. This usually combining
-- data in a smaller subset of data.

-- COUNT

-- Demo: Get the number of students in the database

-- SELECT COUNT(*) FROM students;

-- Exercise: Get the number of students who are more than 25 years of age

-- SELECT COUNT(*)
--   FROM students
--   WHERE age > 25;

-- AS

-- SELECT COUNT(*) AS student_count
--  FROM students
--  WHERE age > 25;

-- Exercise: Find out the total years life experience
-- of all the students

-- Exercise: Find the average age of students

-- Exercise: Round the student average to 2 decimal places

-- Demo: Find the oldest student's age the youngest
-- student's age

SELECT
    COUNT(*) AS student_count,
    SUM(age) AS total_years,
    ROUND(AVG(age), 2) AS average_age,
    MIN(age) AS youngest_students_age,
    MAX(age) AS oldest_students_age
  FROM students;

-- GROUP BY

-- Demo: Find the number of occurences of first_name
-- in the database

-- SELECT COUNT(*) AS occurences, first_name
--   FROM students
--   GROUP BY first_name
--   ORDER BY occurences DESC;

-- When using GROUP BY, the only column that is
-- allowed SELECT is the one that is being
-- grouped by. All other columns can only be displayed
-- if they are aggregate with an aggregate function.

-- For a list of aggregate functions, go to:
-- https://www.postgresql.org/docs/10/static/functions-aggregate.html

-- UPDATE A ROW

-- UPDATE students
--   SET first_name = 'Something Else'
--   WHERE id = 1
--   RETURNING *;

-- DELETE

-- DELETE FROM students WHERE id = 502 RETURNING *;