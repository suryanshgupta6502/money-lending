import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Lend.module.css'
import { Web3 } from 'web3'
import { Walletcontext } from './Wallet.context';

function Lend({ everylender, setlendpopup }) {

    const navigateto = useNavigate()
    const { walletConnect, walletdata } = useContext(Walletcontext)
    console.log(walletdata);

    useEffect(() => {
        if (walletdata.wallet === null) {
            walletConnect()
        }
        else {

            console.log(everylender);
        }

    }, [walletdata])

    const [amount, setamount] = useState()
    const [duration, setduration] = useState()

    const submitbutton = async (e) => {
        const address = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"
        console.log(everylender.interestrate, amount, everylender.useraddress, duration);
        e.preventDefault();


        try {
            const loanissue = await walletdata.contract.methods.loanissue(address, amount, everylender.interestrate, duration).send({
                from: walletdata.wallet[0],
                value:amount
                // value: Web3.utils.toWei(amount, 'wei')
            })
            
            console.log('Loan issued successfully!', loanissue);

            setlendpopup(false)
        } catch (error) {
            console.log('Error issuing loan:', error);
        }
    }







    return (
        <div className={styles.container}>
            <form onSubmit={submitbutton} className={styles.form}>
                <label >
                    Lender Address : {everylender.useraddress}
                </label><br />
                <label >
                    Interest Rate : {everylender.interestrate}%
                </label><br />
                <label >
                    Duration (Days) : <input type="number" onChange={(e) => { setduration(Number(e.target.value)) }} />
                </label><br />
                <label >
                    Amount (INR) <input type="number" name="amount" onChange={(e) => { setamount(Number(e.target.value)) }} />
                </label><br />
                <button type='submit' >Confirm</button>
                <button onClick={() => setlendpopup(false)}>Cancel</button>
            </form>
        </div>
    )
}

export default Lend