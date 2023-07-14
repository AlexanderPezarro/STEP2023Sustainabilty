import { useState,useEffect } from "react"
import { useParams, Link } from "react-router-dom";
import { Box, Grid, Container, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { getModuleFromSchool } from '../api'



export default function School() {
    const [school, setSchool] = useState("");
    const params = useParams()
    const [modules, setModules] = useState([]);

    useEffect(() => {
        setSchool(params.school);
    },[params]);

    useEffect(() => {
        if (school !== undefined) {
            getModuleFromSchool(school)
            .then(res => {
                if (res.data !== undefined && res.data.length === 0) {
                    setModules(["No modules"]);
                } else {
                    setModules(res.data);
                }
            }).catch(err => {
                console.log(`School.js: ${err}`);
                setModules(["No modules"]);
            })
        }
    },[school]);

    return (
        <Container sx={{ mx: "auto", my: 10 }}>
           <List sx={{ width: '100%', maxWidth: 450, bgcolor: 'background.paper' }}
                            subheader={
                                    <Typography color="d0d3d4" variant="h4" component="span">{school}</Typography>
                            }
                        >
                            {modules.map((module) =>
                                    <ListItem
                                        key={module}
                                        disableGutters
                                    >
                                        { module !== "No modules"
                                        ?   <Link to = {`/${school}/${module.code}`} key = {module.code}> 
                                                <Typography color="d0d3d4" variant="h5" component="span">{`${module.code} - ${module.name}`}</Typography>
                                            </Link>
                                        :  <Typography color="d0d3d4" variant="h5" component="span">{module}</Typography>
                                        }
                                    </ListItem>
                            )}
                        </List>
        </Container>
        
    )
}