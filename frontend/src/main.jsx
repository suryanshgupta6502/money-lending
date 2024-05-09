import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Walletcontextprovider } from '../pages/Wallet.context.jsx'



// window.addEventListener("beforeunload", function (event) {
//     // event.preventDefault();
//     console.log(event);
//     localStorage.clear()
//     event.returnValue = '';

// })
console.log(localStorage);

// window.onbeforeunload=function(event){
//     event.preventDefault();

//     console.log(event);
// }


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Walletcontextprovider>
            <App />
        </Walletcontextprovider>
    </React.StrictMode>,
)
