import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PinBlue from '../../Images/pinblue.png';
import Show from '../../Images/show.png';
import Hide from '../../Images/hide.png';
import Connect from '../../Images/greenflip.png';

const SignUp = ( {setPop} ) => {
    const [inputMail, setInputMail] = useState("");
    const [inputUser, setInputUser] = useState("");
    const [inputPass, setInputPass] = useState("");
    const [inputPassConf, setInputPassConf] = useState("");
    
    const [line, setLine] = useState(false);
    const [lineConf, setLineConf] = useState(false);
    const [eye, setEye] = useState(true);
    const [eyeConf, setEyeConf] = useState(true);
    
    const [pasCheck, setPasCheck] = useState(false);
    const [pasConf, setPasConf] = useState(false);

    const [redMail, setRedMail] = useState(false);
    const [redUser, setRedUser] = useState(false);
    const [redPas, setRedPas] = useState(false);
    const [redPasConf, setRedPasConf] = useState(false);

    useEffect(() => {
        if (!(inputPass === "")) {
            const end= document.querySelector('#psw');
            var len = end.value.length;
            end.focus();
            end.setSelectionRange(len, len);
        };
    }, [eye]);
    
    useEffect(() => {
        if (!(inputPassConf === "")) {
            const end= document.querySelector('#psw2');
            var len = end.value.length;
            end.focus();
            end.setSelectionRange(len, len);
        };
    }, [eyeConf]);

    const inputMailHandler = (e) => {
        setInputMail(e.target.value);
        setRedMail(false);
    };
    
    const inputUserHandler = (e) => {
        setInputUser(e.target.value);
        setRedUser(false);
    };
    
    const inputPassHandler = (e) => {
        setInputPass(e.target.value);
    };

    const checkPassword = (e) => {
        var len= inputPass.length;
        
        if (e.key === 'Backspace') {
            len= len - 2;
        };

        if (len < 4) {
            setPasCheck(true);
            setRedPas(true);
        }
        else {
            setPasCheck(false);
            setRedPas(false);
        };
    };
    
    const inputPassConfHandler = (e) => {
        setInputPassConf(e.target.value);
        setRedPasConf(true);

        if (inputPass === e.target.value) {
            setPasConf(true);
        }
        else {
            setPasConf(false);
        };
    };

    const changeLine = () => {
        setLine(!line);
    };

    const showPas = () => {
        setEye(!eye);
    };
    
    const changeLineConf = () => {
        setLineConf(!lineConf);
    };

    const showPasConf = () => {
        setEyeConf(!eyeConf);
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
            if ((inputUser === "") || (inputPass === "") || (inputPassConf === "")) {
                e.preventDefault();
            };
        };
        if (inputUser === "") {
            setRedUser(true);
        };
        if (inputPass === "") {
            setRedPas(true);
        };
        if (inputPassConf === "") {
            setRedPasConf(true);
        };
    };

    const gotoLogin = (e) => {
        e.preventDefault();
        setPop(1);
        setTimeout(function() {
            window.location.pathname= "/login";
        }, 1300);
    };

    return (
        <div className= "connect">
            <img src= {PinBlue} alt= "Pin Icon" />
            <div className= "connectcont s">
                <form className= "connectformside s" onSubmit= {gotoLogin}>
                    <div className= "connectforms">
                        <div className= "connectrow s">
                            <div className= "connectlabel">Email:</div>
                            <input className= "connectform" type= "email" placeholder= "example@email.com" id= "mail"
                                title= {inputMail} value= {inputMail} autoComplete= "on" autoFocus= "on"
                                onChange= {inputMailHandler} style= {{borderColor: (redMail? 'red' : 'black')}} />
                        </div>
                        <div className= "connectrow s">
                            <div className= "connectlabel">Όνομα χρήστη:</div>
                            <input className= "connectform" type= "text" id= "username"
                                title= {inputUser} value= {inputUser} autoComplete= "off"
                                onChange= {inputUserHandler} style= {{borderColor: (redUser? 'red' : 'black')}} />
                        </div>
                        <div className= "connectrow s">
                            <div className= "connectlabel">Κωδικός:</div>
                            <div className= "passwordform" style= {{outline: (line ? '1.5px solid white' : 'none'), 
                                borderWidth: (line ? '2px' : '1px'), borderColor: (redPas? 'red' : 'black')}} >
                                    <input className= "connectform" type= {eye ? "password" : "text"} id= "psw"
                                        title= {inputPass} value= {inputPass} autoComplete= "off"
                                        onChange= {inputPassHandler} onKeyDown= {checkPassword}
                                        onFocus= {changeLine} onBlur= {changeLine} />
                                    <img src= {eye ? Show : Hide} alt= "Show Password Icon" onClick= {showPas} />
                            </div>
                            {pasCheck && <div id= "pswcheck">Ο κωδικός πρέπει να έχει τουλάχιστον 5 χαρακτήρες!</div>}
                        </div>
                        <div className= "connectrow s">
                            <div className= "connectlabel">Επιβεβαίωση Κωδικού:</div>
                            <div className= "passwordform" style= {{outline: (lineConf ? '1.5px solid white' : 'none'), 
                                borderWidth: (lineConf ? '2px' : '1px'), 
                                borderColor: (redPasConf ? (pasConf ? 'green' : 'red') : 'black')}} >
                                    <input className= "connectform" type= {eyeConf ? "password" : "text"} id= "psw2"
                                        title= {inputPassConf} value= {inputPassConf} autoComplete= "off"
                                        onChange= {inputPassConfHandler} 
                                        onFocus= {changeLineConf} onBlur= {changeLineConf} />
                                    <img src= {eyeConf ? Show : Hide} alt= "Show Password Icon" onClick= {showPasConf} />
                            </div>
                        </div>
                    </div>
                    <motion.input type= "submit" className= "s" id= "connectbutton" value= "Εγγραφή" 
                        whileHover= {{scale: 1.1}} onClick= {check} />
                    <div id= "tolink">
                        Έχω ήδη λογαριασμό:&nbsp;
                        <Link to= "/login">
                            Σύνδεση
                        </Link>
                    </div>
                </form>
                <div className= "changeroute s">
                    <div className= "smallpostit">
                        <img src= {Connect} alt= "Sign Up Icon" />
                        <div className= "smalltext" style= {{fontWeight: 'bold', cursor: "default"}}>
                            Εγγραφή
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;