import { Container } from "@mui/material";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { getModuleFromCode, getSurveyQuestions, postResults } from "../api";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";


const steps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ariaLabel = { 'aria-label': 'description' };

const Form = (props) => {

    console.log(props)
    switch (props.type) {
        case 1:
            return (
                <OutlinedInput value={props.answer.answer} fullWidth onChange={e => props.updateAnswer(props.answer.question, e.target.value)} />
            )
        case 2:
            return (
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={(e => props.updateAnswer(props.answer.question, e.target.value))}
                        value={props.answer.answer}
                    >
                        {
                            steps.map((step) => <FormControlLabel value={step} control={<Radio />} label={step} labelPlacement="top" />)
                        }
                    </RadioGroup>
                </FormControl>
            )
        default:
            break;
    }
}


export default function Survey() {
    const [matricNum, setMatricNum] = useState("")
    const [questions, setQuestions] = useState(['What is your matriculation number?']);
    const [types, setTypes] = useState([1])
    const [module, setModule] = useState("")
    const [course, setCourse] = useState("")
    const [surveyID, setSurveyID] = useState(1)
    const params = useParams()
    const [answers, setAnswers] = useState([
        { question: 'What is your matriculation number?', answer: "" },
    ]);
    const [errors, setError] = useState([])
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    React.useEffect(() => {
        setModule(params.module)
    }, [params])

    React.useEffect(() => {
        getModuleFromCode(params.module).then(res => {
            console.log(res.data)
            setCourse(res.data[0].name)
            setSurveyID(res.data[0].surveyID)
            return res.data[0].surveyID
        }).then(res => {
            getSurveyQuestions(res).then(res => {
                if (res.data !== undefined && res.data.length === 0) {
                    setQuestions(["No questions"]);
                } else {
                    res.data.map((data) => {
                        setTypes((prevState) => [...prevState, data.type])
                    })
                    setQuestions(res.data)
                    console.log("Response", res.data)
                }
            }).catch(err => {
                console.log(`Questions.js: ${err}`);
                setQuestions(["No questions"]);
            })
        })



    }, [module])

    const updateAnswer = (question, answer) => {
        if (question == 'What is your matriculation number?') setMatricNum(answer)
        setAnswers((prevState) =>
            prevState.map((obj) => (obj.question === question ? { question: obj.question, answer: answer } : obj)))
    };

    const addAnswer = (question, answer) => {
        if (question == 'What is your matriculation number?') setMatricNum(answer)
        console.log(question, answer)
        setAnswers((prevState) => [...prevState, { question: question, answer: answer }]);

    }

    const addType = (type) => {
        setTypes((prevState) => [...prevState, type]);

    }

    React.useEffect(() => {
        setAnswers([{ question: 'What is your matriculation number?', answer: "" }])
        setTypes([1])
        questions.map((question) => {
            addAnswer(question.question, "")
            addType(question.type)
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
        setError([])
        var list = []
        answers.forEach((answer, index) => {
            if (types[index]=== 2) {
                if (answer.answer.length === 0) {
                    setError((prevState) => [...prevState, `Q${index + 1} is not Filled!`])
                    return
                }
            }

            if (answer.question === 'What is your matriculation number?') {
                if (answer.answer.length !== 9 || isNaN(answer.answer)) {
                    setError((prevState) => [...prevState, 'Matriculation number is should be 9 numbers.'])
                    return
                }
            }
            list.push(answer.answer)


        })

            postResults(module, surveyID, list)
            .then((res) => {
                window.alert("Sunmitted succesfully")
                navigate(`/${params.school}/${params.module}`)
            })
            .catch(err => {
                console.log(err)
                window.alert("Data was not sent")
                setSubmitted(false)
            })
    }









    return (
        <Container sx={{ mx: "auto", my: 10 }}>

                <Grid container spacing={3}>

                    <Grid item xs={12}>
                        <Typography color="d0d3d4" variant="h3" component="span">Survey - {module} {course} -</Typography>
                    </Grid >
                    <Grid item xs={12}>
                        <ErrorMessage />
                    </Grid>
                    {
                        answers.map((answer, index) => {
                            return (
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography color="d0d3d4" component="span">
                                                Q{index + 1}. {answer.question}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Form type={types[index]} answer={answer} updateAnswer={updateAnswer} />

                                        </Grid>
                                    </Grid>
                                </Grid>)
                        })
                    }

                    <Grid item xs={12}>
                        <Button variant="contained" onClick={hadleSubmit} sx={{ bgcolor: "#90EE90" }}>Submit</Button>
                    </Grid>
                </Grid >
            
        </Container >
    )
}

