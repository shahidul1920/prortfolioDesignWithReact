import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReactLenis } from "lenis/dist/lenis-react";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactLenis root options={{
      lerp: 0.05,
    }}>
      <App />
    </ReactLenis>

    {/* <App /> */}
  </StrictMode>,
)
