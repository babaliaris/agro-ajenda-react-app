
import { createBrowserRouter, redirect } from "react-router-dom";

import App from "../App";
import Productions from '../components/productions/Productions';




export const RouterPaths = {
    ROOT: "/",
    APP: "app",
    PRODUCTIONS: "productions"
};

export function getRouter(): any
{
    return createBrowserRouter([

        {
            path: RouterPaths.APP,
            element: <App/>,
            children: [
                {
                    path: RouterPaths.PRODUCTIONS,
                    element: <Productions/>
                }
            ]
        },

        {
            path: RouterPaths.ROOT,
            loader: ()=>redirect(RouterPaths.APP)
        }
    ]);
}
