import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Components/Blog/Blog";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login/Login";
import Signup from "../../Components/Login/Signup/Signup";
import ServiceDetail from "../../Components/ServiceDetails/ServiceDetail";
import Services from "../../Components/Services/Services";
import NotFound from "../../Components/Shared/NotFound/NotFound";
import Main from "../../layout/Main";


export const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: 'home',
                element: <Home/>,
            },
            {
                path: '/services',
                element: <Services/>,
            },
            {
                path: "/services/:id",
                element: <ServiceDetail/>,
                loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },           
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path:'/signup',
                element: <Signup/>
            }

        ]
    }
])