import { createBrowserRouter } from "react-router-dom"
import Blog from "../Blog";
import Main from "../Main/Main"

const routers  = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/Blog',
                element:<Blog></Blog>
            }
        ]
        
    }
])

export default routers;