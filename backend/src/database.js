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

// Getting a module using its name
export function getModulesFromName(name) {
    console.log("Query getModulesFromName");
    return pool.query("select * from module where name like ?", [name]);
}

// Getting a module using its code
export function getModulesFromCode(code) {
    console.log("Query getModulesFromCode");
    return pool.query("select * from module where code = ?", [code]);
}

// Getting all the questions from a survey
export function getSurveyQuestions(id) {
    console.log("Query getSurveyQuestions");
    return pool.query("select * from survey where id = ? order by number", [id]);
}

// Getting all the questions from a survey
export function getSurveyIds() {
    console.log("Query getSurveyIds");
    return pool.query("select id from survey");
}

// Gets evey code with the given code and module_code
export function getSurveyCode(code, moduleCode) {
    console.log("Query getSurveyCode");
    return pool.query("select code from code where code = ? and module_code = ?", [code, moduleCode]);
}

export function insertResult(marticNumber, moduleCode, surveyID, questionNumber, resultNumber, resultText) {
    console.log("Query insertResult");
    return pool.query("insert result values(?, ?, ?, ?, ?, ?, ?)", [marticNumber, moduleCode, code, surveyID, questionNumber, resultNumber, resultText]);
}