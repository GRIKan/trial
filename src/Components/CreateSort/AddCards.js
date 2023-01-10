import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Sure from './SureC';
import Add from '../../Images/add.png';
import WhiteAdd from '../../Images/whiteadd.png';
import Delete from '../../Images/delete.png';
import Plus from '../../Images/plus.png';
import WhitePlus from '../../Images/whiteplus.png';
import x from '../../Images/x.png';

const AddCards = ( {exp, setExp, expIndex, exps, setExps, setPop} ) => {
    var thecards= Object.values(exp.cards).map(card => {
        // console.log(card);
        return card;
    });
    const [cards, setCards] = useState(thecards);
    const [duplicate, setDuplicate] = useState(false);
    const [empty, setEmpty] = useState(false);
    const exist= ": Η κάρτα υπάρχει ήδη!"
    // console.log(cards);

    const [dispImportCards, setDispImportCards] = useState(false);
    const [inputCards, setInputCards] = useState("");
    const [redCards, setRedCards] = useState(false);

    const [over1, setOver1] = useState(false);
    const [over2, setOver2] = useState(false);

    const [dispAddaCard, setDispAddaCard] = useState(false);
    const [inputCard, setInputCard] = useState("");
    const [redCard, setRedCard] = useState(false);

    const [sure, setSure] = useState();

    document.body.onpointerdown= (e) => {
        if (e.target.getAttribute('data-inadd')) {
            return;
        };
        setInputCard("");
        setRedCard(false);
        setDispAddaCard(false);
    };
    
    useEffect(() => {
        // console.log(cards);
        
        var finalcards= {};
        var finalcard= {};
        cards.map((item, index) => {
            finalcard=  {[`card-${index + 1}`] : 
                { id: `card-${index + 1}`, name: item.name}};
            finalcards= {...finalcards, ...finalcard};
            return finalcards;
        });

        // console.log(finalcards);
        var today = new Date();
        var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
        var time = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
        var dateTime= date + ', '+ time;
        setExp({...exp, datemod: dateTime, cards: finalcards});
    }, [cards]);

    useEffect(() => {
        const newExps= Array.from(exps);
        newExps[expIndex]= exp;
        setExps(newExps);
    }, [exp]);

    const importCards = () => {
        setDispImportCards(true);
    };

    const inputCardsHandler = (e) => {
        setInputCards(e.target.value);
        setRedCards(false);
        setDuplicate(false);
        setEmpty(false);
    };

    const reset = () => {
        setInputCard(inputCard.replace(exist, ""));
    };

    const checkall = (e) => {
        var importedCards= inputCards.replace(/\s/g,'').split(",");
        // console.log(importedCards);
        if (importedCards.includes('')) {
            e.preventDefault();
            setRedCards(true);
            setEmpty(true);
        }
        else if ((new Set(importedCards)).size !== importedCards.length) {
            e.preventDefault();
            setRedCards(true);
            setDuplicate(true);
        }
        else {
            var newCards= [];
            importedCards.map((item, index) => {
                var newCard= { id: `card-${index + 1}`, name: item};
                newCards= [...newCards, newCard];
                return newCards;
            });
            setCards(newCards);
        };
    };

    const addtheCards = (e) => {
        e.preventDefault();
        setInputCards("");
        setDispImportCards(false);
        
        const newExps= Array.from(exps);
        newExps[expIndex]= exp;
        setExps(newExps);
        
        setPop(8);
    };

    const cancelImport = () => {
        setDispImportCards(false);
        setInputCards("");
        setRedCards(false);
        setDuplicate(false);
        setEmpty(false);
    };

    const deleteAll = () => {
        if (!exp.publish) {
            setSure(1);
        };
    };

    const addaCard = () => {
        setDispAddaCard(true);
    };

    const inputCardHandler = (e) => {
        setInputCard(e.target.value);
        setRedCard(false);
    };

    const check = (e) => {
        if ((inputCard === "")) {
            e.preventDefault();
            setRedCard(true);
        }
        else {
            if (redCard) {
                e.preventDefault();
                setInputCard(inputCard.replace(exist,'') + exist);
            }
            else {
                var checkValues= [];
                cards.map((card) => {
                    return checkValues= [...checkValues, card.name];
                });
                if (checkValues.includes(inputCard)) {
                    e.preventDefault();
                    setRedCard(true);
                    e.target.parentNode.childNodes[0].blur();
                    setInputCard(inputCard + exist);
                }
                else {
                    const newCard= {id: `card-${cards.length + 1}`, name: inputCard};
                    setCards([...cards, newCard]);
                };
            }
        };
    };

    const addtheCard = (e) => {
        e.preventDefault();
        setInputCard("");
        setDispAddaCard(false);
        
        const newExps= Array.from(exps);
        newExps[expIndex]= exp;
        setExps(newExps);

        setPop(7);
    };

    const updateStates = () => {
        var el1 = document.querySelector('input[name="randomizecards"]:checked');
        var el2 = document.querySelector('input[name="unsorted"]:checked');
        var rand= true;
        var unsort= false;
        if (el1 === null) {
            rand= false;
        }
        else {
            rand= true;
        };
        if (el2 === null) {
            unsort= false;
        }
        else {
            unsort= true;
        };
        var today = new Date();
        var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
        var time = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
        var dateTime= date + ', '+ time;
        setExp({...exp, datemod: dateTime, randomizecards: rand, unsorted: unsort});
    };

    const updatetheStates = (e) => {
        e.preventDefault();

        const newExps= Array.from(exps);
        newExps[expIndex]= exp;
        setExps(newExps);

        setPop(9);
    };

    const deleteCard = (index) => {
        if (!exp.publish) {
            const theNew= [];
            const newCards= Array.from(cards);
            newCards.splice(index, 1);
            newCards.map((item, index) => {
                theNew.push({id: `card-${index + 1}`, name: item.name});
                return item;
            });
            setCards(theNew);
    
            setPop(4);
        };
    };

    return (
        <div className= "addcards" id= "containerdscrollbar">
            <div className= "cardsside">
                <div className= "cardsheader">
                    <button className= "cardsbutton" id= "importcards" onClick= {importCards}
                        onMouseOver= {() => setOver1(true)} onMouseOut= {() => setOver1(false)} disabled= {exp.publish} >
                            <span>Ανέβασμα</span>
                            <img src= {(over1 && !exp.publish)? Add : WhiteAdd} alt= "Add Multiple Icon" />
                    </button>
                    <div id= "totalcards">
                        #
                        <span id= "totalcardstext" >
                            No:&nbsp;
                        </span>
                        {cards.length}
                        <div className= "iconhover" onClick= {deleteAll} data-isdisabled= {exp.publish} 
                            title= "Διαγραφή όλων">
                                <img src= {Delete} alt= "Delete Icon" />
                        </div>
                    </div>
                    <button className= "cardsbutton" id= "addcards" onClick= {addaCard} data-inadd= {true}
                        onMouseOver= {() => setOver2(true)} onMouseOut= {() => setOver2(false)} disabled= {exp.publish} >
                            <span>Προσθήκη</span>
                            <img src= {(over2 && !exp.publish)? Plus : WhitePlus} alt= "Add Icon" />
                    </button>
                </div>
                <div className= "cardsbody" id= "containerdscrollbar">
                    {dispImportCards && <form className= "importcards" onSubmit= {addtheCards}>
                        <div className= "importcardscontainer">
                            <div id= "importcardsinfo">
                                Προσθέστε τα ονόματα καρτών διαχωρισμένα με&nbsp;
                                <span style= {{fontWeight: "bold"}}>
                                    κόμματα
                                </span>.
                                <br/>
                                <span style= {{fontWeight: "bold"}}>
                                    ΠΡΟΣΟΧΗ:&nbsp;
                                </span>
                                Οι κάρτες αυτές θα αντικαταστήσουν τις υπάρχουσες!
                            </div>
                            <textarea className= "taskstextarea" id= "containerdscrollbar" 
                                placeholder= "π.χ.: Κάρτα1, Κάρτα2, Κάρτα3, κλπ..." value= {inputCards} 
                                autoComplete= "off" autoFocus= "on" onChange= {inputCardsHandler} 
                                style= {{color: (redCards? 'red' : 'black'), borderColor: (redCards? 'red' : 'black')}} >
                            </textarea>
                            {duplicate && <div id= "duplicated">
                                Υπάρχουν διπλότυπα ονόματα καρτών!
                            </div>}
                            {empty && <div id= "duplicated">
                                Υπάρχουν κενές κάρτες!
                            </div>}
                            <div className= "importcardsbuttons">
                                <input type= "submit" className= "importcardsbutton" id= "savecardsbutton" 
                                    value= "Αποθήκευση" onClick= {checkall} />
                                <button type= "button" className= "importcardsbutton" id= "cancelimport" 
                                    onClick= {cancelImport} >
                                    Ακύρωση
                                </button>
                            </div>
                        </div>
                    </form>}
                    {dispAddaCard && <form className= "addacard" data-inadd= {true} onSubmit= {addtheCard}>
                        <input className= "expform" type= "text" title= {inputCard} value= {inputCard} 
                            autoComplete= "off" autoFocus= "on" onChange= {inputCardHandler} onClick= {reset}
                            style= {{color: (redCard? 'red' : 'black'), borderColor: (redCard? 'red' : 'black')}} data-inadd= {true} />
                        <input type= "submit" className= "savecardbutton" value= "Αποθήκευση" onClick= {check} 
                            data-inadd= {true} />
                    </form>}
                    {cards.map((card, index) => {
                        return (
                            <div key= {card.id} className= "addedcard">
                                <span>{card.name}</span>
                                <div id= "deletecardicon" onClick= {() => deleteCard(index)} title= "Διαγραφή κάρτας"
                                    data-isdisabled= {exp.publish} >
                                        <img src= {x} alt= "Delete Card Icon" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>       
            <div className= "settingsside">
                <form className= "settingscontainer" onSubmit= {updatetheStates}>
                    <div className= "settingscheckbox">
                        <input type="checkbox" id="randomizecards" name="randomizecards" value="randomizecards" 
                                defaultChecked= {exp.randomizecards} disabled= {exp.publish} />
                        <label htmlFor= "randomizecards">
                            Εμφάνιση σειράς καρτών σε τυχαία σειρά.
                        </label>
                    </div>
                    <div className= "settingscheckbox">
                        <input type="checkbox" id="unsorted" name="unsorted" value="unsorted" 
                                defaultChecked= {exp.unsorted} disabled= {exp.publish} />
                        <label htmlFor= "unsorted">
                            Να επιτρέπονται μη ταξινομημένες κάρτες.
                        </label>
                    </div>
                    <input type= "submit" className= "savecardbutton" value= "Ενημέρωση" onClick= {updateStates} 
                        disabled= {exp.publish} />
                </form>
            </div>
            <AnimatePresence>
                {sure && <Sure setCards= {setCards} sure= {sure} setSure= {setSure} setPop= {setPop} />}
            </AnimatePresence>
        </div>
    )
}

export default AddCards;