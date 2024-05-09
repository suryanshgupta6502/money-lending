import React from 'react'
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi'
import { RiDashboard2Fill } from 'react-icons/ri'
import styles from './SidebarLeft.module.css'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
export default function Sidebar() {

    const navigate = useNavigate()
    return (<>

        <div className={styles.left}>
            <img src="./loan 1.svg" />
            <ul>
                <li><RiDashboard2Fill size={30} onClick={() => navigate("/dashboard")} /></li>
                <li> <GiPayMoney title='Lenders' size={30} onClick={() => navigate("/lenders")} /></li>
                {/* <li><GiReceiveMoney title='Recieve Money' size={30} onClick={() => navigate("/borrow")} /></li> */}
            </ul>
        </div >



    </>
    )
}
