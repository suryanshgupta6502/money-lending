import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Lenders from '../pages/Lenders'
import Login from '../pages/Login'
import { Walletcontextprovider } from '../pages/Wallet.context'
import Profile from '../pages/Profile'
import axios from 'axios'
import Web3 from 'web3'
import abi from '../pages/abi.json'


function App() {

    const top="lecvel at top"

    const [walletdata, setwalletdata] = useState({ wallet: null, web3: null, contract: null })


    useEffect(()=>{
console.log("insise appjs useeffect");
        const functionn=async()=>{
            const web3 = new Web3(window.ethereum)

            const walletaddress = await window.ethereum.request({
                method: "eth_requestAccounts"
            })

            const contractaddress = "0x5CFC5999535061EFa00a0e0c5d05685aa8F35d1F"
            const contract = new web3.eth.Contract(abi, contractaddress)
            // console.log(contract);

            // const issueloan = await contract.methods.loanissue(2, 2, 2).send({ from: accounts[0] })
            // console.log(issueloan);

            // const balances = await contract.methods.balances(accounts[0]).call()
            // console.log(balances);
            // const web3 = new Web3("https://rpc.ankr.com/eth_sepolia")

            console.log("inside context");
            setwalletdata({ wallet: walletaddress, web3: web3, contract: contract })
            // navigate('dash')
        }
        functionn()

    },[])




// useEffect(async()=>{
//     const { data } =await axios.get
// },[])


    return (
            <BrowserRouter basename='/'>
                <Routes>
                    <Route path='/' element={<Login top={walletdata} />} />
                    <Route path='/dash' element={<Dashboard top={walletdata} />} />
                    <Route path='/lend' element={<Lenders top={walletdata} />} />
                    <Route path='/profile' element={<Profile top={walletdata} />} />
                </Routes>
            </BrowserRouter>
    )
}

export default App