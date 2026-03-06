import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SimpleForm from './Components/SimpleForm/SimpleForm.jsx'
import ControlComponent from './Components/ControlComponent/ControlComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <SimpleForm></SimpleForm> */}
  <ControlComponent></ControlComponent>
  </StrictMode>,
)
