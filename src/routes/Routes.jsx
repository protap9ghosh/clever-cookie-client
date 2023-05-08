import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Component/Section/Home/Home";
import Blog from "../Component/pages/Blog/Blog";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../Component/pages/Login/Login";
import Register from "../Component/pages/Register/Register";
import ErrorPage from "../Component/pages/ErrorPage/ErrorPage";
import Chef from "../layouts/Chef";
import ChefDetails from "../layouts/ChefDetails";
import About from "../Component/pages/About/About";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>,
            }
        ]
    },
    {
        path: '/',
        element: <Chef></Chef>,
        children: [
            {
                path: '/Chef',
                element: <Chef></Chef>,
                // loader: () => fetch(`http://localhost:5000/chef-details`)
            }
        ],
    }

    // {
    //     path: '/',
    //     element: <ChefDetails></ChefDetails>,
    //     children: [
    //         {
    //             path: '/',
    //             element: <ChefDetails></ChefDetails>,
    //             loader: ({ params }) => fetch(`http://localhost:5000/chef-details/${params.id}`),
    //         },

    //     ]
    // }



]);

export default router;