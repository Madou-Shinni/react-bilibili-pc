import React from "react";
import {Navigate, useRoutes} from "react-router-dom";

import Home from "@/pages/home/Home.jsx";
import Detail from "@/pages/detail/Detail.jsx";


const Router = React.memo(()=>{
    const element = useRoutes(
        [
            {
                path:'/',
                element: <Home/>,
            },
            {
                path:'/video/:id',
                element: <Detail/>,
            },
            {
                path:'*',
                element: <Navigate to={'/'}/>
            },
        ]
    )
    return element
})

export default Router