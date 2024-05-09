import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import { BrowserRouter, Navigate, Route, Router, Routes, useNavigate } from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Borrow from '../pages/Borrow'
import Dashboard from '../pages/Dashboard'
import Lenders from '../pages/Lenders'
import Lend from '../pages/Lend'

export default function App() {



    return (<>
        <BrowserRouter basename='/' >

            <Routes >
                {/* {localStorage.address===null ? */}
                {/* <> */}
                {/* <> */}
                <Route path='/lenders' element={<Lenders />} />
                <Route path='/lenders/lend' element={<Lend />} />
                <Route path='/borrow' element={<Borrow />} />
                {/* </>
                    : <> */}
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login />} />
                <Route path='/*' element={<Navigate to="/" />} />
                {/* </>
                } */}
            </Routes>

        </BrowserRouter >

    </>)


    // if (localStorage.length > 0) {
    //     return (
    //         <BrowserRouter basename='/'>
    //             <Routes>
    //                 <Route path='/dashboard' element={<Dashboard />} />
    //                 <Route path='/lenders' element={<Lenders />} />
    //                 <Route path='/lenders/lend' element={<Lend />} />
    //                 <Route path='/borrow' element={<Borrow />} />
    //             </Routes>
    //         </BrowserRouter>
    //     );
    // } else {
    //     navigateto('/', { replace: true }); // Redirect to '/'
    //     return (
    //         <BrowserRouter basename='/'>
    //             <Routes>
    //                 <Route path='/' element={<Home />} />
    //                 <Route path='/about' element={<About />} />
    //                 <Route path='/contact' element={<Contact />} />
    //                 <Route path='/login' element={<Login />} />
    //             </Routes>
    //         </BrowserRouter>

    //     )
    // }
}
