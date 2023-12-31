import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from "@mui/material"

const schools = ['Arabic', 'Art', 'Biology']

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
    const [value, setValue] = React.useState(0);

    

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container sx={{ mx: "auto", my: 10 }}>
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    {schools.map((school,index) => 
                        <Tab label={school} {...a11yProps({index})} />
                    )}
                    {/* <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(0)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                    <Tab label="Item Four" {...a11yProps(3)} />
                    <Tab label="Item Five" {...a11yProps(4)} />
                    <Tab label="Item Six" {...a11yProps(5)} />
                    <Tab label="Item Seven" {...a11yProps(6)} /> */}
                </Tabs>
                {schools.map((school,index) => 
                    <TabPanel value={value} index={index}>
                        <Typography color="d0d3d4" variant="h4" component="span">{school}</Typography>
                    </TabPanel>
                )}

            </Box>
        </Container>
    );
}

