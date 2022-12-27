import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Show from '../../Images/show.png';
import Hide from '../../Images/hide.png';

const Settings = ( {user, setUser, setPop} ) => {
    const [inputUser, setInputUser] = useState(user.name);
    const [inputMail, setInputMail] = useState(user.mail);
    const [dispPas, setDispPas] = useState(false);

    const [inputPass, setInputPass] = useState("");
    const [inputPassNew, setInputPassNew] = useState("");
    const [inputPassConf, setInputPassConf] = useState("");
    
    const [line, setLine] = useState(false);
    const [lineNew, setLineNew] = useState(false);
    const [lineConf, setLineConf] = useState(false);
    const [eye, setEye] = useState(true);
    const [eyeNew, setEyeNew] = useState(true);
    const [eyeConf, setEyeConf] = useState(true);
    
    const [pas, setPas] = useState(false);
    const [pasCheck, setPasCheck] = useState(false);
    const [pasConf, setPasConf] = useState(false);

    const [redMail, setRedMail] = useState(false);
    const [redUser, setRedUser] = useState(false);
    const [redPas, setRedPas] = useState(false);
    const [redPasNew, setRedPasNew] = useState(false);
    const [redPasConf, setRedPasConf] = useState(false);

    useEffect(() => {
        if (!(eye === true)) {
            const end= document.querySelector('#psw');
            var len = end.value.length;
            end.focus();
            end.setSelectionRange(len, len);
        };
    }, [eye]);
    
    useEffect(() => {
        if (!(eyeNew === true)) {
            const end= document.querySelector('#pswn');
            var len = end.value.length;
            end.focus();
            end.setSelectionRange(len, len);
        };
    }, [eyeNew]);
    
    useEffect(() => {
        if (!(eyeConf === true)) {
            const end= document.querySelector('#psw2');
            var len = end.value.length;
            end.focus();
            end.setSelectionRange(len, len);
        };
    }, [eyeConf]);
    
    useEffect(() => {
        if ((inputPassNew === inputPassConf) && !(inputPassConf === '') && (inputPassConf.length > 4)) {
            setPasConf(true);
        }
        else {
            setPasConf(false);
        };
    }, [inputPassNew, inputPassConf]);

    const inputUserHandler = (e) => {
        setInputUser(e.target.value);
        setRedUser(false);
    };

    const inputMailHandler = (e) => {
        setInputMail(e.target.value);
        setRedMail(false);
    };
    
    const inputPassHandler = (e) => {
        setInputPass(e.target.value);
        setRedPas(true);

        if (user.password === e.target.value) {
            setPas(true);
        }
        else {
            setPas(false);
        };
    };
    
    const inputPassNewHandler = (e) => {
        setInputPassNew(e.target.value);
    };

    const checkPassword = (e) => {
        var len= inputPassNew.length;
        
        if (e.key === 'Backspace') {
            len= len - 2;
        };

        if (len < 4) {
            setPasCheck(true);
            setRedPasNew(true);
        }
        else {
            setPasCheck(false);
            setRedPasNew(false);
        };
    };
    
    const inputPassConfHandler = (e) => {
        setInputPassConf(e.target.value);
        setRedPasConf(true);
    };

    const changeLine = () => {
        setLine(!line);
    };

    const showPas = () => {
        setEye(!eye);
    };
    
    const changeLineNew = () => {
        setLineNew(!lineNew);
    };

    const showPasNew = () => {
        setEyeNew(!eyeNew);
    };
    
    const changeLineConf = () => {
        setLineConf(!lineConf);
    };

    const showPasConf = () => {
        setEyeConf(!eyeConf);
    };

    const changePasDisp = () => {
        setDispPas(!dispPas);
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
            if (inputUser === "") {
                e.preventDefault();
            };
        };
        if (inputUser === "") {
            setRedUser(true);
        };
    };
    
    const checkpas = (e) => {
        if (inputPass === "") {
            e.preventDefault();
            setRedPas(true);
        };
        if (inputPassNew === "") {
            e.preventDefault();
            setRedPasNew(true);
        };
        if (inputPassConf === "") {
            e.preventDefault();
            setRedPasConf(true);
        };
        if ((pas === false) || (redPasNew === true) || (pasConf === false)) {
            e.preventDefault();
        };
    };

    const changeFormElements = (e) => {
        e.preventDefault();
        setUser({...user, name: inputUser, mail: inputMail});
        setPop(2);
    };
    
    const changePassword = (e) => {
        e.preventDefault();
        setUser({...user, password: inputPassNew});
        setPop(3);
    };

    const deleteaccount = (e) => {
        //
    };

    return (
        <div className= "settings">
            <form className= "connectformside d" onSubmit= {changeFormElements}>
                <div className= "connectforms">
                    <div className= "connectrow s d">
                        <div className= "connectlabel d">Όνομα χρήστη:</div>
                        <input className= "connectform d" type= "text" id= "username"
                            title= {inputUser} value= {inputUser} autoComplete= "off"
                            onChange= {inputUserHandler} style= {{borderColor: (redUser? 'red' : 'black')}} />
                    </div>
                    <div className= "connectrow s d">
                        <div className= "connectlabel d">Email:</div>
                        <input className= "connectform d" type= "email" placeholder= "example@email.com" id= "mail"
                            title= {inputMail} value= {inputMail} autoComplete= "on"
                            onChange= {inputMailHandler} style= {{borderColor: (redMail? 'red' : 'black')}} />
                    </div>
                </div>
                <motion.input type= "submit" className= "connectbuttond" id= "changeset" value= "Αλλαγή στοιχείων" 
                    whileHover= {{scale: 1.1}} onClick= {check} />
                <motion.button type= "button" className= "connectbuttond" id= "changepasdisp" whileHover= {{scale: 1.1}} 
                    onClick= {changePasDisp} >
                        Αλλαγή κωδικού
                </motion.button>
                <motion.button type= "button" className= "connectbuttond" id= "delaccount" whileHover= {{scale: 1.1}} 
                    onClick= {deleteaccount} >
                        Διαγραφή Λογαριασμού
                </motion.button>
            </form>
            {dispPas && <form className= "connectformside p" onSubmit= {changePassword}>
                <div className= "connectforms">
                    <div className= "connectrow s d">
                    <div className= "connectlabel d">Κωδικός:</div>
                        <div className= "passwordform d" style= {{outline: (line ? '1.5px solid white' : 'none'), 
                            borderWidth: (line ? '2px' : '1px'), 
                            borderColor: (redPas ? (pas ? 'green' : 'red') : 'black')}} >
                                <input className= "connectform" type= {eye ? "password" : "text"} id= "psw"
                                    title= {inputPass} value= {inputPass} autoComplete= "off"
                                    onChange= {inputPassHandler}
                                    onFocus= {changeLine} onBlur= {changeLine} />
                                <img src= {eye ? Show : Hide} alt= "Show Password Icon" onClick= {showPas} />
                        </div>
                    </div>
                    <div className= "connectrow s d">
                        <div className= "connectlabel d">Νέος Κωδικός:</div>
                        <div className= "passwordform d" style= {{outline: (lineNew ? '1.5px solid white' : 'none'), 
                            borderWidth: (lineNew ? '2px' : '1px'), borderColor: (redPasNew? 'red' : 'black')}} >
                                <input className= "connectform" type= {eyeNew ? "password" : "text"} id= "pswn"
                                    title= {inputPassNew} value= {inputPassNew} autoComplete= "off"
                                    onChange= {inputPassNewHandler} onKeyDown= {checkPassword}
                                    onFocus= {changeLineNew} onBlur= {changeLineNew} />
                                <img src= {eyeConf ? Show : Hide} alt= "Show Password Icon" onClick= {showPasNew} />
                        </div>
                        {pasCheck && <div id= "pswcheck">Ο κωδικός πρέπει να έχει τουλάχιστον 5 χαρακτήρες!</div>}
                    </div>
                    <div className= "connectrow s d">
                        <div className= "connectlabel d">Επιβεβαίωση Κωδικού:</div>
                        <div className= "passwordform d" style= {{outline: (lineConf ? '1.5px solid white' : 'none'), 
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
                <motion.input type= "submit" className= "connectbuttond" id= "changepas" value= "Αλλαγή κωδικού" 
                    whileHover= {{scale: 1.1}} onClick= {checkpas} />
            </form>}
        </div>
    )
}

export default Settings;