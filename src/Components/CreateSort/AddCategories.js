import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Sure from './SureC';
import Add from '../../Images/add.png';
import WhiteAdd from '../../Images/whiteadd.png';
import Delete from '../../Images/delete.png';
import Plus from '../../Images/plus.png';
import WhitePlus from '../../Images/whiteplus.png';
import x from '../../Images/x.png';

const AddCategories = ( {exp, setExp, expIndex, exps, setExps, setPop} ) => {
    var thecategories= Object.values(exp.categories).map(category => {
        // console.log(category);
        return category;
    });
    const [categories, setCategories] = useState(thecategories);
    const [duplicate, setDuplicate] = useState(false);
    const [empty, setEmpty] = useState(false);
    const exist= ": Η κατηγορία υπάρχει ήδη!"
    // console.log(categories);

    const [dispImportCategories, setDispImportCategories] = useState(false);
    const [inputCategories, setInputCategories] = useState("");
    const [redCategories, setRedCategories] = useState(false);

    const [over1, setOver1] = useState(false);
    const [over2, setOver2] = useState(false);

    const [dispAddaCategory, setDispAddaCategory] = useState(false);
    const [inputCategory, setInputCategory] = useState("");
    const [redCategory, setRedCategory] = useState(false);

    const [sure, setSure] = useState();

    document.body.onpointerdown= (e) => {
        if (e.target.getAttribute('data-inadd')) {
            return;
        };
        setInputCategory("");
        setRedCategory(false);
        setDispAddaCategory(false);
    };
    
    useEffect(() => {
        // console.log(categories);
        
        var finalcategory= {};
        var finalcategories= {};
        categories.map((item, index) => {
            finalcategory=  {[`category-${index + 1}`] : 
                { category_id: `category-${index + 1}`, category_name: item.category_name}};
            finalcategories= {...finalcategories, ...finalcategory};
            return finalcategories;
        });

        // console.log(finalcategories);
        var today = new Date();
        var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
        var time = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
        var dateTime= date + ', '+ time;
        setExp({...exp, datemod: dateTime, categories: finalcategories});
    }, [categories]);

    useEffect(() => {
        const newExps= Array.from(exps);
        newExps[expIndex]= exp;
        setExps(newExps);
    }, [exp]);

    const importCategories = () => {
        setDispImportCategories(true);
    };

    const inputCategoriesHandler = (e) => {
        setInputCategories(e.target.value);
        setRedCategories(false);
        setDuplicate(false);
        setEmpty(false);
    };

    const reset = () => {
        setInputCategory(inputCategory.replace(exist, ""));
    };

    const checkall = (e) => {
        var importedCategories= inputCategories.replace(/\s/g,'').split(",");
        // console.log(importedCategories);
        if (importedCategories.includes('')) {
            e.preventDefault();
            setRedCategories(true);
            setEmpty(true);
        }
        else if ((new Set(importedCategories)).size !== importedCategories.length) {
            e.preventDefault();
            setRedCategories(true);
            setDuplicate(true);
        }
        else {
            var newCategories= [];
            importedCategories.map((item, index) => {
                var newCategory= { category_id: `category-${index + 1}`, category_name: item};
                newCategories= [...newCategories, newCategory];
                return newCategories;
            });
            setCategories(newCategories);
        };
    };

    const addtheCategories = (e) => {
        e.preventDefault();
        setInputCategories("");
        setDispImportCategories(false);
        
        const newExps= Array.from(exps);
        newExps[expIndex]= exp;
        setExps(newExps);
        
        setPop(8);
    };

    const cancelImport = () => {
        setDispImportCategories(false);
        setInputCategories("");
        setRedCategories(false);
        setDuplicate(false);
        setEmpty(false);
    };

    const deleteAll = () => {
        setSure(2);
    };

    const addaCategory = () => {
        setDispAddaCategory(true);
    };

    const inputCategoryHandler = (e) => {
        setInputCategory(e.target.value);
        setRedCategory(false);
    };

    const check = (e) => {
        if ((inputCategory === "")) {
            e.preventDefault();
            setRedCategory(true);
        }
        else {
            if (redCategory) {
                e.preventDefault();
                setInputCategory(inputCategory.replace(exist,'') + exist);
            }
            else {
                var checkValues= [];
                categories.map((category) => {
                    return checkValues= [...checkValues, category.category_name];
                });
                if (checkValues.includes(inputCategory)) {
                    e.preventDefault();
                    setRedCategory(true);
                    e.target.parentNode.childNodes[0].blur();
                    setInputCategory(inputCategory + exist);
                }
                else {
                    const newCategory= {category_id: `category-${categories.length + 1}`, category_name: inputCategory};
                    // console.log(newCard);
                    setCategories([...categories, newCategory]);
                };
            }
        };
    };

    const addtheCategory = (e) => {
        e.preventDefault();
        setInputCategory("");
        setDispAddaCategory(false);
        
        const newExps= Array.from(exps);
        newExps[expIndex]= exp;
        setExps(newExps);

        setPop(7);
    };

    const updateStates = () => {
        var el = document.querySelector('input[name="randomizecards"]:checked');
        var rand= true;
        if (el === null) {
            rand= false;
        }
        else {
            rand= true;
        };
        var today = new Date();
        var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
        var time = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
        var dateTime= date + ', '+ time;
        setExp({...exp, datemod: dateTime, randomizecategories: rand});
    };

    const updatetheStates = (e) => {
        e.preventDefault();

        const newExps= Array.from(exps);
        newExps[expIndex]= exp;
        setExps(newExps);

        setPop(9);
    };

    const deleteCategory = (index) => {
        const newCategories= Array.from(categories);
        newCategories.splice(index, 1);
        setCategories(newCategories);

        setPop(4);
    };

    return (
        <div className= "addcards" id= "containerdscrollbar">
            <div className= "cardsside">
                <div className= "cardsheader">
                    <button className= "cardsbutton" id= "importcards" onClick= {importCategories}
                        onMouseOver= {() => setOver1(true)} onMouseOut= {() => setOver1(false)} >
                            <span>Ανέβασμα</span>
                            <img src= {over1? Add : WhiteAdd} alt= "Add Multiple Icon" />
                    </button>
                    <div id= "totalcards">
                        #
                        <span id= "totalcardstext" >
                            No:&nbsp;
                        </span>
                        {categories.length}
                        <div className= "iconhover" onClick= {deleteAll}>
                                <img src= {Delete} alt= "Delete Icon" />
                        </div>
                    </div>
                    <button className= "cardsbutton" id= "addcards" onClick= {addaCategory} data-inadd= {true}
                        onMouseOver= {() => setOver2(true)} onMouseOut= {() => setOver2(false)} >
                            <span>Προσθήκη</span>
                            <img src= {over2? Plus : WhitePlus} alt= "Add Icon" />
                    </button>
                </div>
                <div className= "cardsbody" id= "containerdscrollbar">
                    {dispImportCategories && <form className= "importcards" onSubmit= {addtheCategories}>
                        <div className= "importcardscontainer">
                            <div id= "importcardsinfo">
                                Προσθέστε τα ονόματα κατηγοριών διαχωρισμένα με&nbsp;
                                <span style= {{fontWeight: "bold"}}>
                                    κόμματα
                                </span>.
                                <br/>
                                <span style= {{fontWeight: "bold"}}>
                                    ΠΡΟΣΟΧΗ:&nbsp;
                                </span>
                                Οι κατηγορίες αυτές θα αντικαταστήσουν τις υπάρχουσες!
                            </div>
                            <textarea className= "taskstextarea" id= "containerdscrollbar" 
                                placeholder= "π.χ.: Κάρτα1, Κάρτα2, Κάρτα3, κλπ..." value= {inputCategories} 
                                autoComplete= "off" autoFocus= "on" onChange= {inputCategoriesHandler} 
                                style= {{color: (redCategories? 'red' : 'black'), 
                                    borderColor: (redCategories? 'red' : 'black')}} >
                            </textarea>
                            {duplicate && <div id= "duplicated">
                                Υπάρχουν διπλότυπα ονόματα κατηγοριών!
                            </div>}
                            {empty && <div id= "duplicated">
                                Υπάρχουν κενές κατηγορίες!
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
                    {dispAddaCategory && <form className= "addacard" data-inadd= {true} onSubmit= {addtheCategory}>
                        <input className= "expform" type= "text" title= {inputCategory} value= {inputCategory} 
                            autoComplete= "off" autoFocus= "on" onChange= {inputCategoryHandler} onClick= {reset}
                            style= {{color: (redCategory? 'red' : 'black'), borderColor: (redCategory? 'red' : 'black')}} data-inadd= {true} />
                        <input type= "submit" className= "savecardbutton" value= "Αποθήκευση" onClick= {check} 
                            data-inadd= {true} />
                    </form>}
                    {categories.map((category, index) => {
                        return (
                            <div key= {category.category_id} className= "addedcard">
                                <span>{category.category_name}</span>
                                <div id= "deletecardicon" onClick= {() => deleteCategory(index)}>
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
                                defaultChecked= {exp.randomizecategories} />
                        <label htmlFor= "randomizecards">
                            Εμφάνιση σειράς κατηγοριών σε τυχαία σειρά.
                        </label>
                    </div>
                    <input type= "submit" className= "savecardbutton" value= "Ενημέρωση" onClick= {updateStates} />
                </form>
            </div>
            <AnimatePresence>
                {sure && <Sure setCategories= {setCategories} sure= {sure} setSure= {setSure} setPop= {setPop} />}
            </AnimatePresence>
        </div>
    )
}

export default AddCategories;