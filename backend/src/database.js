import mariadb from "mariadb";

// Create the connection to the mariadb
// database and assign a connection limit
const pool = mariadb.createPool({
    host: `${process.env.DB_HOST}`,
    user: `${process.env.DB_USER}`,
    password: `${process.env.DB_PASSWORD}`,
    connectionLimit: 10,
    database: `${process.env.DB_NAME}`
});

// Gets all the rows from the 'school' table
export function getSchools() {
    console.log("Query getSchools");
    return pool.query("select * from school");
}

// Gets all the rows from the 'module' table
export function getModules() {
    console.log("Query getModules");
    return pool.query("select * from module");
}

// Gets all the rows from the 'module' table
// with the given school
export function getModulesFromSchool(school) {
    console.log("Query getModulesFromSchool");
    return pool.query("select * from module where school = ?", [school]);
}