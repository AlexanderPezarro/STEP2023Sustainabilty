import express from "express";

const routes = express.Router();

routes.get("/api/school", (req, res, next) => {
    getSchools()
    .then(rows => {
        res.send(rows);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send(err);
    });
});

routes.get("/api/module", (req, res, next) => {
    if (req.query.school === undefined) {
        getModules()
        .then(rows => {
        res.send(rows);
        })
        .catch(err => {
        console.log(err);
        res.status(500).send(err);
        });
    } else {
        getModulesFromSchool(req.query.school)
        .then(rows => {
        res.send(rows);
        })
        .catch(err => {
        console.log(err);
        res.status(500).send(err);
        });
    }
});

export default routes;