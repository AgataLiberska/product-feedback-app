import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { categorySelected } from './categoriesSlice';

const CategoriesList = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories);

    const renderedCategories = categories.map(category => {
        return (
            <button key={category.name} aria-pressed={category.selected} onClick={() => dispatch(categorySelected(category.name))}>
                {category.name}
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