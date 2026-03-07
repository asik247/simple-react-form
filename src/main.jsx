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
import UnControlData from './Components/UncontrolData/UnControlData.jsx'
import UnControlData2 from './Components/UnControlData2/UnControlData2.jsx'
import ControlComponent3 from './Components/ControlComponent3/ControlComponent3.jsx'

// create router code start hre;
const router = createBrowserRouter([
  {
    path:"/",
    Component:Root,
    children:[
      {index:true,Component:SimpleForm},
      {path:'action',Component:ActionData},
      {path:'controlData',Component:ControlComponent},
      {path:'controlData2',Component:ControlComponent2},
      {path:'unControlData',Component:UnControlData},
      {path:'unControlData2',Component:UnControlData2},
      {path:'controlData3',Component:ControlComponent3},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
