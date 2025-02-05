import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Pages/Home";


import NavContact from "./Components/NavContact";
import NavAbout from "./Components/NavAbout";
import NavSkills from "./Components/NavSkills";



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
      ]
    },
  ]);


  export { router };