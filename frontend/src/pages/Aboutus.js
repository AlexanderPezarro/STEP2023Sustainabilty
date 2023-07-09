import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Container, Grid } from "@mui/material"

export default function () {
    return (
        <div>

            <h1>About us</h1>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 5,
                        width: 800,
                        height: 800,
                    },
                }}
            >
                <Paper elevation={10}>
                    <h3>Contact Form</h3>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 2, width: '50' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Your Name</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                label="Amount"
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Email Address</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                label="Amount"
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Your Name</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                label="Amount"
                            />
                        </FormControl>




                    </Box>
                </Paper>

                <Paper elevation={10}> <Accordion>
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
                    </Accordion></Paper>
            </Box>




            <Container sx={{ mx: "auto", my: 10 }}>
                <Grid sx={{ flexGrow: 1 }} container spacing={3}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                            <Typography color="d0d3d4" variant="h4" component="span">About us</Typography>
                            </Grid>
                        <Grid item xs={6}>
                            <Paper elevation={10} p = {3}>
                                 <Typography color="d0d3d4" variant="h5" component="span">Contact Form</Typography>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 2, width: '50' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <FormControl sx={{ mx: 10 }}>
                                        <InputLabel htmlFor="outlined-adornment-amount">Your Name</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-amount"
                                            label="Amount"
                                        />
                                    </FormControl>
                                    <FormControl sx={{ m: 1 }}>
                                        <InputLabel htmlFor="outlined-adornment-amount">Email Address</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-amount"
                                            label="Amount"
                                        />
                                    </FormControl>
                                    <FormControl sx={{ m: 1 }}>
                                        <InputLabel htmlFor="outlined-adornment-amount">Your Name</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-amount"
                                            label="Amount"
                                        />
                                    </FormControl>
                                </Box>
                            </Paper>
                        </Grid>

                        <Grid item xs={6}>
                        <Paper elevation={10}> <Accordion>
                        <Typography color="d0d3d4" variant="h5" component="span">FAQs</Typography>
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
                            </Accordion></Paper>
                            </Grid>
                            </Grid>
                    </Box>
                </Grid>
            </Container>






        </div>

    )
}