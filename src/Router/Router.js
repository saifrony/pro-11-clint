import { createBrowserRouter } from "react-router-dom"
import Blog from "../Blog";
import Login from "../Login";
import Main from "../Main/Main"
import Home from "../Pages/Home/Home/Home";
import SignUp from "../SignUp"
import Error from '../Error'
import ServiceItem from "../Pages/Home/Home/ServiceItem";
import PrivateRoute from "./PrivateRoute";

const routers  = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<PrivateRoute><Home></Home></PrivateRoute>
            },
            {
                path:'/Blog',
                element:<PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/Signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/service',
                element:<PrivateRoute><ServiceItem></ServiceItem></PrivateRoute>
            }

        ]
        
    }
])

export default routers;