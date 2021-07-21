import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        name: "all",
        selected: true
    },
    {
        name: "UI",
        selected: false
    },
    {
        name: "UX",
        selected: false
    },
    {
        name: "enhancement",
        selected: false
    },
    {
        name: "bug",
        selected: false
    },
    {
        name: "feature",
        selected: false
    }
]

export const categoriesSlice = createSlice({
    name: "categories",
    initialState, 
    reducers: {
        categorySelected(state, action) {
            state.forEach(item => item.selected = false);
            const selectedCat = state.find(el => el.name === action.payload);
            if (selectedCat) {
                selectedCat.selected = true;
            }
        }
    }
})

export const { categorySelected } = categoriesSlice.actions;

export default categoriesSlice.reducer;

// export const getSelectedCategory = state => {
//     state.categories.find(cat => cat.selected === true)
// }