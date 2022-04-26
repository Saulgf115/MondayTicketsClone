import React from "react";
import logo from '../images/ds3.jpg'
import { useNavigate } from "react-router-dom";
import {DoubleLeftOutlined,PlusOutlined } from '@ant-design/icons'

const Nav = () => {

    const navigate = useNavigate();

    return(
        <>
           <nav>
               <div className="logo-container">
                    <img src={logo} alt="logo" />
               </div>
               <div className="controls-container">
                    <div className="icon" onClick={() => navigate('/ticket')}><PlusOutlined /></div>
                    <div className="icon" onClick={() => navigate('/')}><DoubleLeftOutlined /></div>
               </div>
           </nav>
        </>
    )

}

export default Nav;