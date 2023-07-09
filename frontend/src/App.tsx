import {RouterProvider,createBrowserRouter, redirect} from "react-router-dom"
import "./app.css"
import LoginPage from "./pages/login";
import Home from "./pages/home";

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
      loader:()=>{
        if(!localStorage.getItem("name")) return redirect("/login");
        return null;
      }
    },
    {
      path:"/register",
      element:<LoginPage/>
    },
    {
      path:"/login",
      element:<LoginPage/>
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
