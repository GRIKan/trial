import React from 'react';
import Card from './Card';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Delete from '../../Images/delete.png';

const Category = ( {category, card, index} ) => {
    return ( 
        <Draggable draggableId={String(category.id)} index={index}>
        {(provided, snapshot) => (
        <div className="thecategory"
        {...provided.draggableProps}
        ref={provided.innerRef}
        data-isdragging={snapshot.isDragging}>
            <div className="categoryname" title={category.name} {...provided.dragHandleProps}>
                {category.name}
            </div>
            <Droppable droppableId={String(category.id)} type="card">
                { (provided, snapshot) => (
                    <div className="categorycardlist"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        data-isdraggingover={snapshot.isDraggingOver} >
                        {card.map((card, index) => {
                            return(
                                <Card key={card.id} card={card} index={index} />);                  
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>

        )}
        </Draggable>
     );
}
 
export default Category;