import './navbar.scss'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search' />
          <SearchOutlinedIcon />
        </div>
        <div className='items'>
          <div className='items'>
            <LanguageOutlinedIcon />
            English
          </div>
          <div className='items'>
            <DarkModeOutlinedIcon />
          </div>
          <div className='items'>
            <FullscreenExitOutlinedIcon />
          </div>
          <div className='items'>
            <NotificationsNoneOutlinedIcon />
          </div>
          <div className='items'>
            <ChatBubbleOutlineOutlinedIcon />
          </div>
          <div className='items'>
            <ListOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar