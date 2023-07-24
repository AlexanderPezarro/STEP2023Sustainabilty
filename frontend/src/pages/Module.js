import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container } from "@mui/material"
import Typography from '@mui/material/Typography';
import { getModuleFromCode } from "../api";
import Rating from '@mui/material/Rating';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const values = [3, 4, 5]
const comments = ["good", "good2", "good3"]

export default function Module() {
    const [module, setModule] = useState(undefined);
    const params = useParams()
    const [info, setInfo] = useState({
        name: "Art in Europe and Beyond to 1600",
        description: "aaaaaaaaaaaaaaaaaaaaaaaa"
    })

    useEffect(() => {
        setModule(params.module)
    }, [params]);

    useEffect(() => {
        if (module !== undefined) {
            getModuleFromCode(module)
                .then(res => {
                    if (res.data !== undefined && res.data.length === 0) {
                        setInfo({
                            name: "N/A",
                            description: "N/A"
                        });
                    } else {
                        setInfo({
                            name: res.data[0].name,
                            description: "N/A"
                        });
                    }
                }).catch(err => {
                    console.log(`Module.js: ${err}`);
                    setInfo({
                        name: "N/A",
                        description: "N/A"
                    });
                })
        }
    }, [module]);

    return (
        <Container sx={{ mx: "auto", my: 10 }}>
            <Typography color="d0d3d4" variant="h4" component="span">{module} - {info.name}</Typography>
            <br></br>
            <Typography color="d0d3d4" variant="h4" component="span">Ranks</Typography>
            {
                values.map((value, index) => {
                    return (
                        <div>
                            <Typography component="legend">Eco{index}</Typography>
                            <Rating name="read-only" value={value} readOnly />
                        </div>
                    )

                })
            }

            <Typography color="d0d3d4" variant="h4" component="span">Comments</Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

                {
                    comments.map((comment, index) => {
                        return (
                            <div>
                                <Divider />
                                <ListItem alignItems="flex-start">
                                    <ListItemText primary={comment} />

                                </ListItem>
                            </div>
                        )

                    })
                }
            </List>
        </Container>
    )
}