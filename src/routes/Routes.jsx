import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Component/Section/Home/Home";
import Blog from "../Component/pages/Blog/Blog";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../Component/pages/Login/Login";
import Register from "../Component/pages/Register/Register";
import Chef from "../layouts/Chef";
import ErrorPage from "../Component/pages/ErrorPage/ErrorPage";

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
                path: '/',
                element: <Chef></Chef>,
            }
        ],
    },
    //  {
    //     path: '/',
    //     element: <Chef_bio></Chef_bio>,
    //     children: [
    //         {
    //             path: '/',
    //             element: <Chef_bio></Chef_bio>,
    //             loader: ({ params }) => fetch(`  /${params.id}`);
    //         },

    //     ]
    //  }
    

]);

export default router;