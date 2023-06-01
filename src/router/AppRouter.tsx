import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthRouter, AuthRoutes } from "../auth/routes";
import { JournalRouter,JournalRoutes } from "../journal/routes";


const routerConfig=createBrowserRouter([
  {
    path:'/auth/*',
    //login y registro
    element:(<AuthRouter/>),
    children:AuthRoutes,
  },
  {
    path:"/",
    element:(<JournalRouter/>),
    children:JournalRoutes
  },{
    path: "/*",
    element: <Navigate to={"/"} />,
  },

])

export const AppRouter = () => {
  return (
     <RouterProvider router={routerConfig} />
  )
}
