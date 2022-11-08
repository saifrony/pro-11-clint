import { createBrowserRouter } from "react-router-dom"
import Blog from "../Blog";
import Login from "../Login";
import Main from "../Main/Main"
import Home from "../Pages/Home/Home/Home";

const routers  = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
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
            }

        ]
        
    }
])

export default routers;