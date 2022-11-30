import React, { useState, useEffect } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { motion, AnimatePresence } from 'framer-motion';
import CardInCategory from './CardInCategory';
import Min from '../../Images/min.png';
import Max from '../../Images/max.png';
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

const minVariants = {
    // initial: {
    //     height: 'calc(39vh - 6px)'
    // },
    animate: {
        height: 'calc(29vh - 26px)'
    },
    transition: { duration: 0.1, type: "spring", bounce: 0 }
}

const CloseCategory = ( {displaydrops, changelang, setSure, setCategoryInfo, inDrag, setInDrag, card, category, 
    cards, cardsInCategory, categories, setCards, setCardsInCategory, setCategories} ) => {  
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
            else if (category.cardId.length === 3 && !minimize) {
                setDisplayminmax(true);
                setDisplaymin(true);
            };
         }, [category, minimize]);

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
        };
        
        const deleteCards = () => {
            setSure(4);
            setCategoryInfo(category);
            // const newCardId= Array.from(category.cardId);
            // const theCards= Array.from(category.cardId);
                       
            // newCardId.splice(0, newCardId.length);
            // const newCategory= {...category, cardId: newCardId};
            // setCategories({...categories, [category.id]: newCategory});
            
            // const newCardsInCategory= {...cardsInCategory};
            // var newCards= {};
           
            // theCards.forEach( (e) => {
            //     delete newCardsInCategory[e];
                
            //     newCards= {...newCards, [e]: cardsInCategory[e]};
            // });

            // setCardsInCategory({...newCardsInCategory});
            // setCards({...cards, ...newCards});
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
                            <div id= "categorytitletext" title= {category.name}>
                                {category.name}
                            </div>
                        </div>
                        <div id= "categorydelete">
                            <img src= {Delete} alt= "Delete Icon" 
                                title= {changelang ? "Delete all category cards" : "Διαγραφή όλων των καρτών της κατηγορίας"} onClick= {deleteCards} style= {{width: '16px', height: '16px'}} />
                        </div>
                </div>
                <AnimatePresence initial= {minimize}>
                    {!minimize && <motion.div className= "categorycontainer" data-ismin= {displaymin} {...maxVariants}>
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
                    {minimize && <motion.div className= "categorycontainer" data-ismin= {displaymin} {...minVariants}
                        initial= {{ height: height + 'px' }}>
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

export default CloseCategory;