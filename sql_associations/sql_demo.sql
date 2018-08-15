-- SQL: ASSOCIATIONS

-- Demo: Student Projects
-- Find all projects owned by student with id = 2

-- SELECT * FROM projects WHERE student_id = 2;

-- Exercise: Course Scores

-- SELECT course_id, score
--   FROM enrolments
--   WHERE course_id = 1;

-- JOINS

-- CROSS JOIN

-- Demo: Students with Projects

-- SELECT * FROM students CROSS JOIN projects;

-- INNER JOIN

-- Demo: First Join

-- SELECT
--     -- When selecting columns for a JOIN, be more
--     -- specific by prefixing the columns names
--     -- the table name <table_name>.<column_name>.
--     -- Otherwise, SQL will not know which column
--     -- you're referring to if the joined tables
--     -- have columns of the same name.
--     students.id,
--     students.first_name,
--     projects.id AS project_id,
--     projects.title AS project_title
--   FROM students
--   INNER JOIN projects
--     ON students.id = projects.student_id
--   ORDER BY students.first_name;

-- Multiple Table Joins

-- Demo: Students from Courses

-- SELECT
--     courses.title,
--     students.first_name,
--     students.last_name
--   FROM courses
--   INNER JOIN enrolments ON courses.id = enrolments.course_id
--   INNER JOIN students ON enrolments.student_id = students.id
--   WHERE courses.title ILIKE '%hybrid matrix%';

-- Exercise: Classes with Jo*
-- Find all courses that have at least a one
-- student whose name begins with 
-- 'Jo'. Show the course title, student names
-- and their scores.

-- SELECT
--     courses.title AS course_title,
--     students.first_name,
--     students.last_name,
--     enrolments.score
--   FROM enrolments
--   INNER JOIN students ON enrolments.student_id = students.id
--   INNER JOIN courses ON enrolments.course_id = courses.id
--   WHERE students.first_name ILIKE 'Jo%'
--   ORDER BY courses.title;

-- FULL OUTER JOIN, LEFT JOIN and RIGHT JOIN

-- Demo: Students and Projects

-- SELECT
--     first_name,
--     last_name,
--     projects.title AS project_title
--   FROM students
--   LEFT JOIN projects ON students.id = projects.student_id
--   ORDER BY first_name;

-- Demo: Without Project

-- SELECT
--     first_name,
--     last_name,
--     projects.title AS project_title
--   FROM students
--   LEFT JOIN projects ON students.id = projects.student_id
--   WHERE projects.id IS NULL
--   ORDER BY first_name;

-- Exercise: Avg. Score of Courses

-- SELECT
--    courses.title,
--    ROUND(AVG(enrolments.score), 2) AS score_average
--  FROM courses
--  INNER JOIN enrolments ON courses.id = enrolments.course_id
--  GROUP BY courses.id
--  ORDER BY score_average DESC;

-- Exercise: Last Registered

-- SELECT
--     courses.title AS course_title,
--     MAX(students.registration_date) AS last_registration_date
--   FROM courses
--   INNER JOIN enrolments ON course_id = courses.id
--   INNER JOIN students ON student_id = students.id
--   GROUP BY courses.id
--   ORDER BY last_registration_date DESC;

-- SUB-QUERIES

-- Demo: No. of Enrolled Students

-- SELECT *
--   FROM (
--     SELECT
--         courses.title,
--         COUNT(*) AS student_count
--       FROM courses
--       INNER JOIN enrolments ON course_id = courses.id
--       GROUP BY courses.id
--       ORDER BY student_count DESC
--   ) AS courses_with_counts
--   WHERE student_count >= 10;


-- Exercises: Failing Classes

-- SELECT * FROM (
--     SELECT
--         courses.*,
--         AVG(enrolments.score) AS score_average,
--         COUNT(*) AS student_count
--       FROM courses
--       INNER JOIN enrolments ON course_id = courses.id
--       GROUP BY courses.id
--   ) AS courses_with_stats
--   WHERE score_average < 60
--   ORDER BY score_average DESC;