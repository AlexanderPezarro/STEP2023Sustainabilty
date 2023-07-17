import { Outlet } from "react-router-dom";
import Header from "./Header"
import { Box, Grid, Container, IconButton } from '@mui/material';

const Layout = ({ children }) => {
    return (
        <>

            <Header />

                <div className="inside">
                    <main>{children}</main>
                </div>
            <Outlet />
        </>
    )
}

export default Layout;
