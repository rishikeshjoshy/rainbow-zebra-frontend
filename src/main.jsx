import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RainbowZebraWebsite from '../rainbow-zebra.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RainbowZebraWebsite />
    </StrictMode>,
)
