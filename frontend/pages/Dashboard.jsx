import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { Walletcontext } from './Wallet.context';
import Sidebar from '../components/SidebarLeft';
import styles from './Dashboard.module.css'
import SidebarRight from '../components/SidebarRight';
import axios from 'axios';


function Dashboard() {

    const { walletdata, walletConnect } = useContext(Walletcontext)

    const [totalduration, settotalduration] = useState()

    const contract = walletdata.contract
    console.log(contract);
    console.log(walletdata);

    const [loans, setloans] = useState()
    const [balances, setbalances] = useState()

    axios.defaults.baseURL = import.meta.env.VITE_BASEURL


    useEffect(() => {
        if (walletdata.wallet == null) {
            walletConnect()
        }
        else {

            getallloans()
            getduration()

            senddata()

        }
    }, [walletdata, balances])


    const senddata=(() => {

        axios.post("/profile", { address: walletdata?.wallet[0] })
            .then((res) => {
                console.log(res);
            }).catch((err) => console.log(err))

    })

    console.log("wallet data", walletdata);



    const getallloans = async () => {
        try {
            const allloans = await contract.methods.getAllLoans().call({ from: walletdata.wallet[0] })
            setloans(allloans)
            console.log("all loans", allloans);

            const balance = await contract.methods.balances(walletdata.wallet[0]).call()
            setbalances(Number(balance))
            console.log(balances);


            //sending data to backend

            // const send = await axios.post("/profile", { address: walletdata.wallet[0] })
            // console.log(send);

        } catch (error) {
            console.log(error);
        }
    }

    const getduration = async () => {

        let duration = 0;
        await loans?.forEach(child => {
            duration += Number(child.duration);
        });
        settotalduration(duration);

    }



    return (
        <div className={styles.container}>
            <Sidebar />
            {/* <Nav /> */}
            <div className={styles.main}>
                <h1>Dashboard</h1><br />


                <div >
                    <div className={styles.top}>
                        <div>
                            <p>total loans</p>
                            <h1>{loans?.length || 0}</h1>
                        </div>
                        <div>
                            <p>due loan amount</p>
                            <h1>{balances || 0} INR</h1>
                        </div>
                        <div>
                            <p>due date</p>
                            <h1>{totalduration}</h1>
                        </div>
                    </div>
                </div>


                <div>
                    <div>
                        {/* <p>Total loans: {loans?.length || 0} </p> */}
                        {/* <p>Total Dues: {balances || 0} INR </p> */}
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
            </div>


            <SidebarRight />
        </div>
    )



}

export default Dashboard