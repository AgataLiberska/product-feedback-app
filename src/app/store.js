import { configureStore } from '@reduxjs/toolkit';
import suggestionsReducer from '../features/suggestions/suggestionsSlice';

export default configureStore({
    reducer: {
        suggestions: suggestionsReducer
    }
})