import Reac,{useState} from 'react'
import "./Header.css"
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
  } from "react-router-dom";

function Header() {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        
        <div className="header">
            
            <div className = "header__left">
                <MenuIcon/>

                <Link to="/">
                <img className="logo" alt="Youtube Icon" src="https://i.insider.com/59a59a8d79bbfd1d008b601a?width=1200&format=jpeg"/>
                </Link>
            </div>
            <div className="header__center">
                <input value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} placeholder="Search" type="text" className="header__center__text"/>
                <Link to={`/search/${searchTerm}`}>
                <SearchSharpIcon className="header__center__search"/>
                </Link>
            </div>
            <div className="header__right">
                <VideoCallSharpIcon className="header__right__icon"/>
                <AppsSharpIcon className="header__right__icon"/>
                <NotificationsIcon className="header__right__icon"/>
                <Avatar  alt="me" src="https://pbs.twimg.com/profile_images/1011592560693927937/S1iijmEH_400x400.jpg" className="header__right__icon"/>
            </div>

            


        </div>
    )
}

export default Header