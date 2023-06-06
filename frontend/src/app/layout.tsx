import { Outlet } from "react-router-dom"
import { Header, Footer } from "../widgets"

export const Layout: React.FunctionComponent = () => {
    return (
        <>
            <Header />
            {/* <main>
                <Outlet />
            </main> */}
            <Footer text='© 2023 хочу-учу.рф' />
        </>
    )
}
