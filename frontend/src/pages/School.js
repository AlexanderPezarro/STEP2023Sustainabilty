import { useState,useEffect } from "react"
import { useParams, Link } from "react-router-dom";
import { Box, Grid, Container, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';



export default function School() {
    const [school, setSchool] = useState("hello");
    const params = useParams()
    const [modules, setModules] = useState(['AA1000','AA1001','AA1002'])

    useEffect(() => {
        setSchool(params.school)
    },[params])

    return (
        <Container sx={{ mx: "auto", my: 10 }}>
           <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                            subheader={
                                    <Typography color="d0d3d4" variant="h4" component="span">{school}</Typography>
                            }
                        >
                            {modules.map((module) =>
                                    <ListItem
                                        key={module}
                                        disableGutters
                                    >
                                        <Link to = {`/${school}/${module}`} key = {module}>
                                        <Typography color="d0d3d4" variant="h5" component="span">{module}</Typography>
                                        </Link>
                                    </ListItem>
                            )}
                        </List>
        </Container>
        
    )
}