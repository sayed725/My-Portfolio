import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Pages/Home";

import AllProjects from "./Pages/AllProjects";
import Details from "./Pages/Details";



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
            path:'/details/:id',
            element:<Details></Details>
        },
      ]
    },
  ]);


  export { router };