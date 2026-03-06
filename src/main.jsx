import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SimpleForm from './Components/SimpleForm/SimpleForm.jsx'
import ControlComponent from './Components/ControlComponent/ControlComponent.jsx'
import ControlComponent2 from './Components/ControlComponent2/ControlComponent2.jsx'
import FormData from './Components/FormData/ActionData.jsx'
import ActionData from './Components/FormData/ActionData.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root.jsx'

// create router code start hre;
const router = createBrowserRouter([
  {
    path:"/",
    Component:Root,
    children:[
      {index:true,Component:SimpleForm},
      {path:'action',Component:ActionData},
      {path:'controlData',Component:ControlComponent},
      {path:'controlData2',Component:ControlComponent2}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
