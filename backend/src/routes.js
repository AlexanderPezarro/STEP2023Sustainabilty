import express from "express";
import cors from "cors";
import { getSchools, getModulesFromSchool, getModulesFromName, getModulesFromCode, getModules, getSurveyQuestions, getSurveyIds, getSurveyCode, insertResult, insertResults, getScoreForModule } from "./database.js";

const routes = express.Router();

routes.use(cors());
routes.use(express.json());

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
    if (req.body.code !== undefined && req.body.moduleCode !== undefined) {
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
    if (req.body.marticNumber !== undefined &&
        req.body.moduleCode !== undefined &&
        req.body.surveyID !== undefined &&
        req.body.questionNumber !== undefined) {
        insertResult(req.body.marticNumber, req.body.moduleCode, req.body.surveyID, req.body.questionNumber,
            req.body.resultNumber === undefined ? null : req.body.resultNumber,
            req.body.resultText === undefined ? null : req.body.resultText)
        .then(_ => {
            res.status(200).end(); 
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
    } else {
        console.log(req.params)
        res.status(400).send(err);
    }
});

routes.post("/api/results", (req, res, next) => {
    if (req.body.moduleCode !== undefined &&
        req.body.surveyID !== undefined &&
        req.body.answers !== undefined) {
        insertResults(req.body.answers.slice(1).map((elem,i) => [req.body.answers[0], req.body.moduleCode, req.body.surveyID, i+1, isNaN(elem) ? undefined : elem, isNaN(elem) ? elem : undefined]))
        .then(_ => {
            res.status(200).end(); 
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
    } else {
        res.status(400).end();
    }
});

routes.get("/api/results", (req, res, next) => {
    if (req.query.moduleCode !== undefined) {
        getScoreForModule(req.query.moduleCode)
        .then(rows => {
            getModulesFromCode(req.query.moduleCode).then(module => {
                const averages = rows.map(row => (
                    row.average
                ))
                const average = averages.reduce((p, c) => p+Number(c), 0) / averages.length;
                res.json({
                    ...rows.reduce((a, row) => ({ ...a, [row["question_num"]]: Number(row["average"])}), {}),
                    id: req.query.moduleCode,
                    module_name: module[0].name,
                    average: average
                })
            }).catch(err => {
                console.log(err);
                res.status(500).send(err);
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
    } else {
        res.status(400).end();
    }
});

export default routes;