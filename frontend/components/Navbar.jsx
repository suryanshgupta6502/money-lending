import React from 'react'
import style from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav>
            <div>
                <a href="/"><h1 style={style.nav} >optiloan</h1></a>
            </div>

            <div>
                <ul>
                    <a href="/about"><li>about</li></a>
                    <a href="/contact"><li>contact</li></a>
                    <a href="/login"><li>login</li></a>
                </ul>
            </div>
        </nav>
    )
}
