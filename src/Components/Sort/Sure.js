import React from 'react';
import { motion } from 'framer-motion';

const sureVariants = {
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

const Sure = ( {sure, setSure, categoryinfo, setPop, changelang, cards, cardsInCategory, categories, categoriesOrder,
    setCards, setCardsInCategory, setCategories, setCategoriesOrder,
    setThanks} ) => {
        const renderSure = () => {
            switch(sure) {
                default: return;
                case 1: return (changelang ? "submit this?" : "ΟΧΙ");
                case 2: return(
                    <div>
                        {changelang ? "submit this?" : "το υποβάλετε;"}
                        <br />
                        {changelang ? "There are" : "Υπάρχουν"} 
                        <u> {changelang ? "unsorted cards" : "μη ταξινομημένες κάρτες"}</u>
                        <span style= {{color: 'red'}}>!!!</span>
                    </div>
                )
                case 3: return (changelang ? "delete this category?" : "διαγράψετε αυτή την κατηγορία;");
                case 4: return (changelang ? "delete all category cards?" : "διαγράψετε όλες τις κάρτες της κατηγορίας;");
            };
        };

        const no = () => {
            setSure(null);
        };

        const yes = () => {
            if (sure === 1 || sure === 2) {
                setThanks(true);
            }
            else if (sure === 3) {
                const category= categoryinfo;
    
                // var newCategoriesOrder= categoriesOrder.order.filter(function(value) { 
                //     return !(value === category.id);
                // });
                // setCategoriesOrder({...categoriesOrder, order: newCategoriesOrder});
    
                const newCategories= {...categories};
                delete newCategories[category.id];
                // setCategories({...newCategories});

                // const theId= +category.id.match(/\d+/)[0];
                const theLength= Object.values(categoriesOrder)[0].length;
                var theArray= [];
                var newIdsArray= {};

                for (let i= 0; i < theLength-1; i++) {
                    theArray= [...theArray, Object.values(categoriesOrder)[0][i]];

                    const newCategoryId= Object.values(categoriesOrder)[0][i];
                    const newCategory= { [newCategoryId] : 
                        { id: newCategoryId, name: Object.values(newCategories)[i].name, 
                            cardId: Object.values(newCategories)[i].cardId, 
                            minimize: Object.values(newCategories)[i].minimize }};
                    newIdsArray= {...newIdsArray, ...newCategory};
                };
                
                setCategoriesOrder({...categoriesOrder, order: theArray});
                setCategories({...categories, ...newIdsArray});
    
                const theCards= Array.from(category.cardId);
                const newCardsInCategory= {...cardsInCategory};
                var newCards= {};
                
                theCards.forEach( (e) => {
                    delete newCardsInCategory[e];
                    
                    newCards= {...newCards, [e]: cardsInCategory[e]};
                });
    
                setCardsInCategory({...newCardsInCategory});
                setCards({...cards, ...newCards});
    
                setPop(6);
            }
            else if (sure === 4) {
                const category= categoryinfo;

                const newCardId= Array.from(category.cardId);
                const theCards= Array.from(category.cardId);
                        
                newCardId.splice(0, newCardId.length);
                const newCategory= {...category, cardId: newCardId};
                setCategories({...categories, [category.id]: newCategory});
                
                const newCardsInCategory= {...cardsInCategory};
                var newCards= {};
            
                theCards.forEach( (e) => {
                    delete newCardsInCategory[e];
                    
                    newCards= {...newCards, [e]: cardsInCategory[e]};
                });

                setCardsInCategory({...newCardsInCategory});
                setCards({...cards, ...newCards});

                setPop(7);
            };
            setSure(null);
        };

        return(
            <div className= "sure">
                <motion.div className= "surecontainer" {...sureVariants}>
                    <div className= "suremessage">
                        {changelang ? "Are you sure you want to" : "Θέλετε σίγουρα να"}
                        <br />
                        {renderSure()}
                    </div>
                    <div className= "surebuttoncontainer">
                        <button className= "surebutton" id= "sno" onClick= {no}>
                            {changelang ? "ΝΟ" : "ΟΧΙ"}
                        </button>
                        <button className= "surebutton" id= "syes" type= "submit" onClick= {yes}>
                            {changelang ? "Yes" : "Ναι"}
                        </button>
                    </div>
                </motion.div>
            </div>
        );
}

export default Sure;