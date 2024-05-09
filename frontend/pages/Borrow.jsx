import React from 'react'
import Sidebar from '../components/SidebarLeft'
import styles from "./Borrow.module.css"
import SidebarRight from '../components/SidebarRight'


export default function Lending() {
    return (<div className={styles.lending}>
        <Sidebar />
        <div className={styles.main}>
            <h2>Welcome</h2>
            <h1>Borrower</h1>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.inputs}>
                        <h3>Borrow</h3>
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
                        <button>Borrow</button>
                    </div>
                </div>
            </div>
        </div>
        <SidebarRight />

    </div>
    )
}
