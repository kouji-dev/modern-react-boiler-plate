import {Component} from "@common/types";
import {createHashRouter, RouterProvider,} from "react-router-dom";
import {ROUTES} from "@modules";
import {Main} from "@common/layout";

const router = createHashRouter([
    {
        element: <Main/>,
        children: ROUTES
    }
]);

export const RouterConfig: Component = () => {
    return <RouterProvider router={router}/>
}