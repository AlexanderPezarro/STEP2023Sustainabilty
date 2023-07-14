
import { Box, Grid, Container, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import { getSchools } from '../api';

// const schools = ['Arabic', 'Art', 'Biology']

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));


export default function Home() {
    const params = useParams()

    const [schools, setSchool] = useState([])

    useEffect(() => {
        getSchools()
        .then(res => {
            setSchool(res.data);
        }).catch(err => {
            console.log(`Home.js: ${err}`);
            setSchool(["No schools"]);
        })
    },[])
    
    return (
        <Container sx={{ mx: "auto", my: 10 }}>

            <Grid sx={{ flexGrow: 1 }} container spacing={2}>

                <Grid item xs={6}>
                    <Item>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <div className="item"><Typography color="d0d3d4" variant="h4" component="span">Search by module code</Typography></div>
                            </Grid>
                            <Grid item xs={6}> <TextField id="outlined-basic" label="Module Code" variant="outlined" /></Grid>
                            <Grid item xs={6}><IconButton><SearchIcon fontSize='large' /></IconButton></Grid>

                            <Grid item xs={12}>
                                <div className="item"><Typography color="d0d3d4" variant="h4" component="span">Search by module name</Typography></div>
                            </Grid>
                            <Grid item xs={6}> <TextField id="outlined-basic" label="Module Name" variant="outlined" /></Grid>
                            <Grid item xs={6}><IconButton><SearchIcon fontSize='large' /></IconButton></Grid>

                        </Grid>

                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                            subheader={
                                    <Typography color="d0d3d4" variant="h4" component="span">Find by School</Typography>
                            }
                        >
                            {schools.map((school) =>
                                    <ListItem
                                        key={school.name}
                                        disableGutters
                                    >
                                        <Link to = {`/${school.name}`} key = {school.name}>
                                        <Typography color="d0d3d4" variant="h5" component="span">{school.name}</Typography>
                                        </Link>
                                    </ListItem>
                            )}
                        </List>
                    </Item>
                </Grid>
            </Grid>

        </Container >

    )
}