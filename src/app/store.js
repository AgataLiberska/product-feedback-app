import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice'
import suggestionsReducer from '../features/suggestions/suggestionsSlice';
import commentsReducer from '../features/comments/commentsSlice';
import categoriesReducer from '../features/categories/categoriesSlice';

export default configureStore({
    reducer: {
        suggestions: suggestionsReducer,
        categories: categoriesReducer,
        users: usersReducer,
        comments: commentsReducer
    },
    devTools: true,
})