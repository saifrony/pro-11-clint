import { createBrowserRouter } from "react-router-dom"
import Blog from "../Blog";
import Login from "../Login";
import Main from "../Main/Main"
import Home from "../Pages/Home/Home/Home";
import SignUp from "../SignUp"
import Error from '../Error'

const routers  = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/Blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/Signup',
                element:<SignUp></SignUp>
            }

        ]
        
    }
])

export default routers;