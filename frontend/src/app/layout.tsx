import { Outlet, } from "react-router-dom"
import { Suspense } from 'react'
import { Header, Footer } from "../widgets"

export const Layout: React.FunctionComponent = () => {
    return (
        <>
            <Header />
            <main>
                <Suspense fallback={<p>Loading</p>}><Outlet /></Suspense>
            </main>
            <Footer text='© 2023 хочу-учу.рф' />
        </>
    )
}
