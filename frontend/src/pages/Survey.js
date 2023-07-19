import { Container } from "@mui/material";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { getModuleFromCode, getSurveyQuestions } from "../api";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';


const steps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ariaLabel = { 'aria-label': 'description' };




export default function Survey() {

    const [questions, setQuestions] = useState(['What is your matriculation number?']);
    const [module, setModule] = useState("")
    const [course, setCourse] = useState("")
    const params = useParams()
    const [answers, setAnswers] = useState([
        { question: 'What is your matriculation number?', answer: "" },
    ]);
    const [errors, setError] = useState([])

    React.useEffect(() => {
        setModule(params.module)
    }, [params])

    React.useEffect(() => {
        getSurveyQuestions(1).then(res => {
            if (res.data !== undefined && res.data.length === 0) {
                setQuestions(["No questions"]);
            } else {
                setQuestions(res.data);
                console.log("Response", res.data)
            }
        }).catch(err => {
            console.log(`Questions.js: ${err}`);
            setQuestions(["No questions"]);
        })

        getModuleFromCode(params.module).then(res => {
            console.log(res.data)
            setCourse(res.data[0].name)
        })
    }, [module])

    const updateAnswer = (question, answer) => {
        setAnswers((prevState) =>
            prevState.map((obj) => (obj.question === question ? { question: obj.question, answer: answer } : obj)))
    };

    const addAnswer = (question, answer) => {
        console.log(question, answer)
        setAnswers((prevState) => [...prevState, { question: question, answer: answer }]);
    }

    React.useEffect(() => {
        setAnswers([{ question: 'What is your matriculation number?', answer: "" }])
        questions.map((question) => {
            addAnswer(question.question, "")
        })
    }, [questions])

    const ErrorMessage = () => {
        return (
            <div>
                <Grid container spacing={1}>
                    {errors.length > 0 ? (
                        errors.map((error) =>
                            <Grid item xs={12}><Alert severity="error">{error}</Alert></Grid>)
                    ) : (<></>)}
                </Grid>
            </div>

        )
    }

    const hadleSubmit = () => {
        async function checkError() {
            setError([])
            await answers.map((answer,index) => {
                if (answer.answer.length === 0) {
                    setError((prevState) => [...prevState, `Q${index+1} is not Filled!`])
                    return
                }
                if (answer.question === 'What is your matriculation number?') {
                    if (answer.answer.length !== 9 || isNaN(answer.answer)) {
                        setError((prevState) => [...prevState, 'Matriculation number is should be 9 numbers.'])
                        return
                    }
                }
            })

        }




        checkError();
        console.log(answers)
        

    }

    return (
        <Container sx={{ mx: "auto", my: 10 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography color="d0d3d4" variant="h3" component="span">Survey - {module} {course} -</Typography>
                </Grid>
                <Grid item xs={12}>
                    <ErrorMessage />
                </Grid>
                {answers.map((answer, index) => {
                    return (
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography color="d0d3d4"  component="span">
                                        Q{index + 1}. {answer.question}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    {index % 2 == 0 ? (<OutlinedInput fullWidth onChange={e => updateAnswer(answer.question, e.target.value)} />) : (
                                        <FormControl>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                                onChange={(e => updateAnswer(answer.question, e.target.value))}
                                            >
                                                {
                                                    steps.map((step) => <FormControlLabel value={step} control={<Radio />} label={step} labelPlacement="top" />)
                                                }
                                            </RadioGroup>
                                        </FormControl>

                                    )}
                                </Grid>
                            </Grid>
                        </Grid>)
                })}

                <Grid item xs={12}>
                    <Button variant="contained" onClick={hadleSubmit}>Submit</Button>
                </Grid>
            </Grid>



        </Container>
    )
}

