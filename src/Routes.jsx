import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Pages/Home";



import MovieLifyDetails from "./Pages/MovieLifyDetails";
import PostPadDetails from "./Pages/PostPadDetails";
import GreenDetails from "./Pages/GreenDetails";
import BiteBankDetails from "./Pages/BiteBankDetails";
import AllProjects from "./Pages/AllProjects";



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
            path:'projects',
            element:<AllProjects></AllProjects>
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