import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container } from "@mui/material"
import Typography from '@mui/material/Typography';
import { getModuleFromCode, getResults, getRanks, getComments } from "../api";
import Rating from '@mui/material/Rating';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';

const values = [3, 4, 5]
// const comments = ["good", "good2", "good3"]

export default function Module() {
    const [module, setModule] = useState(undefined);
    const params = useParams()
    const [rate, setRate] = useState([])
    const [info, setInfo] = useState({
        name: "Art in Europe and Beyond to 1600",
        description: "aaaaaaaaaaaaaaaaaaaaaaaa"
    })
    const [comments, setComments] = useState([])

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
            const array = []
            getResults(module)
                .then((res) => {
                    for (const [key, value] of Object.entries(res.data)) {
                        array.push([`${key}`, `${value}`]);
                    }
                    console.log(array)
                    return array
                })
                .then((res) => {
                    setRate([])
                    for (let key in array) {
                        console.log(`Key: ${key}`)
                        if (!isNaN(array[key][0])) {
                            setRate((prevState) => [...prevState, { id: key+1, score: array[key][1], rank: `Question ${Number(key)+1}`, des: "" }])
                            // getRanks(res[i][0]).then((rank) => {
                            //     if (rank.data.length > 0) {
                            //         setRate((prevState) => [...prevState, { id: res[i][0], score: res[i][1], rank: rank.data[0].rank_name, des: rank.data[0].description }])
                            //     }
                            // })

                        } else if (array[key][0] === 'average') {

                            setRate((prevState) => [{ id: 0, score: array[key][1], rank: 'Overall', des: 'This is an average of all ranks.' }, ...prevState])

                        }
                    }
                })
                getComments(module)
                .then(res => {
                    setComments(res.data);
                }).catch(err => {
                    console.log(err);
                })
        }
    }, [module]);

    useEffect(() => {
        console.log(rate)
    }, [rate])

    return (
        <Container sx={{ mx: "auto", my: 10 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography color="d0d3d4" variant="h3" component="span">{module} - {info.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography color="d0d3d4" variant="h4" component="span">Ranks</Typography>
                        </Grid>

                        {
                            rate.map((rate, index) => {
                                return (
                                    <Grid item xs={12}>
                                        <Grid container spacing={1}>
                                            <Grid item xs={12}>
                                                <Typography variant="h5" component="legend">{rate.rank}</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography component="legend">{rate.des}</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Rating
                                                    name="read-only" 
                                                    value={rate.score} 
                                                    readOnly 
                                                    size="large" 
                                                    max={10} 
                                                    precision={0.1}
                                                    icon={<EnergySavingsLeafIcon fontSize="inherit" />}
                                                    emptyIcon={<EnergySavingsLeafIcon fontSize="inherit" />}
                                                    sx = {{
                                                        color:"#90EE90"
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                )

                            })
                        }

                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography color="d0d3d4" variant="h4" component="span">Comments</Typography>
                        </Grid>
                        <Grid item xs={12}>
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
                                <Divider />
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}