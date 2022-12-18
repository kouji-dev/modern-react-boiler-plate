import {Routes} from "@common/types";
import {lazy} from "react";
import { Main} from "@common/layout";
import {createHashRouter} from "react-router-dom";
import {_404} from "@common/page-utils";

const LazyAuthModule = lazy(() => import('@modules/auth'))
const LazyHomeModule = lazy(() => import('@modules/home'));

export const ROUTES: Routes = [
    {
        path: 'home/*',
        element: <LazyHomeModule/>,
    },
]

export const router = createHashRouter([
    {
        path: '/',
        element: <Main/>,
        children: ROUTES
    },
    {
        path: 'auth',
        element: <LazyAuthModule/>
    },
    {
        path: '*',
        element: <_404/>
    }
]);