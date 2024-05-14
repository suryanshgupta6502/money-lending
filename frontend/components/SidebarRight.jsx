import React, { useContext, useEffect, useState } from 'react'
import { FaBell, FaUser, FaWallet } from 'react-icons/fa'
import styles from './SidebarRight.module.css'
import { Walletcontext } from '../pages/Wallet.context'
import Popup from '../components/Popup'

export default function SidebarRight() {

    const { walletdata, walletConnect } = useContext(Walletcontext)
    const [balances, setbalances] = useState()
    const [accountpopup, setaccountpopup] = useState(false)

    useEffect(() => {
        if (walletdata.wallet == null) {
            walletConnect()
        }
        else {
            getdetails()
        }

    }, [walletdata])

    const getdetails = async () => {
        const balance = await walletdata.contract.methods.balances(walletdata.wallet[0]).call()
        setbalances(Number(balance))
        console.log(balances);
    }


    // const [open,setopen]=useState(false)

    return (<div className={styles.container}>
        <div className={styles.up}>
            {/* <div className={styles.dropdown}>
                <button className='link' onClick={setopen(!open)} >drop down</button>

                <div className={styles.dropdown+`${open?"active":"inactive"}`}>
                    drop down contentn
                    dfj
                    <h1>fkdsfkls</h1>
                    <h1>dshfc</h1>
                </div>
            </div> */}


            <ul>
                <li><FaWallet /> <h4 className={styles.wallet}>fdgfgfdgffdfgdfgddfgfggggggggggggggggggfdsknjn</h4> </li>
                <li><FaBell /></li>
                <li onClick={() => setaccountpopup(true)}><FaUser /></li>
                {accountpopup && <Popup setaccountpopup={setaccountpopup} />}
            </ul>
        </div>

        <div className={styles.down}>
            {/* <div className={styles.item}>
                <h5>Avilable Balance</h5>
                <h2>{balances} INR</h2>
            </div> */}
            <div className={styles.item}>
                <h5>Due Loan Amount</h5>
                <h2>{balances} INR</h2>
            </div>
            {/* <div className={styles.item}>
                <h5>Due date</h5>
                <h2>4d 13h 24m</h2>
            </div> */}
        </div>
    </div>
    )
}
