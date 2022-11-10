import { createBrowserRouter } from "react-router-dom";
import AddServices from "../../Components/AddServices/AddServices";
import Blog from "../../Components/Blog/Blog";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login/Login";
import Signup from "../../Components/Login/Signup/Signup";
import MyReviews from "../../Components/MyReviews/MyReviews";
import ServiceDetail from "../../Components/ServiceDetails/ServiceDetail";
import Services from "../../Components/Services/Services";
import NotFound from "../../Components/Shared/NotFound/NotFound";
import Main from "../../layout/Main";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";


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
                loader: ({params})=>fetch(`https://alpha-tour-server.vercel.app/services/${params.id}`)
            },           
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/addServices',
                element: <PrivateRoute><AddServices/></PrivateRoute>
            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews/></PrivateRoute>
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