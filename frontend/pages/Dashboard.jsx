import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { Walletcontext } from './Wallet.context';
import Sidebar from '../components/SidebarLeft';
import styles from './Dashboard.module.css'
import SidebarRight from '../components/SidebarRight';
import axios from 'axios';
// import Nav from './Nav';


 function Dashboard() {

    const { walletdata, walletConnect } = useContext(Walletcontext)

    const contract = walletdata.contract
    console.log(contract);
    console.log(walletdata);

    const [loans, setloans] = useState()
    const [balances, setbalances] = useState()

    useEffect(() => {
        if (walletdata.wallet == null) {
            walletConnect()
        }
        else {
            getallloans()
        }

    }, [walletdata])

    console.log("wallet data", walletdata);



    const getallloans = async () => {
        try {
            const allloans = await contract.methods.getAllLoans().call({ from: walletdata.wallet[0] })
            setloans(allloans)
            console.log("all loans", allloans);

            const balance = await contract.methods.balances(walletdata.wallet[0]).call()
            setbalances(Number(balance))
            console.log(balances);
            // }
        } catch (error) {
            console.log(error);
        }
        // const getallloans = await contract?.methods.getAllLoans().call({ from: walletdata.wallet[0] })
        // console.log("all loan", loans);
    }




    // useEffect(() => {
    //     // walletConnect()
    //     // getallloans()
    //     // getallloans();
    //     const getallloans = () => {
    //         const lons = contract?.methods.getAllLoans().call({ from: top?.wallet[0] })
    //         setloans(lons)
    //         // console.log(loans);
    //     }


    // }, [])



    // console.log(loans);


    // const getbalace = async () => {
    //     const balance = await contract?.methods.balances(walletdata.wallet[0]).call()
    //     // console.log("balnce", Number(balance));
    // }
    // const { data } = await axios.get("https://money-lending.onrender.com/profile")
    // console.log(data);



    return (
        <div className={styles.container}>
            <Sidebar />
            {/* <Nav /> */}
            <div className={styles.main}>
                <div>
                    <h1>Dashboard</h1><br />
                    <p>Total loans: {loans?.length || 0} </p>
                    <p>Total Dues: {balances || 0} INR </p>
                    {/* <button onClick={walletConnect} >conect</button><br /> */}
                    {/* <button onClick={getbalace}>gett balance</button><br /> */}
                    {/* <button onClick={getallloans}>gett loans</button> */}
                </div>
                <br />
                <div className="loans">
                    {loans?.map((child, i) => {
                        return <div key={i}>
                            From:    {child.lender} <br />
                            Amount:    {Number(child.amount)} INR <br />
                            Duration:    {Number(child.duration)} Days <br />
                            Intrest:    {Number(child.intrest)}% <br /><br />
                        </div>
                    })}
                </div>
            </div>
            <SidebarRight />
        </div>
    )



}

export default Dashboard