import { Routes } from "@common/types";
import { Main } from "@common/layout";
import { createHashRouter } from "react-router-dom";
import { _404 } from "@common/page-utils";

export const ROUTES: Routes = [];

export const router = createHashRouter([
  {
    path: "/",
    element: <Main />,
    children: ROUTES,
  },
  {
    path: "*",
    element: <_404 />,
  },
]);
