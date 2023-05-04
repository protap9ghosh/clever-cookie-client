import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login/Login/Login";
import LoginLayout from "../layouts/LoginLayout";
import Blog from "../pages/Blog/Blog";
import Register from "../pages/Login/Register/Register";
import Chef from "../pages/chef-details/Chef-view/Chef";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
    },
    {
        path: '/chef',
        element: <Main></Main>,
    },
    {
        path: '/login',
        element: <Login></Login>,
    },
    {
        path: '/register',
        element: <Register></Register>,
    },
    {
        path: '/blog',
        element: <Blog></Blog>,
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>,
    }
]);

export default router;