import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container } from "@mui/material"
import Typography from '@mui/material/Typography';
import { getModuleFromCode } from "../api";

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
    },[module]);

    return (
        <Container sx={{ mx: "auto", my: 10 }}>
            <Typography color="d0d3d4" variant="h4" component="span">{module} - {info.name}</Typography>
            <br></br>
            <Typography color="d0d3d4" variant="h5" component="span">Description</Typography>
            <br></br>
            {info.description}
        </Container>
    )
}