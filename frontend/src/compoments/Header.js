

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from "react-router-dom";


export default function Header() {
    const navigate = useNavigate()

    return (
        <AppBar position="static" sx={{ bgcolor: "#90EE90" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                   
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        EcoRanks
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                key= 'leaderboard'
                                onClick={(e) => {
                                    console.log("click")
                                    navigate('/leaderboard')
                                }
                                }
                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                LeaderBoard
                            </Button>
                             <Button
                                key= 'aboutus'
                                onClick={(e) => {
                                    console.log("click")
                                    navigate('/aboutus')
                                }
                                }
                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                About Us
                            </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
