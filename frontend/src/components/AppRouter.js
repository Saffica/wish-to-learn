import React from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import {Login} from "./Login";
import PageNotFound from "./PageNotFound";

const AppRouter = () => {
    //авторизован или нет
    const user = false;
    return user ?
        (
            <Routes>
                {privateRoutes.map(({ path, Component }, _) =>
                    <Route key={_} path={path} component={Component} exact={true} />
                )}
                <Route
                    key={0}
                    path="*"
                    element={<PageNotFound />}
                />
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({ path, Component }, _) =>
                    <Route key={_} path={path} component={Component} exact={true} />
                )}
                <Route
                    key={0}
                    path="*"
                    element={<Login />}
                />
            </Routes>
        )
}

export default AppRouter;