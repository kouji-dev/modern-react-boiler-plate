import {Component} from "@common/types";
import {RouterProvider,} from "react-router-dom";
import {router} from "@modules";

export const RouterConfig: Component = () => {
    return <RouterProvider router={router}/>
}