import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { motion } from 'framer-motion';
import Delete from '../../Images/x.png';

const CardInCategory = ( {displaydrops, changelang, inDrag, setInDrag, card, category, index, cards, cardsInCategory, categories, 
    setCards, setCardsInCategory, setCategories} ) => {
        var timer;
        
        const onHover = (e) => {
            // if (inDrag === "false"){
            //     if (typeof(e.target.childNodes[1]) === 'undefined') {
            //         if (typeof(e.target.parentNode.childNodes[1]) === 'undefined'){
            //                 e.target.parentNode.parentNode.childNodes[1].style.display= 'block';
            //         }
            //         else {
            //             e.target.parentNode.childNodes[1].style.display= 'block';
            //         }
            //     }
            //     else {
            //         e.target.childNodes[1].style.display= 'block';
            //     }

            // }
        };

        const notOnHover = () => {
            // document.querySelectorAll('.delete').forEach((e) => {
            //     e.style.display= 'none';
            // })
        };

        const resetXs = () => {
            // setInDrag("true");
            clearTimeout(timer);
            document.querySelectorAll('.carddelete').forEach((e) => {
                e.style.display= 'none';
            });
        };

        const showXs = () => {
            document.querySelectorAll('.carddelete').forEach((e) => {
                e.style.display= 'block';
            });
        }

        // document.body.onpointerup= () => {
        //     timer= setTimeout( function() {
        //         document.querySelectorAll('.carddelete').forEach((e) => {
        //             e.style.display= 'block';
        //         })
        //     }, 400);
        // };

        const deleteCard = () => {
            const newCardId= category.cardId.filter(function(value) {
                return !(value === card.id);
            })
            const newCategory= {...category, cardId: newCardId};
            setCategories({...categories, [category.id]: newCategory});

            const newCardsInCategory= {...cardsInCategory};
            delete newCardsInCategory[card.id];
            setCardsInCategory({...newCardsInCategory});

            setCards({...cards, [card.id]: card});
        };

        return ( 
            <motion.div className= "categorycardcontainer" onMouseEnter= {onHover} onMouseLeave= {notOnHover} 
                whileHover= {{ scale: 1.005 }} >
                <Draggable draggableId= {card.id} index= {index}>
                    { (provided, snapshot) => (
                        <div className= "categorycard" onPointerDown= {resetXs} onPointerUp= {showXs}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref= {provided.innerRef}
                            data-isdragging= {snapshot.isDragging} >
                                <span className= "categorycardname" id= "cardincategoryscrollbar">{card.name}</span>
                        </div>
                    )}
                </Draggable>
                {!displaydrops && <img src= {Delete} className= "carddelete" alt= "Delete Icon" 
                    title= {changelang ? "Delete card" : "Διαγραφή κάρτας"} 
                    data-card= {card.id} onClick= {deleteCard} style= {{width: '16px', height: '16px'}} />}
            </motion.div>
        );
}
 
export default CardInCategory;