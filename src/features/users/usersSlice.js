import { createSlice } from '@reduxjs/toolkit';

const initialState = [
        {
            "id": 1,
            "image": require("../../assets/user-images/image-suzanne.jpg").default,
            "name": "Suzanne Chang",
            "username": "upbeat1811",
            "currentUser": false,
            "upvotedSuggestions": [2, 5]
        },
        {
            "id": 2,
            "image": require("../../assets/user-images/image-zena.jpg").default,
            "name": "Zena Kelley",
            "username": "velvetround",
            "currentUser": true,
            "upvotedSuggestions": [7, 1, 12]
        },
        {
            "id": 3,
            "image": require("../../assets/user-images/image-thomas.jpg").default,
            "name": "Thomas Hood",
            "username": "brawnybrave",
            "currentUser": false,
            "upvotedSuggestions": []
        },
        {
            "id": 4,
            "image": require("../../assets/user-images/image-james.jpg").default,
            "name": "James Skinner",
            "username": "hummingbird1",
            "currentUser": false,
            "upvotedSuggestions": []
        },
        {
            "id": 5,
            "image": require("../../assets/user-images/image-anne.jpg").default,
            "name": "Anne Valentine",
            "username": "annev1990",
            "currentUser": false,
            "upvotedSuggestions": []
        },
        {
            "id": 6,
            "image": require("../../assets/user-images/image-ryan.jpg").default,
            "name": "Ryan Welles",
            "username": "voyager.344",
            "currentUser": false,
            "upvotedSuggestions": []
        },
        {
            "id": 7,
            "image": require("../../assets/user-images/image-george.jpg").default,
            "name": "George Partridge",
            "username": "soccerviewer8",
            "currentUser": false,
            "upvotedSuggestions": []
        },
        {
            "id": 8,
            "image": require("../../assets/user-images/image-roxanne.jpg").default,
            "name": "Roxanne Travis",
            "username": "peppersprime32",
            "currentUser": false,
            "upvotedSuggestions": []
        },
        {
            "id": 9,
            "image": require("../../assets/user-images/image-victoria.jpg").default,
            "name": "Victoria Mejia",
            "username": "arlen_the_marlin",
            "currentUser": false,
            "upvotedSuggestions": []
        },
        {
            "id": 10,
            "image": require("../../assets/user-images/image-jackson.jpg").default,
            "name": "Jackson Barker",
            "username": "countryspirit",
            "currentUser": false,
            "upvotedSuggestions": []
        },
        {
            "id": 11,
            "image": require("../../assets/user-images/image-elijah.jpg").default,
            "name": "Elijah Moss",
            "username": "hexagon.bestagon",
            "currentUser": false,
            "upvotedSuggestions": []
        },
        {
            "id": 12,
            "image": require("../../assets/user-images/image-javier.jpg").default,
            "name": "Javier Pollard",
            "username": "warlikeduke",
            "currentUser": false,
            "upvotedSuggestions": []
        }
    
]

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        upvoteAdded(state, action) {
            const { userId, suggestionId } = action.payload;

            const currentUser = state.find(user => user.id === userId);
            console.log(currentUser, 'added')
            if (currentUser) {
                currentUser.upvotedSuggestions.push(suggestionId);
            }
        },
        upvoteRemoved(state, action) {
            const { userId, suggestionId } = action.payload;

            const currentUser = state.find(user => user.id === userId);
            
            if (currentUser) {
                const suggestionIndex = currentUser.upvotedSuggestions.indexOf(suggestionId);
                currentUser.upvotedSuggestions.splice(suggestionIndex, 1);

            }
        }
    }
})

export const { upvoteAdded, upvoteRemoved } = usersSlice.actions;

export default usersSlice.reducer;

export const getCurrentUser = state => state.users.find(user => user.currentUser === true);

export const getUserById = (state, id) => state.users.find(user => user.id === id)