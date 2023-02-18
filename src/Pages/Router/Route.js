import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Application from "../../Others/Application";
import Footer from "../Footer/Footer";
import CompanyDetails from "../Home/Details";
import ExperienceAllJobs from "../Home/ExperienceAllJobs";
import FresherAllJobs from "../Home/FresherAllJobs";
import Home from "../Home/Home";
import Login from "../Login/Login";
import NavBar from "../NavBar/NavBar";
import SignUp from "../SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";


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
                path: '/navbar',
                element: <NavBar></NavBar>
            },
            {
                path: '/footer',
                element: <Footer></Footer>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/FresherAllJobs',
                element: <PrivateRoute><FresherAllJobs></FresherAllJobs></PrivateRoute>
            },
            {
                path: '/ExperienceAllJobs',
                element: <PrivateRoute><ExperienceAllJobs></ExperienceAllJobs></PrivateRoute>
            },
            {
                path: '/CompanyDetails',
                element: <PrivateRoute><CompanyDetails></CompanyDetails></PrivateRoute>
            },


        ]
    }
])
export default router;