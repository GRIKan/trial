import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Logo from '../../Images/logo2.png';
import Greek from '../../Images/greekflag.png';
import UK from '../../Images/ukflag.png';
import Plus from '../../Images/plus.png';
import User from '../../Images/user.png';

const Header = ( {setSure} ) => {
    const [changelang, setChangelang] = useState(false);
    
    const [uservisible, setUservisible] = useState(false);

    document.body.onpointerdown= (e) => {
        if (e.target.getAttribute('data-inprof')) {
            return;
        };
        setUservisible(false);
    };

    const changeLanguage = () => {
        changelang ? setChangelang(false) : setChangelang(true);
    };

    const useroptions = (e) => {
        setUservisible(!uservisible);
        
        if (e.target.id === 'logout') {
            setSure(1);
        };
    };

    return (
        <div className= "header d">
            <Link to= "/dashboard">
                <div id= "logod">
                    <img src= {Logo} alt= "Logo Icon" id= "icond" />
                </div>
            </Link>
            <div className= "createnewcont">
                <Link to= "/dashboard/create">
                    <div className= "createnew">
                        <img src= {Plus} alt= "Create New Icon" />
                        <div id= "createnewtext">Νέο πείραμα!</div>
                    </div>
                </Link>
            </div>
            <div className= "connecteduser">
                <div className= "conuser" onClick= {useroptions} data-inprof= {true}>
                    <img src= {User} alt= "User Icon" data-inprof= {true} />
                    <div id= "conusername" data-inprof= {true}>
                        Ilia
                    </div>
                </div>
                {uservisible && <div className= "useroptions" data-inprof= {true}>
                    <Link to= "/dashboard/settings">
                        <div className= "useroption" id= "usersettings" data-inprof= {true} onClick= {useroptions}>
                            Settings
                        </div>
                    </Link>
                    <div className= "useroption" id= "logout" data-inprof= {true} onClick= {useroptions}>
                        Logout
                    </div>
                </div>}
            </div>
            <span id= "languaged" onClick= {changeLanguage} lang= {changelang ? "greek" : "english"} 
                title= "Change Language" >
                    {changelang ? 
                        <img src= {Greek} alt= "Greek Flag Icon" lang= "greek" /> 
                    : 
                        <img src= {UK} alt= "UK Flag Icon" lang= "english" />
                    }
            </span>
        </div>
    )
}

export default Header;