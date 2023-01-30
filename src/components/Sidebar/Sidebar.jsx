import React, { useContext } from 'react'
import './Sidebar.scss'

// Material Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import logoImage from '../../components/images/icon.png'

const Sidebar = () => {

    const {dispatch} = useContext(DarkModeContext)

    return (
        <div className='sidebar'>
            <div className="top">
                <Link to="/" style={{textDecoration:"none"}}>
                    <img src={logoImage} alt="" className='logoimage'/><span className="logo"> Admin</span>
                </Link>

            </div>

            <hr />

            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li><DashboardIcon className='icon' /><span>Dashboard</span></li>

                    <p className="title">LIST</p>
                    <Link to="/users" style={{textDecoration:"none"}}> 
                        <li><PersonOutlinedIcon className='icon' /><span>Users</span></li>
                    </Link>
                    <Link to="/products" style={{textDecoration:"none"}}>
                        <li><StoreIcon className='icon' /><span>Products</span></li>
                    </Link>
                    <li><CreditCardOutlinedIcon className='icon' /><span>Orders</span></li>
                    <li><LocalShippingIcon className='icon' /><span>Delivery</span></li>

                    <p className="title">USEFUL LINKS</p>
                    <li><InsertChartIcon className='icon' /><span>Stats</span></li>
                    <li><NotificationsOutlinedIcon className='icon' /><span>Notification</span></li>
                    <li><PsychologyOutlinedIcon className='icon' /><span>Logs</span></li>

                    <p className="title">SERVICE</p>
                    <li><SettingsSystemDaydreamOutlinedIcon className='icon' /><span>System Health</span></li>
                    <li><SettingsApplicationsIcon className='icon' /><span>Settings</span></li>

                    <p className="title">USER</p>
                    <li><AccountCircleOutlinedIcon className='icon' /><span>Profile</span></li>
                    <li><LogoutOutlinedIcon className='icon' /><span>Logout</span></li>
                </ul>
            </div>

            <div className="bottom">
                <div className="colorOption" onClick={()=> dispatch({type: "LIGHT"})}></div>
                <div className="colorOption" onClick={()=> dispatch({type: "DARK"})}></div>
            </div>
        </div>
    )
}

export default Sidebar
