import React, { useContext, useEffect, useState } from 'react'
import './Popup.css'
import axios from 'axios'
import { Walletcontext } from '../pages/Wallet.context'


function Popup({ setaccountpopup }) {

    const { walletdata } = useContext(Walletcontext)
    // useEffect(()=>{
    // })
    console.log(walletdata);

    const [intrest, setintrest] = useState()
    const [choice, setchoice] = useState()
    const [profile, setprofile] = useState()

    console.log(walletdata.wallet[0]);

    useEffect(() => {
        axios.get("http://localhost:3000/get-profile", { params: { address: walletdata.wallet[0] } })
            // axios.defaults.baseURL = import.meta.env.VITE_BASEURL
            .then((res) => {
                setprofile(res.data.user[0])

            })
    }, [])
    console.log(profile);


    console.log(axios.defaults.baseURL);

    const formsubmit = async (e) => {
        // e.preventDefault()
        console.log(e);
        console.log(intrest, choice, "form");

        await axios.post("/update", { walletaddress: walletdata.wallet[0], intrest, choice })
        setaccountpopup(false)
    }
    
    if (profile) {
        if (profile?.choice === true)
            document.getElementById('radiotrue').checked = true
        else
            document.getElementById('radiofalse').checked = true;
    }

    return (
        <div className='popup'>
            <form onSubmit={formsubmit} className='popupform'>

                <h2>Changes</h2>
                <label htmlFor="intrest">Interest rate:</label>
                <input type="number" placeholder={profile?.interestrate} name='intrest' onChange={(e) => { setintrest(e.target.value); }} />
                <br /><br />
                <label htmlFor="choice">Avilable for lending</label>
                <input type="radio" name='choice' id='radiotrue' value="true" onChange={(e) => { setchoice(e.target.value) }} /> Yes
                <input type="radio" name='choice' id='radiofalse' value="false" onChange={(e) => { setchoice(e.target.value) }} /> No
                <br /><br />

                <button type="submit">Submit</button>
                <button onClick={() => setaccountpopup(false)}>close</button>
            </form>
        </div>
    )
}

export default Popup