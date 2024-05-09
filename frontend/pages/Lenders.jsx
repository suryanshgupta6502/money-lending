import React from 'react'
import Sidebar from '../components/SidebarLeft'
import styles from "./Lenders.module.css"
import SidebarRight from '../components/SidebarRight'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Lend from './Lend'
import { useNavigate } from 'react-router-dom'

export default function Lenders() {

    const navigateto = useNavigate()
    // const navigateto = use()
   
    const [users, setusers] = useState([])

    axios.defaults.baseURL = import.meta.env.VITE_BASEURL

    const dataa = async () => {
        const { data } = await axios.get("/lenders")
        setusers(data?.users)
        console.log(users);

    }

    useEffect(() => {
        dataa();
    }, [])

    console.log(users);


    const [lendpopup, setlendpopup] = useState(false)
    const [everylender, seteverylender] = useState(null)

    const handleclick = async (child) => {
        if (child.choice === true) {
            console.log("licked", child);
            seteverylender(child)
            setlendpopup(true);
            // navigateto("lend", { state: everylender  })

        }
        else {
            alert("not avlable")
        }
    }


    return (<div className={styles.lending}>
        <Sidebar />
        <div className={styles.main}>
            <h2>List of</h2>
            <h1>Lenders</h1>


            <div className={styles.lenders}>
                <ul className={styles.buttons}>
                    <li>Name</li>
                    <li>Interest</li>
                    <li>duration</li>
                    {/* <li>amount</li> */}
                </ul>


                {users?.map((child, i) => {
                    // console.log(child);
                    return <div key={i} >
                        <div className={styles.lender1}>
                            <li>{child.useraddress}</li>
                            <li>{child.interestrate} %</li>
                            <li>duration</li>
                        </div>
                        <div className={styles.lender2}>
                            {child.choice === true ? <li className={styles.avilable}>avilable</li > : <li className={styles.notavilable}>not avilable</li>}
                            <button onClick={() => { handleclick(child) }}>
                                Get</button>
                        </div>
                        <br /><br />
                    </div>
                })}
                {lendpopup && <Lend everylender={everylender} setlendpopup={setlendpopup} />}
            </div>


            <div>

            </div>

            {/* <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.inputs}>
                        <h3>Lend</h3>
                        <div>
                            <h6>i want to lend</h6>
                            <h2>500</h2>
                        </div>
                        <div>
                            <h6>i want to lend</h6>
                            <h2>500</h2>
                        </div>
                        <div>
                            <h6>loan duration</h6>
                            <button>7 days</button>
                            <button>14 days</button>
                            <button>30 days</button>
                            <button>90 days</button>
                        </div>
                    </div>

                    <div className={styles.transaction}>
                        <h5>transaction sumary</h5>
                        <div>
                            <h6>intrest rate</h6>
                            <h6>8%</h6>
                        </div>
                        <div>
                            <h6> total intrest</h6>
                            <h6>8%</h6>
                        </div>
                        <div>
                            <h6>total amount</h6>
                            <h6>8%</h6>
                        </div>
                        <div>
                            <h6>transcation fees</h6>
                            <h6>8%</h6>
                        </div>
                        <button>Lend</button>
                    </div>
                </div>
            </div> */}
        </div>
        <SidebarRight />

    </div>
    )
}
