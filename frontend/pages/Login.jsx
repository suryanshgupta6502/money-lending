import React from 'react'
import Navbar from '../components/Navbar'
import styles from './Login.module.css'
import Web3 from 'web3'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Walletcontext } from './Wallet.context'


export default function Login() {

    const { walletdata, walletConnect } = useContext(Walletcontext)


    const navigateto = useNavigate()

    let metapresent = false
    if (window.ethereum) {
        metapresent = true
    }
    console.log(walletdata);


    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.login}>
                    <h1>LOGIN</h1>
                    {/* <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <button type="submit">Login</button> */}
                    {metapresent && <button onClick={async () => {
                        await walletConnect();
                        navigateto("/dashboard")
                    }}>Link Metamask</button>}
                    <h4>{!metapresent && "metamask not present"}</h4>

                </div>
            </div>
        </>
    )
}
