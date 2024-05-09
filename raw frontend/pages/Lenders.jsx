import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Nav from './Nav'

function Lend(top) {
    console.log(top);
    const [users, setusers] = useState([])

    const dataa = async () => {
        const { data } = await axios.get("http://localhost:3000/lenders")
        setusers(data?.users)
        console.log(users);

    }

    useEffect(() => {
        dataa();
    }, [])


    return (
        <>
            <Nav />
            <h1>list of lenders</h1>
            {users.map((child, i) => {
                // console.log(child.useraddress);
                return <div key={i}>
                    <li>{child.useraddress}</li>
                    {child.choice == true ? "Avilable" : "Not avilable"}
                </div>
            })}







            <button>gett all loans</button>

        </>
    )
}

export default Lend