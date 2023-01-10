import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PinGreen from '../../Images/pingreen.png';
import Show from '../../Images/show.png';
import Hide from '../../Images/hide.png';
import Button from '../../Images/greenfull.png';
import Connect from '../../Images/greenflip.png';

const Login = ( {users, user, setUser} ) => {
    const [inputMail, setInputMail] = useState("");
    const [inputPass, setInputPass] = useState("");
    
    const [line, setLine] = useState(false);
    const [eye, setEye] = useState(true);
    
    const [redMail, setRedMail] = useState(false);
    const [redPas, setRedPas] = useState(false);
    
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        if (!(eye === true)) {
            const end= document.querySelector('#psw');
            var len = end.value.length;
            end.focus();
            end.setSelectionRange(len, len);
        };
    }, [eye]);

    if (user !== '0') {
        return <Navigate to="/dashboard" replace />;
    };

    const inputMailHandler = (e) => {
        setInputMail(e.target.value);
        setRedMail(false);
    };
    
    const inputPassHandler = (e) => {
        setInputPass(e.target.value);
        setRedPas(false);
    };

    const changeLine = () => {
        setLine(!line);
    };

    const showPas = () => {
        setEye(!eye);
    };

    const check = (e) => {
        if (inputMail === "") {
            e.preventDefault();
            setRedMail(true);
        };
        if (/\S+@\S+/.test(inputMail) === false) {
            setRedMail(true);
        }
        else if (/\S+@\S+\.\S+/.test(inputMail) === false) {
            setRedMail(true);
            e.preventDefault();
        }
        else {
            if (inputPass === "") {
                e.preventDefault();
            };
        };
        if (inputPass === "") {
            setRedPas(true);
        };
    };

    const changesrc = () => {
        setFlip(true);
    };

    const changeback = () => {
        setFlip(false);
    };

    const gotoProf = (e) => {
        users.map(user => {
            if ((user.mail === inputMail) && (user.password === inputPass)) {
                console.log(user.user_id);
                setUser(user.user_id);
            };
            return user.user_id;
        });
        e.preventDefault();
    };
    
    return (
        <div className= "connect">
            <img src= {PinGreen} alt= "Pin Icon" />
            <div className= "connectcont">
                <form className= "connectformside" onSubmit= {gotoProf}>
                    <div className= "connectforms">
                        <div className= "connectrow">
                            <div className= "connectlabel">Email:</div>
                            <input className= "connectform" type= "email" placeholder= "example@email.com" id= "mail"
                                title= {inputMail} value= {inputMail} autoComplete= "on" autoFocus= "on"
                                onChange= {inputMailHandler} style= {{borderColor: (redMail? 'red' : 'black')}} />
                        </div>
                        <div className= "connectrow">
                            <div className= "connectlabel">Κωδικός:</div>
                            <div className= "passwordform" style= {{outline: (line ? '1.5px solid white' : 'none'), 
                                borderWidth: (line ? '2px' : '1px'), borderColor: (redPas? 'red' : 'black')}} >
                                    <input className= "connectform" type= {eye ? "password" : "text"} id= "psw"
                                        title= {inputPass} value= {inputPass} autoComplete= "off"
                                        onChange= {inputPassHandler} onFocus= {changeLine} onBlur= {changeLine} />
                                    <img src= {eye ? Show : Hide} alt= "Show Password Icon" onClick= {showPas} />
                            </div>
                        </div>
                    </div>
                    <motion.input type= "submit" id= "connectbutton" value= "Σύνδεση" whileHover= {{scale: 1.1}} 
                        onClick= {check} />
                    <div id= "tolink">
                        <Link to= "/forgotpassword">
                            Δε θυμάμαι τον κωδικό μου!
                        </Link>
                    </div>
                </form>
                <div className= "changeroute">
                    <Link to= "/signup">
                        <div className= "smallpostit" onPointerEnter= {changesrc} onPointerLeave= {changeback}>
                            {flip ? 
                                <img src= {Connect} alt= "Sign Up Icon" /> 
                            : 
                                <img src= {Button} alt= "Sign Up Icon" />
                            }
                            <div className= "smalltext" style= {{fontWeight: 'bold'}}>
                                Εγγραφή
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;