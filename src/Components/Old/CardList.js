import React from 'react';
import Category from './Category';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Masonry from 'react-masonry-css';

const CardList = ( {cards, categories, categoriesOrder, setCategories} ) => {
    const handleOnDragEnd = result => {
        const { destination, source, draggableId, type } = result;
        if (!destination){
            return;
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index){
            return;
        }
        const newCategories= Array.from(categories);
        console.log(newCategories);
        const start= categories[source.droppableId-1];
        const finish= categories[destination.droppableId-1];
        if (start === finish) {
            const newCardId= Array.from(start.cardId);
            newCardId.splice(source.index, 1);
            newCardId.splice(destination.index, 0, +draggableId);
            const newCategory= {...start, cardId: newCardId};
            newCategories[source.droppableId-1]= newCategory;
            setCategories([...newCategories]);
            return;
        }else{
            // if (type === 'categories') {
            //     const newColum
            // }

            const startCardId= Array.from(start.cardId);
            startCardId.splice(source.index, 1);
            const newStart= {...start, cardId: startCardId};
            const finishCardId= Array.from(finish.cardId);
            finishCardId.splice(destination.index, 0, +draggableId);
            const newFinish= {...finish, cardId: finishCardId};
            newCategories[source.droppableId-1]= newStart;
            newCategories[destination.droppableId-1]= newFinish;
            setCategories([...newCategories]);
            return;
        }
    };
    const breakpoints = {
        default: 5,
        1440: 4,
        320: 3,
    };
    return ( 
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <div className="container">
                <Droppable droppableId="all" direction="horizontal" type="category">
                    {(provided) => (
                        <div className="cardlist"
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                            {/* <Masonry
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                                breakpointCols={breakpoints}
                                className="my-masonry-grid"
                                columnClassName="my-masonry-grid_column"> */}
                                    {categoriesOrder.map((categoryId, index) => {
                                        {/* console.log(categories); */}
                                        const category= categories[categoryId.id-1];
                                        {/* console.log(categories[1]); */}
                                        const card= category.cardId.map(cardId => {
                                            cardId= cards[cardId-1];
                                            {/* console.log(cardId); */}
                                            return (cardId);
                                        });
                                        {/* console.log(card);       */}
                                        return(
                                            <Category key={category.id} 
                                                category={category} card={card} index={index} />  
                                        );
                                    })}
                            {/* </Masonry> */}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
     );
}
 
export default CardList;