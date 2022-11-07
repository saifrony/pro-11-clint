import { createBrowserRouter } from "react-router-dom"
import Main from "../Main/Main"

const routers  = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>
    }
])

export default routers;