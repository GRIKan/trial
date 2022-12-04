import React, { useState } from 'react';
import Logo from '../../Images/logo2.png';
import Greek from '../../Images/greekflag.png';
import UK from '../../Images/ukflag.png';
import Option from '../../Images/yellowfull.png';
import Choise from '../../Images/yellowflip.png';
import Button from '../../Images/greenfull.png';
import Connect from '../../Images/greenflip.png';
import Menu from '../../Images/menu.png';
import Close from '../../Images/close.png';

const Header = () => {
    const [changelang, setChangelang] = useState(false);
    const [dispbutton, setDispbutton] = useState(true);
    const [dispmenu, setDispmenu] = useState(false);

    const changeLanguage = () => {
        changelang ? setChangelang(false) : setChangelang(true);
    };

    const showMenu = () => {
        setDispbutton(false);
        setDispmenu(true);
    };

    const closeMenu = () => {
        setDispmenu(false);
        setDispbutton(true);
    };

    return (
        <div className= "header">
            <div id= "logo">
                <img src= {Logo} alt= "Logo Icon" />
            </div>
            <div className= "headeroptions">
                <div className= "smallpostit" id= "Home">
                    <img src= {Option} />
                    <div className= "smalltext">
                        Αρχική
                    </div>
                    <div className= "arrow"></div>
                </div>
                <div className= "smallpostit" id= "About">
                    <img src= {Option} />
                    <div className= "smalltext">
                        Σχετικά
                    </div>
                    <div className= "arrow"></div>
                </div>
                <div className= "smallpostit" id= "Features">
                    <img src= {Option} />
                    <div className= "smalltext">
                        Λειτουργίες
                    </div>
                    <div className= "arrow"></div>
                </div>
            </div>
            <div className= "buttonheader">
                <div className= "smallpostit" id= "signupin">
                    <img src= {Button} />
                    <div className= "smalltext">
                        Σύνδεση
                    </div>
                    <div className= "arrow"></div>
                </div>
            </div>
            <span id= "language" onClick= {changeLanguage} lang= {changelang ? "greek" : "english"} 
                title= "Change Language" >
                {changelang ? 
                    <img src= {Greek} alt= "Greek Flag Icon" lang= "greek" /> 
                : 
                    <img src= {UK} alt= "UK Flag Icon" lang= "english" />
                }
            </span>
            {dispbutton && <img src= {Menu} alt= "Menu Icon" className= "menu" onClick= {showMenu} />}
            {dispmenu && <div className= "sidemenu">
                <img src= {Close} alt= "Close Icon" onClick= {closeMenu} />
                <div className= "smallpostitright" id= "connect">
                    <img src= {Button} />
                    <div className= "smalltextright">
                        Σύνδεση
                    </div>
                </div>
                <div className= "headeroptionsright">
                    <div className= "smallpostitright">
                        <img src= {Option} />
                        <div className= "smalltextright">
                            Αρχική
                        </div>
                        <div className= "arrowright"></div>
                    </div>
                    <div className= "smallpostitright">
                        <img src= {Option} />
                        <div className= "smalltextright">
                            Σχετικά
                        </div>
                        <div className= "arrowright"></div>
                    </div>
                    <div className= "smallpostitright">
                        <img src= {Option} />
                        <div className= "smalltextright">
                            Λειτουργίες
                        </div>
                        <div className= "arrowright"></div>
                    </div>
                </div>
            </div> }
        </div>
    )
}

export default Header;