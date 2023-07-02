import { Outlet } from "react-router-dom";
import Header from "./Header"

const Layout  = ({ children }) => {
    return (
        <>
            <Header />
            <div className="inside">
                <main>{children}</main>
            </div>
            <Outlet/>
        </>
    )
}

export default Layout;
