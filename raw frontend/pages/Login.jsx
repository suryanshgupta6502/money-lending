import React, { useContext, useEffect, useState } from 'react'
import Web3 from 'web3';
import abi from '../pages/abi.json'
import App from '../src/App';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import Nav from './Nav';
import { Walletcontext } from './Wallet.context';

function Login(top) {
    console.log(top);
    const navigate = useNavigate()
    const { walletConnect } = useContext(Walletcontext)
    // const history=hitory

    // const walletconect = async () => {

    // navigate('/dash');

    // }

    // console.log(localStorage.getItem("address"))


    return (
        <>
            <Nav />
            <div>Login
                <button onClick={walletConnect}>login</button>
            </div>
        </>
    )
}

export default Login