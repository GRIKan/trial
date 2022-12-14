import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from '../../Images/logo2.png';
import Greek from '../../Images/greekflag.png';
import UK from '../../Images/ukflag.png';
import Option from '../../Images/yellowfull.png';
import Choice from '../../Images/yellowflip.png';
import Button from '../../Images/greenfull.png';
import Connect from '../../Images/greenflip.png';
import Menu from '../../Images/menu.png';
import Close from '../../Images/close.png';

const dispSidemenuVariants= {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: { duration: 0.3 }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.2 }
    }
}

const sidemenuVariants= {
    initial: {
        x: -600
    },
    animate: {
        x: 0
    },
    exit: {
        x: -600
    },
    transition: { duration: 0.3 }
}

const Header = () => {
    const [changelang, setChangelang] = useState(false);
    const [dispbutton, setDispbutton] = useState(true);
    const [dispmenu, setDispmenu] = useState(false);
    
    const [options, setOptions] = useState([false, false, false, false]);
    var location= useLocation();

    window.addEventListener('resize', function() {
        if (document.querySelector('.sidemenu')) {
            if (window.getComputedStyle(document.querySelector('.sidemenu'), null).display === 'none') {
                setDispbutton(true);
                setDispmenu(false);
            };
        };
    });

    useEffect(() => {
        const newOptions= Array.from(options);
        if (location.pathname === '/') {
            for (const i in newOptions) {
                if (i === '0') {
                    newOptions[i]= true;
                }
                else {
                    newOptions[i]= false;
                };
            };
        }
        else if (location.pathname === '/about') {
            for (const i in newOptions) {
                if (i === '1') {
                    newOptions[i]= true;
                }
                else {
                    newOptions[i]= false;
                };
            };
        }
        else if (location.pathname === '/features') {
            for (const i in newOptions) {
                if (i === '2') {
                    newOptions[i]= true;
                }
                else {
                    newOptions[i]= false;
                };
            };
        }
        else if (location.pathname === '/login') {
            for (const i in newOptions) {
                if (i === '3') {
                    newOptions[i]= true;
                }
                else {
                    newOptions[i]= false;
                };
            };
        }
        else {
            for (const i in newOptions) {
                newOptions[i]= false;
            };
        };
        setOptions(newOptions);
    },[location.pathname])

    const changedisp = (e) => {
        const newOptions= Array.from(options);
        for (const i in newOptions) {
            if (!(i === e.target.parentNode.id)) {
                newOptions[i]= false;
            };
        };
        setOptions(newOptions);

        if(e.target.className === "smalltextright") {
            closeMenu();
        };
    };

    const changesrc = (e) => {
        const newOptions= Array.from(options);
        newOptions[e.target.parentNode.id]= true;
        setOptions(newOptions);
    };

    const changeback = (e) => {
        if (!(location.pathname === e.target.parentNode.parentNode.pathname)) {
            const newOptions= Array.from(options);
            newOptions[e.target.parentNode.id]= false;
            setOptions(newOptions);
        };
    };

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
        <div className= "header h">
            <div id= "logo">
                <Link to= "/">
                    <img src= {Logo} alt= "Logo Icon" id= "icon" onClick= {closeMenu} />
                </Link>
            </div>
            <div className= "headeroptions">
                <Link to= "/">
                    <div className= "smallpostit" id= "0" onPointerEnter= {changesrc} onPointerLeave= {changeback}
                        onClick= {changedisp} >
                        {options[0] ? 
                            <img src= {Choice} alt= "Home Icon" /> 
                        : 
                            <img src= {Option} alt= "Home Icon" />
                        }
                        <div className= "smalltext">
                                ????????????
                        </div>
                    </div>
                </Link>
                <Link to= "/about">
                    <div className= "smallpostit" id= "1" onPointerEnter= {changesrc} onPointerLeave= {changeback}
                        onClick= {changedisp} >
                        {options[1] ? 
                            <img src= {Choice} alt= "About Icon" /> 
                        : 
                            <img src= {Option} alt= "About Icon" />
                        }
                        <div className= "smalltext">
                                ??????????????
                        </div>
                    </div>
                </Link>
                <Link to= "/features">
                    <div className= "smallpostit" id= "2" onPointerEnter= {changesrc} onPointerLeave= {changeback}
                        onClick= {changedisp} >
                        {options[2] ? 
                            <img src= {Choice} alt= "Features Icon" /> 
                        : 
                            <img src= {Option} alt= "Features Icon" />
                        }
                        <div className= "smalltext">
                            ??????????????????????
                        </div>
                    </div>
                </Link>
            </div>
            <div className= "buttonheaderh">
                <Link to= "/login">
                    <div className= "smallpostit" id= "3" onPointerEnter= {changesrc} onPointerLeave= {changeback} 
                        style= {{fontWeight: 'bold'}} onClick= {changedisp} >
                        {options[3] ? 
                            <img src= {Connect} alt= "Login Icon" /> 
                        : 
                            <img src= {Button} alt= "Login Icon" />
                        }
                        <div className= "smalltext">
                            ??????????????
                        </div>
                    </div>
                </Link>
            </div>
            <span id= "languageh" onClick= {changeLanguage} lang= {changelang ? "greek" : "english"} 
                title= "Change Language" >
                {changelang ? 
                    <img src= {Greek} alt= "Greek Flag Icon" lang= "greek" /> 
                : 
                    <img src= {UK} alt= "UK Flag Icon" lang= "english" />
                }
            </span>
            <AnimatePresence>
                {dispbutton && <motion.img src= {Menu} alt= "Menu Icon" className= "menu" onClick= {showMenu} 
                    {...dispSidemenuVariants} />}
            </AnimatePresence>
            <AnimatePresence>
                {dispmenu && <motion.div className= "sidemenu" {...sidemenuVariants}>
                    <img src= {Close} alt= "Close Icon" onClick= {closeMenu} />
                    <Link to= "/login">
                        <div className= "smallpostitright" id= "3" style= {{margin: '20px' , fontWeight: 'bold'}}
                            onPointerEnter= {changesrc} onPointerLeave= {changeback} onClick= {changedisp} >
                                {options[3] ? 
                                    <img src= {Connect} alt= "Login Icon" /> 
                                : 
                                    <img src= {Button} alt= "Login Icon" />
                                }
                                <div className= "smalltextright">
                                    ??????????????
                                </div>
                        </div>
                    </Link>
                    <div className= "headeroptionsright">
                        <Link to= "/">
                            <div className= "smallpostitright" id= "0" 
                                onPointerEnter= {changesrc} onPointerLeave= {changeback} onClick= {changedisp} >
                                    {options[0] ? 
                                        <img src= {Choice} alt= "Home Icon" /> 
                                    : 
                                        <img src= {Option} alt= "Home Icon" />
                                    }
                                    <div className= "smalltextright">
                                        ????????????
                                    </div>
                            </div>
                        </Link>
                        <Link to= "/about">
                            <div className= "smallpostitright" id= "1" 
                                onPointerEnter= {changesrc} onPointerLeave= {changeback} onClick= {changedisp} >
                                    {options[1] ? 
                                        <img src= {Choice} alt= "About Icon" /> 
                                    : 
                                        <img src= {Option} alt= "About Icon" />
                                    }
                                    <div className= "smalltextright">
                                        ??????????????
                                    </div>
                            </div>
                        </Link>
                        <Link to= "/features">
                            <div className= "smallpostitright" id= "2" 
                                onPointerEnter= {changesrc} onPointerLeave= {changeback} onClick= {changedisp} >
                                    {options[2] ? 
                                        <img src= {Choice} alt= "Features Icon" /> 
                                    : 
                                        <img src= {Option} alt= "Features Icon" />
                                    }
                                    <div className= "smalltextright">
                                        ??????????????????????
                                    </div>
                            </div>
                        </Link>
                    </div>
                </motion.div> }
            </AnimatePresence>
        </div>
    )
}

export default Header;