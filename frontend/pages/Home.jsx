import React from 'react'
import styles from './Home.module.css'
import Navbar from '../components/Navbar'
import { Web3 } from 'web3'

export default function Home() {

    return (<>

        <Navbar />
        <div className={styles.home}>
            <div className={styles.left}>
                <h1>Lend and
                    Borrow
                    Money
                </h1>
                <p>Secure way to lend and borrow micro money online.</p>
                <div className={styles.button}>
                    <a href="/lend"><button>Lend</button></a>
                    <a href="/borrow"><button>Borrow</button></a>
                </div>
            </div>
            <div className={styles.right}>
                <img src="./Laptop.svg" alt="illustration" />

            </div>
        </div>
    </>)
}
