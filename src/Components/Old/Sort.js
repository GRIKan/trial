import React, { useState } from 'react';
import CardList from './CardList';
import Header from '../Header';
import './Sort.css'

const Sort = () => {
    const [cards, setCards] = useState(
        [
            {name: "Apple", id: 1},
            {name: "Banana with vineger and anana and mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla", id: 2},
            {name: "PeachesILoveThemIReallyDo", id: 3}, 
            {name: "OrangesILoveThemTooIfYouBelieveMe even more so than peaches if I may say so, which is a big deal apparently, honestly", id: 4},
            {name: "Grape", id: 5},
            // {name: "Watermelon", id: 6},
            // {name: "Melon", id: 7},
            // {name: "Cucumber", id: 8},
            // {name: "Tomato", id: 9},
            // {name: "Lemon", id: 10},
            // {name: "Carrot", id: 11},
            // {name: "Pineapple", id: 12},
            // {name: "Onion", id: 13},
            // {name: "Garlic", id: 14},
            // {name: "Zuccini", id: 15},
            // {name: "Pumpkin", id: 16},
            // {name: "Berries", id: 17},
            // {name: "Coconut", id: 18},
            // {name: "Pear", id: 19},
            // {name: "Cabbage", id: 20},
            // {name: "Lettuce", id: 21}
        ]
    );
    const [categories, setCategories] = useState(
        [
            {name: "Fruits", id: 1, cardId: [4, 5]},
            {name: "Vegetables", id: 2, cardId: [1]},
            // {name: "Too much", id: 3, cardId: [2]},
            // {name: "Too much again", id: 4, cardId: [3]},
            // {name: "Too much again 2", id: 5, cardId: []},
            // {name: "Too much again 2", id: 6, cardId: []},
            // {name: "Too much again 2", id: 7, cardId: []},
            // {name: "Too much again 2", id: 8, cardId: []},
            // {name: "Too much again 2", id: 9, cardId: []}
        ]
    );
    const [categoriesOrder, setCategoriesOrder] = useState(
        [ 
            {id: 1},
            {id: 2},
            // {id: 3},
            // {id: 4},
            // {id: 5},
            // {id: 6},
            // {id: 7},
            // {id: 8},
            // {id: 9}
        ]
    );
            {/* <Header cards={cards} categories={categories} /> */}
    return ( 
        <div className="sort">
            <CardList cards={cards} categories={categories} categoriesOrder={categoriesOrder} 
                        setCategories={setCategories} />
        </div>   
     );
}
 
export default Sort;