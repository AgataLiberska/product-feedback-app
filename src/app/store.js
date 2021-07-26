import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice'
import suggestionsReducer from '../features/suggestions/suggestionsSlice';
import categoriesReducer from '../features/categories/categoriesSlice';

export default configureStore({
    reducer: {
        suggestions: suggestionsReducer,
        categories: categoriesReducer,
        users: usersReducer,
    },
    devTools: true,
})