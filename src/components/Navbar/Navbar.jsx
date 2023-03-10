import React, { useContext } from 'react'
import './Navbar.scss'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from '../../context/darkModeContext';


const Navbar = () => {

  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search' />
          <SearchOutlinedIcon className='searchIcon'/>
        </div>
        <div className="items">
          <div className="item" id='language'>
            <GTranslateOutlinedIcon  className='icon' />ENGLISH
          </div>
          <div className="item">
            <DarkModeOutlined className='icon moon' onClick={()=>dispatch({type:"TOGGLE"})}/>
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className='icon'/>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon'/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className='icon'/>
          </div>
          <div className="item">
            <img 
            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
            alt="" 
            className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
