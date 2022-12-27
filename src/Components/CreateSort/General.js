import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const General = ( {exp, setExp, expIndex, exps, setExps, setPop, created, setCreated} ) => {
    // console.log(exp);
    const [inputName, setInputName] = useState(exp.name);
    const [redName, setRedName] = useState(false);
    const [redType, setRedType] = useState(false);
    
    const [publish, setPublish] = useState(false);

    const inputNameHandler = (e) => {
        setInputName(e.target.value);
        setRedName(false);
    };

    const changeBorder = () => {
        setRedType(false);
    };

    const toPublish = () => {
        setPublish(!publish);
        setExp({...exp, publish: !publish});
    };

    const check = (e) => {
        if (inputName === "") {
            e.preventDefault();
            setRedName(true);
        };
        var el = document.querySelector('select[name="type"] option:checked').value;
        if (el === "") {
            e.preventDefault();
            setRedType(true);
        };
        if (publish) {
            e.preventDefault();
        }
        else {
            var today = new Date();
            var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
            var time = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
            var dateTime= date + ', '+ time;
            setExp({...exp, name: inputName, type: document.getElementById("type").value, datemod: dateTime,
                datestart: document.getElementById("datestart").value,
                datestop: document.getElementById("datestop").value});
        };
    };
    
    const navigate= useNavigate();
    
    const changedata = (e) => {
        e.preventDefault();
        const newExps= Array.from(exps);
        if (created) {
            newExps.push(exp);
            setExps(newExps);

            setPop(5);
            setCreated(false);
            window.history.replaceState('', '', `/dashboard/${exp.exp_id}`);
            navigate(`/dashboard/${exp.exp_id}`);
        }
        else {
            newExps[expIndex]= exp;
            setExps(newExps);

            setPop(6);
        };
    };
    
    useEffect(() => {
        if (publish) {
            document.getElementById('explink').href= `http://localhost:3000/sort/${exp.exp_id}`;
        };
    }, [publish, exp.exp_id]);

    return (
        <form className= "general" id= "containerdscrollbar" onSubmit= {changedata}>
            <div className= "infoside">
                <div className= "infocat">
                    <div className= "infoname">Όνομα πειράματος:</div>
                    <input className= "expform" type= "text"
                        title= {inputName} value= {inputName} autoComplete= "off" disabled= {publish}
                        onChange= {inputNameHandler} style= {{borderColor: (redName? 'red' : 'black')}} />
                </div>
                <div className= "infocat">
                    <div className= "infotype">Είδος Card Sorting:</div>
                    <select name="type" className= "expform" id="type" defaultValue= {exp.type} required 
                        disabled= {publish} style= {{borderColor: (redType? 'red' : 'black')}} onChange= {changeBorder} >
                            <option value="" disabled hidden></option>
                            <option value="open">Open</option>
                            <option value="close">Close</option>
                    </select>
                </div>
            </div>
            <div className= "generateside">
            <div className= "infocat">
                <div className= "infostart">Έναρξη:</div>
                    <input className= "expform" type= "datetime-local" id= "datestart" defaultValue= {exp.datestart} 
                        disabled= {publish} />
                <div className= "infostop">Λήξη:</div>
                    <input className= "expform" type= "datetime-local" id= "datestop" defaultValue= {exp.datestop} 
                        disabled= {publish} />
                </div>
                <div className= "infocat alt">
                    <div id= "alttext">Εναλλακτικά:</div>
                    <button type= "button" id= "publishbutton" onClick= {toPublish}
                        style= {{backgroundColor: (publish ? "Green" : "Red")}}>
                        {publish ? "Απενεργοποίηση Link" : "Ενεργοποίηση Link"}
                    </button>
                </div>
                {publish && <a href= "link" target="_blank" rel="noopener noreferrer" id= "explink">
                    www.sort-it.com/sort/
                    {exp.exp_id}
                </a>}
            </div>
            <div className= "generalbutton">
                <input type= "submit" className= "savebutton" value= "Αποθήκευση" onClick= {check} />
            </div>
        </form>
    )
}

export default General;