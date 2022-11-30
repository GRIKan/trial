import React, { useState } from 'react';
import { motion } from 'framer-motion';

const createVariants = {
    initial: {
        scale: 0
    },
    animate: {
        scale: 1,
        transition: { duration: 0.3 }
    },
    exit: {
        scale: 0, 
        transition: { duration: 0.2 }
    }
}

const Create = ( {setCreate, changelang, add, setAdd, drop, out, 
    newId1, newId2, oldCategory, oldIndex, dataCard, dataPosition, setPop, 
    cards, cardsInCategory, categories, categoriesOrder, 
    setCards, setCardsInCategory, setCategories, setCategoriesOrder} ) => {
        const [inputText, setInputText] = useState("");
        const [red, setRed] = useState(false);
        const [visible, setVisible] = useState(false);

        const inputTextHandler = (e) => {
            setInputText(e.target.value);
            
            setRed(false);
            // e.target.style.color= 'black';
            // e.target.style.borderColor= 'black';
        };

        const selectText = (e) => {
            e.target.select();
        };
        
        const resetForm = (e) => {
            // e.target.parentNode.childNodes[1].style.display= 'none';
            setVisible(false);
            e.target.removeAttribute("id");
            if (inputText === "") {
                // e.target.style.borderColor= 'black';
                setRed(false);
            }
        };

        const pressedKey = (e) => {
            if (e.key === 'Escape') {
                close();
            };

            if (e.key === 'Enter') {
                e.target.blur()
                submitText(e);
            };
        };

        const close = (e) => {
            setInputText("");
            setAdd(false);
            setCreate(false);
            // e.target.parentNode.parentNode.parentNode.parentNode.style.display= 'none';
            // document.querySelector('.create').style.display= 'none';

            // e.target.parentNode.parentNode.childNodes[0].style.borderColor= 'black';
            // e.target.parentNode.parentNode.childNodes[0].removeAttribute("id");
        };

        const error = (type) => {
            // document.querySelector('.form').style.borderColor= 'red';
            setRed(true);
            // document.querySelector('.createform').setAttribute('id', "placeholder");
            if (type === 2) {
                // document.querySelector('.form').style.color= 'red';
                setVisible(true);
                // document.querySelector('#tooltipcreate').style.display= 'block';
            };
        };

        const submitText = (e) => {
            e.preventDefault();
            document.getSelection().removeAllRanges();
            if (inputText === "") {
                error(1);
            }
            else {
                var checkValues= [];
                Object.values(categories).map((category) => {
                    return checkValues= [...checkValues, category.name];
                });
                if (checkValues.includes(inputText)) {
                    error(2);
                }
                else {
                    if (add === true) {
                        const newCategoryId= `category-${Object.keys(categories).length + 1}`;
                        const newCategory= { [newCategoryId] : { id: newCategoryId, name: inputText, cardId: [] }};
                        setCategories({...categories, ...newCategory});
                        
                        const newCategoriesOrder= Array.from(categoriesOrder.order);
                        const length= newCategoriesOrder.length;
                        newCategoriesOrder.splice(length, 0, newCategoryId);
                        setCategoriesOrder({...categoriesOrder, order: newCategoriesOrder});

                        setAdd(false);
                    }
                    else if (drop === false) {
                        const newId= dataCard;
                        const newCard= cards[newId];
                        
                        const newCards= {...cards};
                        delete newCards[newId];
                        setCards({...newCards});
                        
                        setCardsInCategory({...cardsInCategory, [newId]: newCard});
                        
                        const newCategoryId= `category-${Object.keys(categories).length + 1}`;
                        const newCategory= { [newCategoryId] : { id: newCategoryId, name: inputText, cardId: [newId] }};
                        setCategories({...categories, ...newCategory});
                        
                        const newCategoriesOrder= Array.from(categoriesOrder.order);
                        const length= newCategoriesOrder.length;
                        newCategoriesOrder.splice(length, 0, newCategoryId);
                        setCategoriesOrder({...categoriesOrder, order: newCategoriesOrder});
                    }
                    else if (out === true) {
                        const newCard2= cards[newId2];
                        
                        const Category= categories[oldCategory];
                        const newCardId= Array.from(Category.cardId);
                        newCardId.splice(oldIndex, 1);
                        const newOldCategory= {...Category, cardId: newCardId};
                        // setCategories({...categories, [Category.id]: newOldCategory});

                        const newCards= {...cards};
                        delete newCards[newId2];
                        setCards({...newCards});

                        setCardsInCategory({...cardsInCategory, [newId2]: newCard2});

                        const newCategoryId= `category-${Object.keys(categories).length + 1}`;
                        const newCategory= { [newCategoryId] : 
                            { id: newCategoryId, name: inputText, cardId: [newId1, newId2] }};
                        setCategories({...categories, [Category.id]: newOldCategory, ...newCategory});

                        const newCategoriesOrder= Array.from(categoriesOrder.order);
                        const length= newCategoriesOrder.length;
                        newCategoriesOrder.splice(length, 0, newCategoryId);
                        setCategoriesOrder({...categoriesOrder, order: newCategoriesOrder});
                    }
                    else {
                        const newCard1= cards[newId1];
                        const newCard2= cards[newId2];

                        const newCards= {...cards};
                        delete newCards[newId1];
                        delete newCards[newId2];
                        setCards({...newCards});

                        setCardsInCategory({...cardsInCategory, [newId1]: newCard1, [newId2]: newCard2});

                        const newCategoryId= `category-${Object.keys(categories).length + 1}`;
                        const newCategory= { [newCategoryId] : 
                            { id: newCategoryId, name: inputText, cardId: [newId1, newId2] }};
                        setCategories({...categories, ...newCategory});
                        
                        const newCategoriesOrder= Array.from(categoriesOrder.order);
                        const length= newCategoriesOrder.length;
                        newCategoriesOrder.splice(length, 0, newCategoryId);
                        setCategoriesOrder({...categoriesOrder, order: newCategoriesOrder});
                    };                
                    setInputText("");
                    handledisplay();
                };
            };

        };

        const handledisplay = () => {
            // document.querySelector('.create').style.display= 'none';
            // const position= document.querySelector('.create').getAttribute('data-position');
            setCreate(false);
            setPop(4);

            const position= dataPosition;
            document.querySelector('#scrollbar').scrollTo({
                top: position,
                behavior: "smooth"
            });
            // document.querySelector('.popup').style.display= 'flex';

            // const cats= document.querySelectorAll('.category');
            // console.log(cats);
            // if (cats.length === 0) {
            //     document.querySelector('#scrollbar').scrollTo({
            //         top: 0,
            //         behavior: "smooth"
            //     });
            //     return;
            // }
            // else {
                // cats[cats.length - 1].scrollIntoView();

                
                // const position= cats[cats.length - 1].getBoundingClientRect();
                // const scrolled= cats[cats.length - 1].scrollTop;
                // console.log(position);
                // document.querySelector('#scrollbar').scrollTo({
                //     top: position.height,
                //     behavior: "smooth"
                // });
            // }
            // .forEach((e) => {
            //     console.log(e);
            // });
            // const position= cats[cats.length - 1].getBoundingClientRect();
            // const scrolled = document.querySelector('#scrollbar').scrollTop;

            // const position= cats[cats.length - 1];
            // console.log(position);
        };

        return(
            <div className= "create">
                <motion.div className= "createcontainer" {...createVariants}>
                    <div className= "createheader">
                        {changelang ? "Create new category" : "Nέα κατηγορία"}
                    </div>
                    <div className= "createformcontainer">
                        <input className= "createform" type= "text" 
                            placeholder= {changelang ? "Input new category name..." : 
                                "Εισαγωγή ονόματος νέας κατηγορίας..."} 
                            id= {(red? 'placeholder' : 'none')} title= {inputText} value= {inputText} 
                            autoComplete= "off" autoFocus 
                            onChange= {inputTextHandler} onFocus= {selectText}
                            onPointerDown= {resetForm} onKeyDown= {pressedKey}
                            style= {{color: (red? 'red' : 'black'), borderColor: (red? 'red' : 'black')}} />
                        {visible && <div id= "tooltipcreate">
                            {changelang ? "Category already exists!" : "Η κατηγορία υπάρχει ήδη!"}
                        </div>}
                        <div className= "createbuttoncontainer">
                            <button className= "createbutton" id= "cancel" onClick= {close} data-name= {inputText}>
                                {changelang ? "Cancel" : "Ακύρωση"}
                            </button>
                            <button className= "createbutton" id= "ok" type= "submit" onClick= {submitText} data-name= {inputText}>
                                OK
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        );
}

export default Create;