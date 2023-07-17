import express from "express";
import cors from "cors";
import { getSchools, getModulesFromSchool, getModulesFromName, getModulesFromCode, getModules, getSurveyQuestions, getSurveyIds } from "./database.js";

const routes = express.Router();

routes.use(cors());

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
    if (req.query.school !== undefined) {
        getModulesFromSchool(req.query.school)
        .then(rows => {
        res.send(rows);
        })
        .catch(err => {
        console.log(err);
        res.status(500).send(err);
        });
    } else if(req.query.name !== undefined) {
        getModulesFromName(req.query.name)
        .then(rows => {
        res.send(rows);
        })
        .catch(err => {
        console.log(err);
        res.status(500).send(err);
        });
    } else if(req.query.code !== undefined) {
        getModulesFromCode(req.query.code)
        .then(rows => {
        res.send(rows);
        })
        .catch(err => {
        console.log(err);
        res.status(500).send(err);
        });
    } else {
        getModules()
        .then(rows => {
        res.send(rows);
        })
        .catch(err => {
        console.log(err);
        res.status(500).send(err);
        });
    }
});

routes.get("/api/survey", (req, res, next) => {
    if (req.query.id !== undefined) {
        getSurveyQuestions(req.query.id)
        .then(rows => {
        res.send(rows);
        })
        .catch(err => {
        console.log(err);
        res.status(500).send(err);
        });
    } else {
        getSurveyIds()
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