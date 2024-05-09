import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Walletcontextprovider } from '../pages/Wallet.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Walletcontextprovider>
            <App />
        </Walletcontextprovider>
    </React.StrictMode>,
)
