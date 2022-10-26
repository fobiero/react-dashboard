import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({type}) => {

    let data;
    const amount = 100;
    const diff = 20;

    switch(type){
        case "user":
            data = {
                title: 'USERS',
                isMoney: false,
                link: "See all Users",
                icon: <PersonOutlineOutlinedIcon className='icon' />
            };
            break;
            case "order":
                data = {
                    title: 'ORDER',
                    isMoney: false,
                    link: "View all Orders",
                    icon: <ShoppingCartOutlinedIcon className='icon' />
                };
            break;
            case "earning":
                data = {
                    title: 'EARNINGS',
                    isMoney: true,
                    link: "View net earnings",
                    icon: <MonetizationOnOutlinedIcon className='icon' />
                };
            break;
            case "balance":
                data = {
                    title: 'BALANCES',
                    isMoney: true,
                    link: "See Details",
                    icon: <AccountBalanceWalletOutlinedIcon className='icon' />
                };
            break;
        default:
            break;
    }

    return(
        <div className='widget'>
            <div className='left'>
                <span className='title'>{data.title}</span>
                <span className='counter'>{data.isMoney && "$"} {amount}</span>
                <span className='link'>{data.link}</span>
            </div>
            <div className='right'>
                <div className='percentage positive'> 
                <KeyboardArrowUpOutlinedIcon />
                {diff } %</div>
                {data.icon} 
            </div>
        </div>
    )
}

export default Widget;