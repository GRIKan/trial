import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Card = ( {card, index} ) => {
    return ( 
        <Draggable draggableId={String(card.id)} index={index}>
            { (provided, snapshot) => (
                <div className="categorycard"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    data-isdragging={snapshot.isDragging}>
                    <span id="categorycardname">{card.name}</span>
                </div>     
            )}
        </Draggable>
     );
}
 
export default Card;