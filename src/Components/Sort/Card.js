import React, { useEffect, useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { AnimatePresence, motion } from 'framer-motion';
import CardDroppable from './CardDroppable';
import Sidebar from './Sidebar';
import SlideBack from '../../Images/turn.png';

const cardVariants= {
    initial: {
        opacity: 0,
        rotateY: 180
    },
    animate: {
        opacity: 1,
        rotateY: 0
    },
    exit: {
        opacity: 0,
        rotateY: 180
    },
    transition: { duration: 0.4 }
}

const Card = ( {index, displaydrops, changelang, setCreate, setDrop, setDataCard, setDataPosition, setPop, 
    card, cards, cardsInCategory, categories, categoriesOrder, 
    setCards, setCardsInCategory, setCategories} ) => {               
        var timer;
        var timer2;
        const [dispcard, setDispCard] = useState(true);
        const [sidebar, setSidebar] = useState(false);
        const [changedraggable, setChangeDraggable] = useState(false);

        useEffect(() => {
            if (displaydrops === false) {
                clearTimeout(timer2);
                setChangeDraggable(displaydrops);
            };
        }, [displaydrops, timer2]);

        document.body.onpointerdown= (e) => {
            // clearTimeout(timer);
            if (e.target.getAttribute('data-insidebar')) {
                return;
            };
            // if (e.target.getAttribute('data-inrename')) {
            //         return;
            // };
            // document.querySelectorAll('.sidebar').forEach((event) => {
            //         event.style.display= 'none';
            // });
            setSidebar(false);
            setDispCard(true);
            // document.querySelectorAll('.categorytitleform').forEach((event) => {
            //         event.style.display= 'none';
            // });
        };

        const changeStyleBack = () => {
            clearTimeout(timer2);
            setChangeDraggable(false);
        };

        const changeStyle = (e) => {
            // timer2= setTimeout( function() {
            //     setChangeDraggable(true);
            // }, 150);
            if (e.target.getAttribute('data-isslideback')) {
                timer2= setTimeout( function() {
                    setChangeDraggable(true);
                }, 200);
            }
            else {
                timer2= setTimeout( function() {
                    setChangeDraggable(true);
                }, 100);
            };
        };

        const showChilds = (e) => {
            // const scrolled= document.querySelector('#scrollbar').scrollTop;
            // if (e.detail === 1) {
            //     timer= setTimeout( function() {
            //         setSidebar(true);
            //     }, 200);
            // }
            if (e.detail === 2 && !(e.target.className === 'slideback')) {
                clearTimeout(timer);
                setCreate(true);
                setDrop(false);
                setDataCard([card.id]);
                setDataPosition(document.querySelector('#scrollbar').scrollTop);

                // document.querySelector('.create').style.display= 'flex';
                // document.querySelector('.create').setAttribute('data-card', [card.id]);
                // document.querySelector('.create').setAttribute('data-position', 
                //         document.querySelector('#scrollbar').scrollTop);
                // document.querySelector('.form').focus();
            };
        };

        const showSidebar = () => {
            setDispCard(false);
            setSidebar(true);
        };

        return ( 
            <div className= "allcard">
                <Droppable droppableId= {card.name} direction= "horizontal" isDropDisabled= {true}>
                    {(provided, snapshot) => (
                        <div className= "thecard"
                            {...provided.droppableProps}
                            ref= {provided.innerRef} 
                            data-isdraggingovercard= {snapshot.isDraggingOver} onPointerUp= {changeStyleBack}>
                                <Draggable draggableId= {card.id} index= {index} isDragDisabled= {!dispcard}>
                                    {(provided, snapshot) => (
                                        <div className= "cardcontainer"
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref= {provided.innerRef}
                                            data-isdraggingcard= {snapshot.isDragging} 
                                            data-changedraggable= {changedraggable} >
                                                <AnimatePresence initial= {false}>
                                                    { dispcard && <motion.div className= "card" onClick= {showChilds} 
                                                        onPointerDown= {changeStyle}
                                                        data-changedraggable= {changedraggable}
                                                        {...cardVariants} whileHover= {{ scale: 1.05 }} >
                                                            <motion.img src= {SlideBack} className= "slideback" 
                                                                alt= "Show Sidebar Icon" 
                                                                title= {changelang ? "Move to:" : "Μετακίνηση σε: "}
                                                                data-isslideback= {true}
                                                                data-changedraggable= {changedraggable} 
                                                                onClick= {showSidebar} whileHover= {{ scale: 1.2 }} 
                                                                style= {{width: '22px', height: '22px'}} />
                                                            <span className= "cardname" id= "cardscrollbar" 
                                                                data-changedraggable= {changedraggable} >
                                                                    {card.name}
                                                            </span>
                                                        </motion.div>}
                                                </AnimatePresence>
                                                <AnimatePresence>
                                                    {sidebar && <Sidebar setSidebar= {setSidebar} setPop= {setPop} 
                                                        changelang= {changelang} setDispCard= {setDispCard} card= {card}
                                                        cards= {cards} cardsInCategory= {cardsInCategory} 
                                                        categories= {categories} categoriesOrder= {categoriesOrder}
                                                        setCards= {setCards} setCardsInCategory= {setCardsInCategory} 
                                                        setCategories= {setCategories} />}
                                                </AnimatePresence>
                                        </div>
                                    )}
                                </Draggable>
                        {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <CardDroppable card= {card} displaydrops= {displaydrops} />
            </div>
        );
}
 
export default Card;