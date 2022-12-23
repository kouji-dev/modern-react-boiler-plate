import {FC, PropsWithChildren, ReactNode} from "react";
import {RouteObject} from "react-router-dom";

export type Component = FC<unknown>;
export type ComponentWithChildren<P> = FC<PropsWithChildren<P>>;
export type ComponentWithProps<P> = FC<P>;

export type Routes = RouteObject[];
export type NavigationMenuRoute = {
    path: string;
    label: string;
    icon: ReactNode;
    children?: NavigationMenuRoutes;
    isMenuItem?: boolean;
}
export type NavigationMenuRoutes = NavigationMenuRoute[];