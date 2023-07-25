import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { getSchools } from '../api';
import { useEffect, useState } from 'react';
import Table from '../compoments/Table';
import { Box, Grid, Container, IconButton } from '@mui/material';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function LeaderBoard() {
    const [value, setValue] = useState(0);
    const [schools, setSchools] = useState(["art"]);

    useEffect(() => {
        getSchools()
            .then(res => {
                setSchools(res.data);
            }).catch(err => {
                console.log(`Home.js: ${err}`);
                setSchools(["No schools"]);
            })
    }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container sx={{ mx: "auto", my: 10 }}>
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 400 }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    {schools.map((school, index) =>
                        <Tab label={school.name} {...a11yProps({ index })} />
                    )}
                </Tabs>
                {schools.map((school, index) =>
                    <TabPanel value={value} index={index}>
                        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                            <Grid item xs={12}>
                                <Typography color="d0d3d4" variant="h4" component="span">{school.name}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Table school = {school}/>
                            </Grid>
                        </Grid>
                    </TabPanel>
                )}

            </Box>
        </Container>
    );
}

