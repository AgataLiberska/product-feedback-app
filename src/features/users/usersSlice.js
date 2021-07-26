import { createSlice } from '@reduxjs/toolkit';

const initialState = [
        {
            "id": 1,
            "image": "./assets/user-images/image-suzanne.jpg",
            "name": "Suzanne Chang",
            "username": "upbeat1811",
            "currentUser": false,
            "upvotedSuggestions": []
        },
        {
            "id": 2,
            "image": "./assets/user-images/image-zena.jpg",
            "name": "Zena Kelley",
            "username": "velvetround",
            "currentUser": true,
            "upvotedSuggestions": []
        },
        {
            "id": 3,
            "image": "./assets/user-images/image-thomas.jpg",
            "name": "Thomas Hood",
            "username": "brawnybrave",
            "currentUser": false,
            "upvotedSuggestions": []
        },
        {
            "id": 4,
            "image": "./assets/user-images/image-james.jpg",
            "name": "James Skinner",
            "username": "hummingbird1",
            "currentUser": false,
            "upvotedSuggestions": []
        },
        {
            "id": 5,
            "image": "./assets/user-images/image-anne.jpg",
            "name": "Anne Valentine",
            "username": "annev1990",
            "currentUser": false,
            "upvotedSuggestions": []
        },
        {
            "id": 6,
            "image": "./assets/user-images/image-ryan.jpg",
            "name": "Ryan Welles",
            "username": "voyager.344",
            "currentUser": false,
            "upvotedSuggestions": []
        },
        {
            "id": 7,
            "image": "./assets/user-images/image-george.jpg",
            "name": "George Partridge",
            "username": "soccerviewer8",
            "currentUser": false,
            "upvotedSuggestions": []
        },
        {
            "id": 8,
            "image": "./assets/user-images/image-roxanne.jpg",
            "name": "Roxanne Travis",
            "username": "peppersprime32",
            "currentUser": false,
            "upvotedSuggestions": []
        },
        {
            "id": 9,
            "image": "./assets/user-images/image-victoria.jpg",
            "name": "Victoria Mejia",
            "username": "arlen_the_marlin",
            "currentUser": false,
            "upvotedSuggestions": []
        },
        {
            "id": 10,
            "image": "./assets/user-images/image-jackson.jpg",
            "name": "Jackson Barker",
            "username": "countryspirit",
            "currentUser": false,
            "upvotedSuggestions": []
        },
        {
            "id": 11,
            "image": "./assets/user-images/image-elijah.jpg",
            "name": "Elijah Moss",
            "username": "hexagon.bestagon",
            "currentUser": false,
            "upvotedSuggestions": []
        },
        {
            "id": 12,
            "image": "./assets/user-images/image-javier.jpg",
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

            if (currentUser) {
                currentUser.upvotedSuggestions.push(suggestionId);
            }
        }
    }
})

export const { upvoteAdded } = usersSlice.actions;

export default usersSlice.reducer;