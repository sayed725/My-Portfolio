import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Pages/Home";

import AllProjects from "./Pages/AllProjects";
import Details from "./Pages/Details";
import Error from "./Pages/Error";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error/>,
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