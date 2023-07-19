import express from "express";
import cors from "cors";
import { getSchools, getModulesFromSchool, getModulesFromName, getModulesFromCode, getModules, getSurveyQuestions, getSurveyIds, getSurveyCode, insertResult } from "./database.js";

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

routes.post("/api/code", (req, res, next) => {
    if (req.params.code !== undefined && req.params.moduleCode !== undefined) {
        getSurveyCode(req.query.id)
        .then(rows => {
            if (rows.lenth > 0) {
                res.status(200).end();
            } else {
                res.status(401).end();
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
    } else {
        res.status(400).send(err);
    }
});

routes.post("/api/result", (req, res, next) => {
    if (req.params.marticNumber !== undefined &&
        req.params.code !== undefined &&
        req.params.moduleCode !== undefined &&
        req.params.surveyID !== undefined &&
        req.params.questionNumber !== undefined) {
        insertResult(req.params.marticNumber, req.params.code, req.params.moduleCode, req.params.surveyID, req.params.questionNumber,
            req.params.resultNumber === undefined ? null : req.params.resultNumber,
            req.params.resultText === undefined ? null : req.params.resultText)
        .then(_ => {
            res.status(200).end(); 
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
    } else {
        res.status(400).send(err);
    }
});

export default routes;