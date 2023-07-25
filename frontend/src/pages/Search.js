import { useEffect, useState } from "react"
import { useSearchParams, Link } from "react-router-dom"
import { getModuleFromCode, getModuleFromName } from "../api";
import { Grid, Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

export default function Search() {
    const [type, setType] = useState(undefined);
    const [value, setValue] = useState(undefined);
    const [modules, setModules] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        setType(searchParams.get("type"));
        setValue(searchParams.get("value"))
    }, [searchParams]);

    useEffect(() => {
        if (type !== undefined) {
            if (type === "code") {
                getModuleFromCode(value)
                .then(res => {
                    if (res.data !== undefined && res.data.length === 0) {
                        setModules(["No modules"]);
                    } else {
                        setModules(res.data);
                    }
                }).catch(err => {
                    console.log(`Module.js: ${err}`);
                })
            } else if(type === "name") {
                getModuleFromName(value)
                .then(res => {
                    if (res.data !== undefined && res.data.length === 0) {
                        setModules(["No modules"]);
                    } else {
                        setModules(res.data);
                    }
                }).catch(err => {
                    console.log(`Module.js: ${err}`);
                })
            }
            
        }
    }, [type]);

    return (
        <Container sx={{ mx: "auto", my: 10 }}>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={6}>
                    <Item>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                            subheader={
                                    <Typography color="d0d3d4" variant="h4" component="span">Search results</Typography>
                            }
                        >
                            {modules.map((module) =>
                                    <ListItem
                                        key={module}
                                        disableGutters
                                    >
                                        { module !== "No modules"
                                        ?   <Link to = {`/${module.school}/${module.code}`} key = {module.code}> 
                                                <Typography color="d0d3d4" variant="h5" component="span">{`${module.code} - ${module.name}`}</Typography>
                                            </Link>
                                        :  <Typography color="d0d3d4" variant="h5" component="span">{module}</Typography>
                                        }
                                    </ListItem>
                            )}
                        </List>
                    </Item>
                </Grid>
            </Grid>
        </Container>
    )
}