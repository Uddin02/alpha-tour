import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Components/Blog/Blog";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login/Login";
import Signup from "../../Components/Login/Signup/Signup";
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