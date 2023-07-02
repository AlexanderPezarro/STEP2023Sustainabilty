
import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

const schools = ['Arabic', 'Art', 'Biology']

export default function Schools() {
    return (
        <Box
            sx={{
                flexGrow: 1,
                p: 3,
                mx: 20,
                my: 10,
                boxShadow: 1
            }}
        >
            <div className="account-setting">
                <Typography color="d0d3d4" variant="h3" component="span">Find by School</Typography>
                {schools.map((school) =>
                    <div className="item">{school}</div>
                )}
            </div>
        </Box>

    )
}