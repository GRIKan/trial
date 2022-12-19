import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Pin from '../../Images/pin.png';

const Forgot = ( {setPop} ) => {
    const [inputMail, setInputMail] = useState("");
    const [redMail, setRedMail] = useState(false);

    const inputMailHandler = (e) => {
        setInputMail(e.target.value);
        setRedMail(false);
    };

    const send = (e) => {
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
        };
    };

    const gotoLogin = (e) => {
        e.preventDefault();
        setPop(2);
        setTimeout(function() {
            window.location.pathname= "/login";
        }, 1300);
    };

    return (
        <div className= "forgot">
            <div className= "forgotcontainer">
                <img src= {Pin} alt= "Pin Icon" />
                <form className= "forgotcont" onSubmit= {gotoLogin}>
                    <div className= "connectrow f">
                        <div className= "connectlabel">Email:</div>
                        <input className= "connectform" type= "email" placeholder= "example@email.com" id= "mail"
                            title= {inputMail} value= {inputMail} autoComplete= "on" autoFocus= "on"
                            onChange= {inputMailHandler} style= {{borderColor: (redMail? 'red' : 'black')}} />
                    </div>
                    <motion.input type= "submit" id= "send" value= "Αποστολή κωδικού" 
                        whileHover= {{scale: 1.1}} onClick= {send} />
                    <div id= "tolink">
                        <Link to= "/login">
                            Σύνδεση!
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Forgot;