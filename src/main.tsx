import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, createRoutesFromChildren, Route, RouterProvider} from "react-router-dom";
import Layout from "./pages/Layout.tsx";

const router = createBrowserRouter(createRoutesFromChildren(
    <Route element={<Layout />}>
        <Route path="/" element={<App/>}/>
    </Route>
))

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
