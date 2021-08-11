import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { categorySelected } from './categoriesSlice';
import { CategoryButton, CategoryContainer } from './CategoriesStyles';

const CategoriesList = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories);

    const renderedCategories = categories.map(category => {
        return (
            <CategoryButton key={category.name} aria-pressed={category.selected} onClick={() => dispatch(categorySelected(category.name))} selected={category.selected}>
                {category.name}
            </CategoryButton>
        )
    })

    return (
        <CategoryContainer>
            {renderedCategories}
        </CategoryContainer>
    )
}

export default CategoriesList;