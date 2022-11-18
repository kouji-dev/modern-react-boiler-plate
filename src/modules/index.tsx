import {Routes} from "@common/types";
import {lazy} from "react";
import {LazyLoader} from "@common/layout";

const LazyHomeModule = lazy(() => new Promise<{default: any}>(resolve => setTimeout(() => resolve(import('@modules/home')), 1000)));
const LazyCounterModule = lazy(() => new Promise<{default: any}>(resolve => setTimeout(() => resolve(import('@modules/counter')), 2500)));

export const ROUTES: Routes = [
    {
        index: true,
        path: '',
        element: <LazyLoader component={<LazyHomeModule/>}/>,
    },
    {
        path: 'counter',
        element: <LazyLoader component={<LazyCounterModule/>}/>
    }
]