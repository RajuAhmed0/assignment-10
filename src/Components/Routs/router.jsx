import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Home/Home";
import Error from "../Pages/Error/Error";
import All_Sports_Equipment from "../Pages/All_Sports_Equipment/All_Sports_Equipment";
import Add_Equipment from "../Pages/Add_Equipment/Add_Equipment";
import My_Equipment_List from "../Pages/My_Equipment_List/My_Equipment_List";
import ProductsDetails from "../Pages/ProductsDetails/ProductsDetails";
import Login from "../Login/Login";
import Register from "../Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all-sports-equipment',
                element: <All_Sports_Equipment></All_Sports_Equipment>
            },
            {
                path: '/add-equipment',
                element: <Add_Equipment></Add_Equipment>
            },
            {
                path: '/my-equipment-list',
                element: <My_Equipment_List></My_Equipment_List>
            },
            {
                path: '/view_details/:id',
                element: <ProductsDetails></ProductsDetails>,
                loader: ({ params }) => fetch(`http://localhost:4000/sports/${params.id}`)

            },
            {
                path: '/login',
                element: <Login></Login>


            },
            {
                path: '/register',
                element: <Register></Register>

            },
        ]
    },

])