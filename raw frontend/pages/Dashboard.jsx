import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { Walletcontext } from './Wallet.context';
import Nav from './Nav';


function Dashboard() {

    const { walletdata, walletConnect } = useContext(Walletcontext)

    const contract = walletdata.contract
    console.log(contract);
    console.log(walletdata);
    
    const [loans, setloans] = useState()

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




    return (
        <>
            <Nav />
            <div>Dashboard
                <p>get all loans</p>
                {/* <button onClick={walletConnect} >conect</button><br /> */}
                {/* <button onClick={getbalace}>gett balance</button><br /> */}
                {/* <button onClick={getallloans}>gett loans</button> */}
            </div>

            <div className="loans">
                {loans?.map((child, i) => {
                    return <div key={i}>
                        From:    {child.borrower} <br />
                        {/* Amount:    {Number(child.amount)} Eth <br /> */}
                        {/* Duration:    {Number(child.duration)} Days <br /> */}
                        {/* Intrest:    {Number(child.intrest)}% <br /> */}
                    </div>
                })}
            </div>
        </>
    )



}

export default Dashboard