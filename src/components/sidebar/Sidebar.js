import './sidebar.scss'

import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar =() => {
  return (
    <div className='sidebar'>
        <div className='top'><span className='logo'>Aghuba Panel</span></div>
        <hr />
        <div className='center'>
          <ul>
            <p className='title'>main</p>
            <li> <DashboardIcon className='icon'/> <span>Dashboard</span></li>
            <p className='title'>lists</p>
            <li> <GroupAddIcon className='icon'/> <span>Users</span></li>
            <li> <StorefrontIcon className='icon'/> <span>Products</span></li>
            <li> <CreditCardIcon className='icon'/> <span>Orders</span></li>
            <li> <LocalShippingIcon className='icon'/> <span>Delivery</span></li>
            <p className='title'>useful links</p>
            <li> <EqualizerIcon className='icon'/> <span>Stats</span></li>
            <li> <NotificationsActiveIcon className='icon'/> <span>Notifications</span></li>
            <li> <SettingsIcon className='icon'/> <span>Settings</span></li>
            <p className='title'>user</p>
            <li> <AccountCircleIcon className='icon'/> <span>Profile</span></li>
            <li> <LogoutIcon className='icon'/> <span>Logout</span></li>
          </ul>
        </div>
        <div className='bottom'>
          <div className='colorOptions'></div>
          <div className='colorOptions'></div>
          <div className='colorOptions'></div>
        </div>
    </div>
  )
}

export default Sidebar