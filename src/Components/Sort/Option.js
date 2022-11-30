import React from 'react';

const Option = ( {setPop, botBorder, card, category, cards, cardsInCategory, categories, 
    setCards, setCardsInCategory, setCategories} ) => {
        const moveTo = () => {        
            const newCards= {...cards};          
            delete newCards[card.id];
            setCards({...newCards});

            setCardsInCategory({...cardsInCategory, [card.id]: card});

            const newCardId= Array.from(category.cardId);
            const length= newCardId.length;
            newCardId.splice(length, 0, card.id);
            const newCategory= {...category, cardId: newCardId};

            setCategories({...categories, [category.id]: newCategory});

            setPop(3);
            // document.querySelector('.popup').style.display= 'flex';
        };

        return (
            <div id= "option" onClick= {moveTo} data-insidebar= {true} data-onscroll= {!botBorder}>
                <span id= "optionname" data-insidebar= {true}>
                    {category.name}
                </span>
            </div>
        );
}

export default Option;