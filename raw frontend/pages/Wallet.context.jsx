import React, { createContext, useContext, useEffect, useState } from 'react'
import Web3 from 'web3';
import abi from './abi.json'

export const Walletcontext = createContext(null)


export const Walletcontextprovider = ({ children }) => {

    const [walletdata, setwalletdata] = useState({ wallet: null, web3: null, contract: null })



    useEffect(() => {
        if (walletdata.wallet && walletdata.web3 && walletdata.contract) {
            console.log(walletdata);
            localStorage.setItem("address", walletdata.wallet)
        }
    }, [walletdata])


    const walletConnect = async () => {
        const web3 = new Web3(window.ethereum)

        const walletaddress = await window.ethereum.request({
            method: "eth_requestAccounts"
        })

        // const contractaddress = "0x5CFC5999535061EFa00a0e0c5d05685aa8F35d1F"
        const contractaddress = "0xaf94198D2F5bCA0c48b0d428aB3ec92C25511B05"
        const contract = new web3.eth.Contract(abi, contractaddress)

        console.log("inside context");
        setwalletdata({ wallet: walletaddress, web3: web3, contract: contract })
        // navigate('dash')
    }


    return (
        <Walletcontext.Provider value={{ walletdata, setwalletdata, walletConnect }}>
            {children}
        </Walletcontext.Provider>
    )
}

// export default Wallet