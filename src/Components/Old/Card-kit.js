import React, { useState } from 'react';
import { useDroppable, useDraggable } from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';
import Sidebar from '../Sort/Sidebar';

const Card = ( {index, setCreate, setDrop, setDataCard, setDataPosition, setPop, 
    card, cards, cardsInCategory, categories, categoriesOrder, 
    setCards, setCardsInCategory, setCategories} ) => {               
        var timer;
        const [visible, setVisible] = useState(true);
        const [sidebar, setSidebar] = useState(false);
        const [draggable, setDraggable] = useState(false);

        document.body.onmouseup= () => {
            setDraggable(false);
        };

        document.body.onmousedown= (e) => {
            clearTimeout(timer);
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
            // document.querySelectorAll('.categorytitleform').forEach((event) => {
            //         event.style.display= 'none';
            // });
        };

        const showChilds = (e) => {
            // const scrolled= document.querySelector('#scrollbar').scrollTop;
            if (e.detail === 1) {
                // const sidecard= e.target.parentNode.childNodes[1];
                timer= setTimeout( function() {
                    // if (typeof(sidecard) === 'undefined') {
                    //         e.target.parentNode.parentNode.childNodes[1].style.display= 'grid';
                    // }
                    // else {
                    //         sidecard.style.display= 'grid';
                    // };
                    setSidebar(true);
                }, 200);
            }
            if (e.detail === 2) {
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

        // window.onload= function() {
        //         document.querySelectorAll('.card').forEach( (e) => {
        //                 let timer;
        //                 // e.parentNode.childNodes[1].style.display= 'none';
        //                 e.addEventListener('click', event => {
        //                         if (event.detail === 1) {
        //                                 timer = setTimeout(() => {
        //                                         console.log('click1');
        //                                         // e.style.color= 'red';
        //                                         e.parentNode.childNodes[1].style.display= 'grid';
        //                                         // console.log(e.parentNode.childNodes[1]);
        //                                       }, 200)
        //                         } else if (event.detail === 2) {
        //                                 clearTimeout(timer);
        //                                 console.log('click2');
        //                                 e.style.color= 'blue';
        //                         }
        //                 });
        //         });
        // };

        const show = () => {
            setDraggable(true);
        };

        const {setDropRef} = useDroppable({
            id: card.id,
        });

        const {attributes, listeners, setDragRef, transform} = useDraggable({
            id: card.id,
        });
        
        const style = {
            transform: CSS.Transform.toString(transform)
          };

        return ( 
            <div className= "thecard" >
                <div className= "cardcontainer" data-drag={draggable} ref= {setDragRef} {...listeners} {...attributes} style= {style}>
                    <div className= "card" onClick={showChilds} data-drag= {draggable}>
                        <span className= "cardname" id= "cardscrollbar">
                            {card.name}
                        </span>
                    </div>
                    {sidebar && <Sidebar setSidebar= {setSidebar} setPop= {setPop} card= {card}
                        cards= {cards} cardsInCategory= {cardsInCategory} 
                        categories= {categories} categoriesOrder= {categoriesOrder}
                        setCards= {setCards} setCardsInCategory= {setCardsInCategory} 
                        setCategories= {setCategories} />}
                </div>
            </div>
        );
}
 
export default Card;