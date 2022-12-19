import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Disk from '../../Images/disk.png';
import Ok from '../../Images/ok.png';
import Greek from '../../Images/greekflag.png';
import UK from '../../Images/ukflag.png';
import Info from '../../Images/info.png';
import Bubble from '../../Images/bubble.png';
import Plus from '../../Images/plus.png';

const Header = ( {changelang, setChangelang, setInstructions, comments, setDispComments, 
    setSure, setPop, setAdd, setCreate,
    cards, cardsInCategory, categories, categoriesOrder} ) => {
    const [enable, setEnable] = useState(true);

    // useEffect(() => {
    //     if (Object.keys(cards).length === 0) {
    //         setEnable(true);
    //     }
    //     else {
    //         setEnable(false);
    //     };
    // }, [cards]);

    const saveProgress = () => {
        window.localStorage.setItem("cards", JSON.stringify(cards));
        window.localStorage.setItem("cardsInCategory", JSON.stringify(cardsInCategory));
        window.localStorage.setItem("categories", JSON.stringify(categories));
        window.localStorage.setItem("categoriesOrder", JSON.stringify(categoriesOrder));
        window.localStorage.setItem("comments", comments);
        console.log(JSON.parse(window.localStorage.getItem("cards")));
        console.log(JSON.parse(window.localStorage.getItem("cardsInCategory")));
        console.log(JSON.parse(window.localStorage.getItem("categories")));
        console.log(JSON.parse(window.localStorage.getItem("categoriesOrder")));
        console.log(window.localStorage.getItem("comments"));
        setPop(1);
    };

    const done = () => {
        if (Object.keys(cards).length === 0){
            setSure(1);
        }
        else {
            setSure(2);
        };
    };

    const changeLanguage = () => {
        changelang ? setChangelang(false) : setChangelang(true);
    };

    const dispinstructions = () => {
        setInstructions(true);
    };

    const dispcomments = () => {
        setDispComments(true);
    };

    const addCategory = () => {
        setAdd(true);
        setCreate(true);
    };

    return ( 
        <div className= "header s">
            <div className= "headercontainer">
                <div className= "headerleft">
                    <span id= "title" title= "Αξιολόγηση1 Σελίδας Sort του Sort-it!">Αξιολόγηση1 Σελίδας Sort του Sort-it!</span>
                </div>
                <div className= "headercenter">
                    <button className= "buttonheader" id= "bsave" onClick= {saveProgress}>
                        <span className= "buttonicons">
                            <img src= {Disk} alt= "Save Icon" style= {{width: '16px', height: '16px'}} />
                        </span> 
                        <span className= "buttontext" id= "save">Αποθήκευση</span>
                    </button>
                    <button className= "buttonheader" id= "bdone" onClick= {done} 
                        data-isenabled= {enable} disabled= {!enable} 
                        style= {{'--subheaderColor': enable ? 'rgb(216, 172, 151)' : 'rgba(228, 210, 202, 1)'}} >
                        <span className= "buttonicons">
                        <img src= {Ok} alt= "Ok Icon" style= {{width: '18px', height: '18px'}} />
                        </span> 
                        <span className= "buttontext" id= "done">Ολοκλήρωση</span>
                    </button>
                </div>
                <div className= "headeright">
                    <span id= "language" onClick= {changeLanguage} lang= {changelang ? "greek" : "english"}
                        title= "Change Language" >
                        {changelang ? 
                            <img src= {Greek} alt= "Greek Flag Icon" lang= "greek"
                                style= {{width: '20px', height: '16px'}} /> 
                        : 
                            <img src= {UK} alt= "UK Flag Icon" lang= "english"
                                style= {{width: '20px', height: '16px'}} />
                        }    
                    </span>
                    <button className= "buttonheader" id= "binstructions" onClick= {dispinstructions}>
                        <span className= "buttonicons">
                            <img src= {Info} alt= "Information Icon" style= {{width: '16px', height: '16px'}} />
                        </span> 
                        <span className= "buttontext" id= "instructions">Οδηγίες</span>
                    </button>
                    <button className= "buttonheader" onClick= {dispcomments}>
                        <span className= "buttonicons"> 
                            <img src= {Bubble} alt= "Comments Icon" style= {{width: '16px', height: '16px'}} />
                        </span>
                        <motion.span className= "buttontext" id= "comments">Σχόλια</motion.span>
                    </button>
                </div>
            </div>
            <div className= "subheader">
                <div className= "nofs">
                    <span id= "nofcards">
                        Cards: ({Object.keys(cards).length + Object.keys(cardsInCategory).length})
                    </span>
                    <span id= "nofcategories">Categories: ({Object.keys(categories).length})</span>
                </div>
                <div className= "progressbar">
                    <div id= "thebar">
                        <span id= "progress" 
                            style= {{width: Math.round(
                                    Object.keys(cardsInCategory).length * 100 / 
                                    (Object.keys(cards).length + Object.keys(cardsInCategory).length)
                                    ) + "%"}}>
                        </span>
                    </div>
                    <div id= "percent">
                        {Math.round(
                        Object.keys(cardsInCategory).length * 100 / 
                        (Object.keys(cards).length + Object.keys(cardsInCategory).length)
                        )}%
                    </div>
                </div>
                <div className= "addcat">
                    <motion.img src= {Plus} id= "plus" alt= "Add Category Icon" onClick= {addCategory} 
                        style= {{width: '20px', height: '20px'}} whileHover= {{scale: 1.1}} />
                    <span id= "addcattext">
                        Προσθήκη κατηγορίας
                    </span>
                </div>
            </div>
        </div>
     )
}
 
export default Header;