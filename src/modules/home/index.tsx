import {Component} from "@common/types";
import {lazy} from "react";
import {Typography} from "@mui/material";
import {Outlet, Route, Routes} from "react-router-dom";
import {withLazyNess} from "@common/layout";

const LazyCounterModule = lazy(() => import('@modules/home/counter'))

export const HomeModule: Component = () => {

    return (
        <div>
            <Typography variant='h2'>Home module</Typography>
            <Routes>
                <Route path='counter' element={<LazyCounterModule/>}/>
            </Routes>
            <Outlet/>
        </div>
    )
}

export default withLazyNess(HomeModule);