import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Option from './Option';
import Back from '../../Images/whiteback.png';

const sidebarVariants= {
    initial: {
        opacity: 0,
        rotateY: 180
    },
    animate: {
        opacity: 1,
        rotateY: 0,
    },
    exit: {
        rotateY: 180,
        opacity: 0
    },
    transition: { duration: 0.4 }
}

const Sidebar = ( {setSidebar, setPop, changelang, setDispCard, 
    card, cards, cardsInCategory, categories, categoriesOrder, 
    setCards, setCardsInCategory, setCategories} ) => {
        const [botBorder, setBotBorder] = useState(true);
        
        const goBack = (e) => {
            setSidebar(false);
            setDispCard(true);
            // e.target.parentNode.parentNode.parentNode.style.display= 'none';
            // console.log(e.target.parentNode.parentNode.parentNode);
        };

        const changeStyle = () => {
            setBotBorder(false);
        };

        return (
            <motion.div className= "sidebar" data-insidebar= {true} {...sidebarVariants}>
                <div className= "sidebarheader" data-insidebar= {true}>
                    <div id= "movetotext" data-insidebar= {true}>
                        {changelang ? "Move to:" : "Μετακίνηση σε:"}
                    </div>
                    <div id= "goback" data-insidebar= {true}>
                        <img src= {Back} alt= "Back Icon" title= {changelang ? "Back" : "Επιστροφή"} onClick= {goBack} 
                            data-insidebar= {true} style= {{width: '16px', height: '16px'}} />
                    </div>
                </div>
                <div className= "sidebarcontainer" id= "sidebarscrollbar" data-insidebar= {true} onScroll= {changeStyle}>
                        <div className= "sidebarlist" data-insidebar= {true}>
                                {categoriesOrder.order.map((categoryId) => {
                                        const category= categories[categoryId];
                                        category.cardId.map(cardId => {
                                                cardId= cardsInCategory[cardId];
                                                return (cardId);
                                        });
                                        return (
                                            <Option key= {category.id} setPop= {setPop} botBorder= {botBorder}
                                                card= {card} category= {category} 
                                                cards= {cards} cardsInCategory= {cardsInCategory} 
                                                categories= {categories} 
                                                setCards= {setCards} setCardsInCategory= {setCardsInCategory} 
                                                setCategories= {setCategories} />
                                        );
                                })}
                        </div>
                </div>
            </motion.div>
        );
}

export default Sidebar;