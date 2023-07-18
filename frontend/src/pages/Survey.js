import { Container } from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { getSurveyQuestions } from "../api";
import { useState } from "react";
import { useParams } from "react-router-dom";


const steps = ['Verification', 'Answer question', 'Check Answers'];
const ariaLabel = { 'aria-label': 'description' };



export default function Survey() {

    const [questions, setQuestions] = useState(['What is your matriculation number?']);
    const [module, setModule] = useState("CS1002")
    const params = useParams()
    const [answers, setAnswers] = useState([
        { question: 'What is your matriculation number?', answer: "" },
    ]);

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
        
        questions.map((question) => {
            addAnswer(question.question, "")
        })
    }, [questions])

    const hadleSubmit = () => {
        console.log(answers)
    }

    return (
        <Container sx={{ mx: "auto", my: 10 }}>
            <Typography color="d0d3d4" variant="h3" component="span">Survey -{module}-</Typography>
            <br></br>

            {questions.map((question, index) => {
                return (<div>
                    <Typography color="d0d3d4" variant="h4" component="span">
                        Q{index + 1}. {question.question}
                    </Typography>
                    <br></br>
                    <FormControl>
                        <OutlinedInput fullWidth onChange={e => updateAnswer(question.question, e.target.value)} />
                    </FormControl>
                </div>)
            })}

            <Button variant="contained" onClick={hadleSubmit}>Submit</Button>



        </Container>
    )
}

