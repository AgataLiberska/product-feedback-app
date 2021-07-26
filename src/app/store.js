import { configureStore } from '@reduxjs/toolkit';
import suggestionsReducer from '../features/suggestions/suggestionsSlice';
import categoriesReducer from '../features/categories/categoriesSlice';

export default configureStore({
    reducer: {
        suggestions: suggestionsReducer,
        categories: categoriesReducer
    },
    devTools: true,
})