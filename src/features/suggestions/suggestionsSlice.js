import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        "id": 1,
        "title": "Add tags for solutions",
        "category": "enhancement",
        "upvotes": 112,
        "status": "suggestion",
        "description": "Easier to search for solutions based on a specific stack.",
        "comments": [
            {
                "id": 1,
                "content": "Awesome idea! Trying to find framework-specific projects within the hubs can be tedious",
                "userId": 1,
                "replies": []
            },
            {
                "id": 2,
                "content": "Please use fun, color-coded labels to easily identify them at a glance",
                "userId": 3,
                "replies": []
            }
        ]
    },
    {
        "id": 2,
        "title": "Add a dark theme option",
        "category": "feature",
        "upvotes": 99,
        "status": "suggestion",
        "description": "It would help people with light sensitivities and who prefer dark mode.",
        "comments": [
            {
                "id": 3,
                "content": "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.",
                "userId": 11,
                "replies": []
            },
            {
                "id": 4,
                "content": "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.",
                "userId": 4,
                "replies": [
                    {
                        "content": "While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
                        "replyingToUserId": 4,
                        "userId": 5
                    },
                    {
                        "content": "Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
                        "replyingToUserId": 5,
                        "userId": 6
                    }
                ]
            }
        ]
    }
]

export const suggestionsSlice = createSlice({
    name: "suggestions",
    initialState, 
    reducers: {

    }
})

export default suggestionsSlice.reducer;