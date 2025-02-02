
import {createBrowserRouter,} from "react-router-dom";
import Main from "../Main/Main";
import PopularGames from "../Homepages/PopularGames/PopularGames";
import ErrorPages from "../Component/ErrorPages/ErrorPages";
import Home from "../Homepages/Home/Home";
import Register from "../Component/Register/Register";
import Login from "../Component/Login/Login";
import About from "../Component/About/About";
import User from "../Component/User/User";
import ShowUser from "../Component/ShowUser/ShowUser";
import Promotion from "../Component/Promotion/Promotion";
import PrivateRoutes from "./PrivateRoutes";
import UpdateUser from "../Component/ShowUser/UpdateUser/UpdateUser";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        errorElement:<ErrorPages/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"username",
                element:<PrivateRoutes><ShowUser/></PrivateRoutes>,
                loader:()=>fetch("https://server-one-mocha.vercel.app/UserData")
            },
            {
                path:"userdata",
                element:<User/>
            },
            {
                path:"popularGames",
                element:<PopularGames/>
            },
            {
                path:"register",
                element:<Register/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"promotion",
                element:<Promotion/>
            },
            {
                path:"update/:id",
                element:<UpdateUser/>,
                loader:({params})=>fetch(`https://server-one-mocha.vercel.app/UserData/${params.id}`)
            },
        ]
    }
]);
