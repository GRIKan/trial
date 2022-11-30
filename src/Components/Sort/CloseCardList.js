import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Masonry from 'react-masonry-css';
import CloseCategory from './CloseCategory';
import CloseCard from './CloseCard';

const CloseCardList = ( {changelang, inDrag, setInDrag, setSure, setCategoryInfo, setPop, 
    cards, cardsInCategory, categories, categoriesOrder, setCards, setCardsInCategory, setCategories} ) => {
        const [displaydrops, setDisplayDrops] = useState(false);
        const breakpoints = {
            default: 5,
            1440: 4,
            800: 3,
            500: 2,
        };
        
        const handleOnDragStart = (start) => {
            setDisplayDrops(true);
            // document.querySelectorAll('.categorycardlist').forEach( (e) => {
            //     const data= e.getAttribute('data-isdraggingover');
            //     if (data === "true") {
            //         e.parentNode.parentNode.childNodes[0].style.borderBottom= '1px solid black';
            //     };
            // });
            // document.querySelectorAll('.categorycardlistminimized').forEach( (e) => {
            //     const data= e.getAttribute('data-isdraggingover');
            //     if (data === "true") {
            //         e.parentNode.parentNode.childNodes[0].style.borderBottom= '1px solid black';
            //     };
            // });
            
            const {draggableId, source} = start;
            console.log(draggableId);
            console.log(source);
        };
        
        const handleOnDragUpdate = (update) => {
            // document.querySelectorAll('.categorycardlist').forEach(e => {
            //     const data= e.getAttribute('data-isdraggingover');
            //     if (data === "true") {
            //         e.parentNode.parentNode.childNodes[0].style.borderBottom= '1px solid black';
            //     }
            //     else {
            //         e.parentNode.parentNode.childNodes[0].style.borderBottom= 'none';
            //     };
            // })
            // document.querySelectorAll('.categorycardlistminimized').forEach(e => {
            //     const data= e.getAttribute('data-isdraggingover');
            //     if (data === "true") {
            //         e.parentNode.parentNode.childNodes[0].style.borderBottom= '1px solid black';
            //     }
            //     else {
            //         e.parentNode.parentNode.childNodes[0].style.borderBottom= 'none';
            //     };
            // })
            
            const {destination} = update;
            if (destination) {console.log(destination.droppableId);};
        };

        const handleOnDragEnd = (result) => {
            setDisplayDrops(false);
            // document.querySelectorAll('.categoryheader').forEach( (e) => {
            //     e.style.borderBottom= 'none';
            // });

            const {destination, source, draggableId} = result;
            console.log(destination);
            console.log(source);
            console.log(draggableId);

            if (!destination) {
                return;
            };
            if (destination.droppableId === source.droppableId && destination.index === source.index) {
                return;
            };
             
            if (destination.droppableId.includes('category')) {
                if (!source.droppableId.includes('category')) {
                    const newId= draggableId;
                    const newCard= cards[draggableId];
                    
                    const newCards= {...cards};
                    delete newCards[newId];
                    setCards({...newCards});

                    setCardsInCategory({...cardsInCategory, [newId]: newCard});

                    const finish= categories[destination.droppableId];
                    const newCardId= Array.from(finish.cardId);
                    newCardId.splice(destination.index, 0, newId);
                    const newCategory= {...finish, cardId: newCardId};
                    setCategories({...categories, [destination.droppableId]: newCategory});

                    return;
                };

                const start= categories[source.droppableId];
                const finish= categories[destination.droppableId];
                
                if (start === finish) {
                    const newCardId= Array.from(start.cardId);
                    
                    newCardId.splice(source.index, 1);
                    newCardId.splice(destination.index, 0, draggableId);
                    const newCategory= {...start, cardId: newCardId};
                    
                    setCategories({...categories, [source.droppableId]: newCategory});
                } 
                else {
                    const startCardId= Array.from(start.cardId);
                    startCardId.splice(source.index, 1);
                    const newStart= {...start, cardId: startCardId};
                    
                    const finishCardId= Array.from(finish.cardId);
                    finishCardId.splice(destination.index, 0, draggableId);
                    const newFinish= {...finish, cardId: finishCardId};
    
                    setCategories({...categories, [source.droppableId]: newStart, [destination.droppableId]: newFinish});
                };
            };
        };

        return (
            <DragDropContext 
                onDragStart= {handleOnDragStart} 
                onDragUpdate= {handleOnDragUpdate}
                onDragEnd= {handleOnDragEnd} >
                    <div className= "container" id= "scrollbar">
                        <ul className= "cardlist">
                            <Masonry
                                breakpointCols= {breakpoints}
                                className= "my-masonry-grid"
                                columnClassName= "my-masonry-grid_column">
                                    {categoriesOrder.order.map((categoryId) => {
                                        const category= categories[categoryId];
                                        const card= category.cardId.map(cardId => {
                                            cardId= cardsInCategory[cardId];
                                            return (cardId);
                                        });
                                        return (
                                            <CloseCategory key= {category.id} displaydrops= {displaydrops}
                                                changelang= {changelang}
                                                setSure= {setSure} setCategoryInfo= {setCategoryInfo}
                                                inDrag= {inDrag} setInDrag= {setInDrag}
                                                card= {card} category= {category}
                                                cards= {cards} cardsInCategory= {cardsInCategory} categories= {categories}
                                                setCards= {setCards} setCardsInCategory= {setCardsInCategory} 
                                                setCategories= {setCategories} />
                                        );
                                    })}
                                    {Object.values(cards).map((card, index) => {
                                        return (
                                            <CloseCard key= {card.id} index= {index} displaydrops= {displaydrops}
                                                changelang= {changelang} setPop= {setPop} 
                                                card= {card} cards= {cards} cardsInCategory= {cardsInCategory} 
                                                categories= {categories} categoriesOrder= {categoriesOrder}
                                                setCards= {setCards} setCardsInCategory= {setCardsInCategory} 
                                                setCategories= {setCategories} />
                                        );
                                    })}
                            </Masonry>
                        </ul>
                    </div>
            </DragDropContext>
        );
} 

export default CloseCardList;