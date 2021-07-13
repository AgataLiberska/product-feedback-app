import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { categorySelected, getSelectedCategory } from './categoriesSlice';

const CategoriesList = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories);
    const selected = useSelector(state => state.categories.find(cat => cat.selected === true));
    
    console.log(selected);

    const renderedCategories = categories.map(item => {
        return (
            <button key={item.category} aria-pressed={item.selected} onClick={() => dispatch(categorySelected(item.category))}>
                {item.category}
            </button>
        )
    })

    return (
        <div>
            {renderedCategories}
        </div>
    )
}

export default CategoriesList;