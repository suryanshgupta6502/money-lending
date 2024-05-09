import React, { useContext, useEffect, useState } from 'react'
import { Walletcontext } from './Wallet.context'
import Popup from '../components/Popup'
import Nav from './Nav'

function Profile(top) {
    console.log(top);
    const { walletdata, walletConnect } = useContext(Walletcontext)

    useEffect(() => {
        walletConnect()
    }, [])
    // console.log(walletdata);

    const [showpopup, setshowpopup] = useState(false)


    return (<>
        <Nav />
        <div>Profile <br />


            <button >submit</button>
            <button onClick={() => {
                setshowpopup(true)
                // console.log(showpopup)
            }} >change</button>


            {showpopup && <Popup setshowpopup={setshowpopup} />}
        </div >
    </>
    )
}

export default Profile