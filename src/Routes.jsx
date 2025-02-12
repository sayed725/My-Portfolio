import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Pages/Home";


import NavContact from "./Components/NavContact";
import NavAbout from "./Components/NavAbout";
import NavSkills from "./Components/NavSkills";
import NavProjects from "./Components/NavProjects";
import MovieLifyDetails from "./Pages/MovieLifyDetails";
import PostPadDetails from "./Pages/PostPadDetails";
import GreenDetails from "./Pages/GreenDetails";
import BiteBankDetails from "./Pages/BiteBankDetails";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h1 className="text-4xl text-center font-bold text-red-600">404 Not Found</h1>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <NavAbout></NavAbout>
        },
        {
            path:'/contact',
            element: <NavContact></NavContact>
        },
        {
            path:'/skills',
            element: <NavSkills></NavSkills>
        },
        {
            path:'/projects',
            element: <NavProjects></NavProjects>
        },
        {
            path:'/movielify-details',
            element: <MovieLifyDetails></MovieLifyDetails>
        },
        {
            path:'/postpad-details',
            element: <PostPadDetails></PostPadDetails>
        },
        {
            path:'/green-details',
            element: <GreenDetails></GreenDetails>
        },
        {
            path:'/bitebank-details',
            element: <BiteBankDetails></BiteBankDetails>
        },
      ]
    },
  ]);


  export { router };