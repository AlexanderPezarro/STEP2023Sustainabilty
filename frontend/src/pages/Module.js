import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container } from "@mui/material"
import Typography from '@mui/material/Typography';

export default function Module() {
    const [module, setModule] = useState("hello")
    const params = useParams()
    const [info, setInfo] = useState({
        name: "Art in Europe and Beyond to 1600",
        description: "aaaaaaaaaaaaaaaaaaaaaaaa"
    })

    useEffect(() => {
        setModule(params.module)
    })

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