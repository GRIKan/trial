import React, { useState, useEffect } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { motion, AnimatePresence } from 'framer-motion';
import Rename from './Rename.js';
import CardInCategory from './CardInCategory';
import Min from '../../Images/min.png';
import Max from '../../Images/max.png';
import Edit from '../../Images/edit.png';
import Delete from '../../Images/delete.png';

const droppableVariants = {
    // initial: {
    //     opacity: 0
    // },
    // animate: {
    //     opacity: 1,
    //     transition: {
    //         duration: 1,
    //         when: "beforeChildren",
    //         staggerChildren: 1
    //     }
    // }
}

const childVariants = {
    // initial: {
    //     opacity: 0
    // },
    // animate: {
    //     opacity: 1,
       
    // }
}

const maxVariants = {
    initial: {
        height: '29vh'
    },
    animate: {
        height: '100%'
    },
    transition: { duration: 0.1, type: "spring", bounce: 0 },
}

const Category = ( {displaydrops, changelang, setSure, setCategoryInfo, setPop, inDrag, setInDrag, card, category, 
    cards, cardsInCategory, categories, categoriesOrder, setCards, setCardsInCategory, setCategories} ) => {  
        const [rename, setRename] = useState(false);
        const [inputText, setInputText] = useState(category.name);
        const [red, setRed] = useState(false);
        const [visible, setVisible] = useState(false);

        const [displayminmax, setDisplayminmax] = useState(category.minimize);
        const [displaymin, setDisplaymin] = useState(!category.minimize);
        const [minimize, setMinimize] = useState(category.minimize);
        const [height, setHeight] = useState(0);

        document.addEventListener('DOMContentLoaded', function() {
            if (category.cardId.length > 2) {
                    setDisplayminmax(true);
                    setDisplaymin(true);
                };
        });

        useEffect(() => {
            if (category.cardId.length < 3) {
                setDisplayminmax(false);
                setDisplaymin(false);
                setMinimize(false);
            }
            else if (category.cardId.length >= 3 && !minimize) {
                setDisplayminmax(true);
                setDisplaymin(true);
            };
         }, [category, minimize]);

        useEffect(() => {
            // console.log('change');
            setDisplaymin(!category.minimize);
            setMinimize(category.minimize);
        }, [categoriesOrder]);

        document.body.onmousedown= (e) => {
            if (e.target.getAttribute('data-inrename')) {
                    return;
            };
            setRename(false);
        };

        const minimizeCategoryCardList = (e) => {
            setDisplaymin(false);
            setMinimize(true);

            const newCategory= {...category};
            newCategory.minimize= true;
            setCategories({...categories, [category.id]: newCategory});

            setHeight(e.target.parentNode.parentNode.parentNode.childNodes[1].offsetHeight);
        };
        
        const maximizeCategoryCardList = () => {
            setDisplaymin(true);
            setMinimize(false);

            const newCategory= {...category};
            newCategory.minimize= false;
            setCategories({...categories, [category.id]: newCategory});
        };
        
        const renameCategory = (e) => {
            setRename(true);
            setInputText(category.name);

            // e.target.parentNode.parentNode.childNodes[1].style.display= 'grid';
            setRed(false);
            setVisible(false);
            // e.target.parentNode.parentNode.childNodes[1].childNodes[0].style.borderColor= 'black';
            // e.target.parentNode.parentNode.childNodes[1].childNodes[0].removeAttribute("id");
            // e.target.parentNode.parentNode.childNodes[1].childNodes[0].select();
            // e.target.parentNode.parentNode.childNodes[1].childNodes[0].focus();
            // e.target.parentNode.parentNode.childNodes[1].childNodes[1].style.display= 'none';
        };

        const deleteCategory = () => {
            setSure(3);
            setCategoryInfo(category);
        };

        return (
            <li className= "category" data-ismin= {displaymin}>
                <div className= "categoryheader" data-ismin= {displaymin}>
                    <div id= "categoryminimize">
                        {displayminmax && displaymin &&
                            <img src= {Min} alt= {"Minimize Icon"} id= "minimize"
                                title= {changelang ? "Minimize" : "Ελαχιστοποίηση"}
                                onClick= {minimizeCategoryCardList} style= {{width: '16px', height: '16px'}} />}
                        {displayminmax && !displaymin && 
                            <img src= {Max} alt= {"Maximize Icon"} id= "maximize" 
                                title= {changelang ? "Maximize" : "Μεγιστοποίηση"}
                                onClick= {maximizeCategoryCardList} style= {{width: '16px', height: '16px'}} />}
                    </div>
                    <div id= "categorytitle">
                        <div id= "categorytitletext"
                        title= {(changelang ? "Rename category: " : "Μετονομασία κατηγορίας: ") + category.name} 
                            onClick= {renameCategory} >
                            {category.name}
                        </div>
                        <img id= "categorytitleedit" src= {Edit} alt= "Edit Icon" 
                            title= {(changelang ? "Rename category: " : "Μετονομασία κατηγορίας: ") + category.name}
                            onClick= {renameCategory} 
                            style= {{width: '21px', height: '16px'}} />
                    </div>
                    {rename && <Rename setRename= {setRename} setPop= {setPop} changelang= {changelang}
                        inputText= {inputText} setInputText= {setInputText}
                        red= {red} setRed= {setRed} visible= {visible} setVisible= {setVisible}
                        category= {category} categories= {categories} setCategories= {setCategories} />}
                    <div id= "categorydelete">
                        <img src= {Delete} alt= "Delete Icon" 
                            title= {changelang ? "Delete category" : "Διαγραφή κατηγορίας: "}
                            onClick= {deleteCategory} style= {{width: '16px', height: '16px'}} />
                    </div>
                </div>
                <AnimatePresence initial= {minimize}>
                    {!minimize && <motion.div className= "categorycontainer" data-ismin= {displaymin} {...maxVariants} >
                        <Droppable droppableId= {category.id}>
                            { (provided, snapshot) => (
                                    <motion.div className= "categorycardlist" {...droppableVariants}     
                                        {...provided.droppableProps}
                                        ref= {provided.innerRef}
                                        data-isdraggingover= {snapshot.isDraggingOver} >
                                            {card.map((card, index) => {
                                                return(
                                                    <CardInCategory key= {card.id} displaydrops= {displaydrops}
                                                        changelang= {changelang}
                                                        inDrag= {inDrag} setInDrag= {setInDrag} 
                                                        card= {card} category= {category} index= {index} 
                                                        cards= {cards} cardsInCategory= {cardsInCategory} 
                                                        categories= {categories}
                                                        setCards= {setCards} setCardsInCategory= {setCardsInCategory} 
                                                        setCategories= {setCategories} {...childVariants} />
                                                );                  
                                            })}
                                        {provided.placeholder}
                                    </motion.div>
                            )}
                        </Droppable>
                    </motion.div>}
                </AnimatePresence>
                <AnimatePresence>
                    {minimize && <motion.div className= "categorycontainer" data-ismin= {displaymin}
                        initial= {{ height: height + 'px' }} 
                        animate= {{ height: 'calc(29vh - 26px)' }}
                        transition= {{ duration: 0.2, type: "spring", bounce: 0 }} >
                        <Droppable droppableId= {category.id}>
                            { (provided, snapshot) => (
                                    <motion.div className= "categorycardlistminimized" id= "categoryscrollbar"
                                        {...droppableVariants}
                                        {...provided.droppableProps}
                                        ref= {provided.innerRef}
                                        data-isdraggingover= {snapshot.isDraggingOver} >
                                            {card.map((card, index) => {
                                                return(
                                                    <CardInCategory key= {card.id} displaydrops= {displaydrops}
                                                        changelang= {changelang}
                                                        inDrag= {inDrag} setInDrag= {setInDrag} 
                                                        card= {card} category= {category} index= {index} 
                                                        cards= {cards} cardsInCategory= {cardsInCategory} 
                                                        categories= {categories}
                                                        setCards= {setCards} setCardsInCategory= {setCardsInCategory} 
                                                        setCategories= {setCategories} />
                                                );                  
                                            })}
                                        {provided.placeholder}
                                    </motion.div>
                            )}
                        </Droppable>
                    </motion.div>}
                </AnimatePresence>
            </li>
        );
}

export default Category;