
import { Box, Grid, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const schools = ['Arabic', 'Art', 'Biology']

export default function Schools() {
    return (
        <Container fixed>

                <Grid sx = {{flexGrow :1 }}container spacing={4}>

                    <Grid item xs={6}>
                        <TextField id="outlined-basic" label="Module Code" variant="outlined" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography color="d0d3d4" variant="h3" component="span">Find by School</Typography>
                        {schools.map((school) =>
                            <div className="item">{school}</div>
                        )}
                    </Grid>
                </Grid>

        </Container >

    )
}