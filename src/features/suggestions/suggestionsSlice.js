import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
    {
        "id": 1,
        "title": "Add tags for solutions",
        "category": "enhancement",
        "upvotes": 112,
        "status": "suggestion",
        "description": "Easier to search for solutions based on a specific stack.",
        "userId": 4,
        "comments": 2
    },
    {
        "id": 2,
        "title": "Add a dark theme option",
        "category": "feature",
        "upvotes": 99,
        "status": "suggestion",
        "description": "It would help people with light sensitivities and who prefer dark mode.",
        "userId": 2,
        "comments": 4
    },
    {
        "id": 3,
        "title": "Q&A within the challenge hubs",
        "category": "feature",
        "upvotes": 65,
        "status": "suggestion",
        "description": "Challenge-specific Q&A would make for easy reference.",
        "userId": 3,
        "comments": 1
    },
    {
        "id": 4,
        "title": "Add image/video upload to feedback",
        "category": "enhancement",
        "upvotes": 51,
        "status": "suggestion",
        "description": "Images and screencasts can enhance comments on solutions.",
        "userId": 6,
        "comments": 2
    },
    {
        "id": 5,
        "title": "Ability to follow others",
        "category": "feature",
        "upvotes": 42,
        "status": "suggestion",
        "description": "Stay updated on comments and solutions other people post.",
        "userId": 1,
        "comments": 3
    },
    {
        "id": 6,
        "title": "Preview images not loading",
        "category": "bug",
        "upvotes": 3,
        "status": "suggestion",
        "description": "Challenge preview images are missing when you apply a filter.",
        "userId": 3,
        "comments": 0
    },
    {
        "id": 7,
        "title": "More comprehensive reports",
        "category": "feature",
        "upvotes": 123,
        "status": "planned",
        "description": "It would be great to see a more detailed breakdown of solutions.",
        "userId": 8,
        "comments": 2
    },
    {
        "id": 8,
        "title": "Learning paths",
        "category": "feature",
        "upvotes": 28,
        "status": "planned",
        "description": "Sequenced projects for different goals to help people improve.",
        "userId": 5,
        "comments": 1
    },
    {
        "id": 9,
        "title": "One-click portfolio generation",
        "category": "feature",
        "upvotes": 62,
        "status": "in-progress",
        "description": "Add ability to create professional looking portfolio from profile.",
        "userId": 2,
        "comments": 1
    },
    {
        "id": 10,
        "title": "Bookmark challenges",
        "category": "feature",
        "upvotes": 31,
        "status": "in-progress",
        "description": "Be able to bookmark challenges to take later on.",
        "userId": 7,
        "comments": 1
    },
    {
        "id": 11,
        "title": "Animated solution screenshots",
        "category": "bug",
        "upvotes": 9,
        "status": "in-progress",
        "description": "Screenshots of solutions with animations don’t display correctly.",
        "userId": 8,
        "comments": 0
    },
    {
        "id": 12,
        "title": "Add micro-interactions",
        "category": "enhancement",
        "upvotes": 71,
        "status": "live",
        "description": "Small animations at specific points can add delight.",
        "userId": 5,
        "comments": 2
    }
]

export const suggestionsSlice = createSlice({
    name: "suggestions",
    initialState, 
    reducers: {
        suggestionUpvoted(state, action) {
            const existingSuggestion = state.find(el => el.id === action.payload);
            if (existingSuggestion) {
                existingSuggestion.upvotes++;
            }
        },
        removeSuggestionUpvoted(state, action) {
            const existingSuggestion = state.find(el => el.id === action.payload);
            if (existingSuggestion) {
                existingSuggestion.upvotes--;
            }
        },
        commentCounted(state, action) {
            const existingSuggestion = state.find(el => el.id === action.payload);

            if (existingSuggestion) {
                existingSuggestion.comments++;
            }
        },
        suggestionAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title, category, status, description, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title, 
                        category,
                        upvotes: 0,
                        status: status ? status : 'suggestion',
                        description,
                        userId, 
                        comments: 0,
                    }
                }
            }
        },
        suggestionEdited(state, action) {
            const {suggestionId, title, category, status, description, userId} = action.payload;
            const existingSuggestion = state.find(el => el.id === +suggestionId);

            if (existingSuggestion && existingSuggestion.userId === userId) {
                existingSuggestion.title = title;
                existingSuggestion.category = category;
                existingSuggestion.status = status;
                existingSuggestion.description = description;
            }
        },
        suggestionDeleted(state, action) {
            const existingSuggestionIndex = state.findIndex(el => el.id === +action.payload);
            state.splice(existingSuggestionIndex, 1);
        }
    }
})

export const { suggestionUpvoted, removeSuggestionUpvoted, commentCounted, suggestionAdded, suggestionEdited, suggestionDeleted } = suggestionsSlice.actions;

export default suggestionsSlice.reducer;

export const findSuggestionById = (state, id) => 
    state.suggestions.find(el => el.id === +id);

export const findSuggestionsByStatus = (state, status) => state.suggestions.filter(sugg => sugg.status === status);