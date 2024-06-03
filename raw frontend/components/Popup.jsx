import React, { useContext, useEffect, useState } from 'react'
import './Popup.css'
import axios from 'axios'
import { Walletcontext } from '../pages/Wallet.context'


function Popup({ setshowpopup }) {

    const { walletdata }=useContext(Walletcontext)
    // useEffect(()=>{
    // })
    console.log(walletdata);
    
    const [intrest, setintrest] = useState()
    const [choice, setchoice] = useState()


    const formsubmit = async (e) => {
        e.preventDefault()
        console.log(e);
        console.log(intrest, choice, "fomr");

        await axios.post("/update", { walletaddress:walletdata.wallet[0], intrest, choice })

    }



    return (
        <div className='popup'>
            <form onSubmit={formsubmit} className='popupform'>

                <h2>Changes</h2>
                <label htmlFor="intrest">Interest rate:</label>
                <input type="number" name='intrest' onChange={(e) => { setintrest(e.target.value); }} />
                <br /><br />
                <label htmlFor="choice">Avilable for lending</label>
                <input type="radio" name='choice' value="true" onChange={(e) => { setchoice(e.target.value) }} /> Yes
                <input type="radio" name='choice' value="false" onChange={(e) => { setchoice(e.target.value) }} /> No
                <br /><br />
                <button type="submit">Submit</button>
                <button onClick={() => setshowpopup(false)}>close</button>
            </form>
        </div>
    )
}

export default Popup