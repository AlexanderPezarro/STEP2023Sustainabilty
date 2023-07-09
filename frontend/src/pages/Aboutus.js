import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Grid} from "@mui/material"
import TextField from '@mui/material/TextField';

export default function () {
    return (
        <div>

            <h1>About us</h1>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        mx: "auto",
                        
                    },
                }}
            >
                <Grid elevation={10}>
                    <h3>Contact Form</h3>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { mx: "auto", my: '50' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        
                        <FormControl fullWidth sx={{ mx: "auto", my:1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Your Name</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                label="Amount"
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ mx: "auto", my:1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Email Address</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                label="Amount"
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ mx: "auto", my:1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Your Name</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                label="Amount"
                            />
                        </FormControl>
                        <TextField
                            fullWidth sx={{mx:"auto", my:1}}
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            rows={8}
                            placeholder="Message"
                        />




                    </Box>
                </Grid>

                <Grid elevation={10}> <Accordion>
                    <h3>FAQs</h3>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>People</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <ul>Alexander</ul>
                            <ul>Yui</ul>
                            <ul>Juho</ul>
                            <ul>Mark</ul>
                            <ul>Jeeshan</ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Why should we rate our modules?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                blalblalbllabllablalblablalblabl
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>How do I add a modules that is not already in your database?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                blalblalbllabllablalblablalblabl
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Will my ratings be anonymous?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                blalblalbllabllablalblablalblabl
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Contact us</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                blalblalbllabllablalblablalblabl
                            </Typography>
                        </AccordionDetails>
                    </Accordion></Grid>
            </Box>










        </div>

    )
}