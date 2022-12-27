import React, { useState } from 'react';

const Options = ( {exp, setExp, expIndex, exps, setExps, setPop} ) => {
    const [inputTasks, setInputTasks] = useState(exp.instructions);
    const [inputBye, setInputBye] = useState(exp.goodbye[1]);
    const [redTasks, setRedTasks] = useState(false);
    const [redBye, setRedBye] = useState(false);

    var Byeoption;

    const inputTasksHandler = (e) => {
        setInputTasks(e.target.value);
        setRedTasks(false);
    };
    
    const inputByeHandler = (e) => {
        setInputBye(e.target.value);
        setRedBye(false);
    };

    const check = (e) => {
        if (inputTasks === "") {
            e.preventDefault();
            setRedTasks(true);
        };
        var el = document.querySelector('input[name="byemessage"]:checked');
        if ((el === null) && (inputBye === "")) {
            setRedBye(true);
        };
        if ((el !== null) && (inputBye !== "")) {
            e.preventDefault();
            setRedBye(true);
        };
        var today = new Date();
        var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
        var time = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
        var dateTime= date + ', '+ time;
        if (el === null ) {
            Byeoption= false;
        }
        else {
            Byeoption= true;
        };
        setExp({...exp, datemod: dateTime, instructions: inputTasks, goodbye: [Byeoption, inputBye]});
    };

    const changedata = (e) => {
        e.preventDefault();
        const newExps= Array.from(exps);
        newExps[expIndex]= exp;
        setExps(newExps);

        setPop(6);
    };

    return (
        <form className= "options" id= "containerdscrollbar" onSubmit= {changedata}>
            <div className= "thetextareas">
                <div className= "optionarea" id="tasksside">
                    <div className= "optionstitle">Οδηγίες πειράματος:</div>
                    <textarea className= "taskstextarea" id= "containerdscrollbar" placeholder= "Εισαγωγή οδηγιών..." 
                        title= {inputTasks} value= {inputTasks} autoComplete= "off" onChange= {inputTasksHandler} 
                        style= {{borderColor: (redTasks? 'red' : 'black')}} >
                    </textarea>
                    <div id= "tasksinfo">
                        *Οι οδηγίες πειράματος θα εμφανιστούν στους συμμετέχοντες σε ένα αρχείο κειμένου που θα κατέβει στον υπολογιστή τους. Οι διαθέσιμες γλώσσες είναι ελληνικά και αγγλικά, οπότε ανάλογα με το που απευθύνεστε μπορείτε να επιλέξετε να δώσετε τις οδηγίες σας σε μια ή και στις δυο γλώσσες.
                    </div>
                </div>
                <div className= "optionarea" id= "thankyouside">
                    <div className= "optionstitle" id= "endtitle">Στο τέλος του πειράματος</div>
                    <div className= "bye">
                        <input type="checkbox" id="byemessage" name="byemessage" value="byemessage" 
                            defaultChecked= {exp.goodbye[0]} required= {redBye} />
                        <label htmlFor= "byemessage" style= {{color: (redBye? 'red' : 'black')}}>
                            Εμφάνιση μηνύματος τέλους.
                        </label>
                    </div>
                    <div className= "optionstitle">ή</div>
                    <div id= "byelinktitle">Ορισμός ιστοσελίδας για μετάβαση:</div>
                    <input className= "expform" type= "text"
                        title= {inputBye} value= {inputBye} autoComplete= "off" onChange= {inputByeHandler}
                        style= {{borderColor: (redBye? 'red' : 'black')}} />
                </div>
            </div>
            <div className= "generalbutton">
                <input type= "submit" className= "savebutton" value= "Αποθήκευση" onClick= {check} />
            </div>
        </form>
    )
}

export default Options;