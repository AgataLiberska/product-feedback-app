import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        category: "All",
        selected: true
    },
    {
        category: "UI",
        selected: false
    },
    {
        category: "UX",
        selected: false
    },
    {
        category: "Enhancement",
        selected: false
    },
    {
        category: "Bugs",
        selected: false
    },
    {
        category: "Features",
        selected: false
    }
]

export const categoriesSlice = createSlice({
    name: "categories",
    initialState, 
    reducers: {
        categorySelected(state, action) {
            state.forEach(item => item.selected = false);
            const selectedCat = state.find(el => el.category === action.payload);
            if (selectedCat) {
                selectedCat.selected = true;
            }
        }
    }
})

export const { categorySelected } = categoriesSlice.actions;

export default categoriesSlice.reducer;

export const getSelectedCategory = state => {
    state.categories.find(cat => cat.selected === true)
}