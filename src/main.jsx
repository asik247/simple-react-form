import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SimpleForm from './Components/SimpleForm/SimpleForm.jsx'
import ControlComponent from './Components/ControlComponent/ControlComponent.jsx'
import ControlComponent2 from './Components/ControlComponent2/ControlComponent2.jsx'
import FormData from './Components/FormData/ActionData.jsx'
import ActionData from './Components/FormData/ActionData.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <SimpleForm></SimpleForm> */}
  {/* <ControlComponent></ControlComponent> */}
  {/* <ControlComponent2></ControlComponent2> */}
  {/* <FormData></FormData> */}
  <ActionData></ActionData>
  </StrictMode>,
)
