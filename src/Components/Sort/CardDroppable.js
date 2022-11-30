import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

const CardDroppable = ( {card, displaydrops} ) => {  
    return ( 
        <div className= "carddroppable" data-dispdrops= {displaydrops}>
            <Droppable droppableId= {card.id}>
                {(provided, snapshot) => (
                    <div className= "cardcontainerdroppable"
                        {...provided.droppableProps}
                        ref= {provided.innerRef}
                        data-over= {snapshot.isDraggingOver} 
                        data-dispdrops= {displaydrops} >
                            <div className= "card">
                                <span className= "cardname" id= "cardscrollbar">
                                    {card.name}
                                </span>
                            </div>
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
}
 
export default CardDroppable;