import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        "id": 1,
        "content": "Awesome idea! Trying to find framework-specific projects within the hubs can be tedious",
        "userId": 1,
        "suggestionId": 1,
    },
    {
        "id": 2,
        "content": "Please use fun, color-coded labels to easily identify them at a glance",
        "userId": 3,
        "suggestionId": 1,
    },
    {
        "id": 3,
        "content": "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.",
        "userId": 11,
        "suggestionId": 2,
    },
    {
        "id": 4,
        "content": "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.",
        "userId": 4,
        "suggestionId": 2,
    },
    {
        "id": 16,
        "content": "Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
        "userId": 6,
        "suggestionId": 2,
        "replyingToUserId": 5,
        "replyingToCommentId": 4,
        
    },
    {   
        "id": 17,
        "content": "While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
        "userId": 5,
        "suggestionId": 2,
        "replyingToUserId": 4,
        "replyingToCommentId": 4,
    },
    {
        "id": 5,
        "content": "Much easier to get answers from devs who can relate, since they've either finished the challenge themselves or are in the middle of it.",
        "userId": 7,
        "suggestionId": 3,
    },
    {
        "id": 6,
        "content": "Right now, there is no ability to add images while giving feedback which isn't ideal because I have to use another app to show what I mean",
        "userId": 12,
        "suggestionId": 4,
    },
    {
        "id": 7,
        "content": "Yes I'd like to see this as well. Sometimes I want to add a short video or gif to explain the site's behavior..",
        "userId": 8,
        "suggestionId": 4,
    },
    {
        "id": 8,
        "content": "I also want to be notified when devs I follow submit projects on FEM. Is in-app notification also in the pipeline?",
        "userId": 9,
        "suggestionId": 5,
    },
    {
        "id": 18,
        "content": "Bumping this. It would be good to have a tab with a feed of people I follow so it's easy to see what challenges they’ve done lately. I learn a lot by reading good developers' code.",
        "userId": 2,
        "suggestionId": 5,
        "replyingToUserId": 9,
        "replyingToCommentId": 8,  
    },
    {
        "id": 9,
        "content": "I've been saving the profile URLs of a few people and I check what they’ve been doing from time to time. Being able to follow them solves that",
        "userId": 10,
        "suggestionId": 5,
    },
    {
        "id": 10,
        "content": "This would be awesome! It would be so helpful to see an overview of my code in a way that makes it easy to spot where things could be improved.",
        "userId": 9,
        "suggestionId": 7,
    },
    {
        "id": 11,
        "content": "Yeah, this would be really good. I'd love to see deeper insights into my code!",
        "userId": 10,
        "suggestionId": 7,
        "replies": []
    },
    {
        "id": 12,
        "content": "Having a path through the challenges that I could follow would be brilliant! Sometimes I'm not sure which challenge would be the best next step to take. So this would help me navigate through them!",
        "userId": 7,
        "suggestionId": 8,
    },
    {
        "id": 13,
        "content": "I haven't built a portfolio site yet, so this would be really helpful. Might it also be possible to choose layout and colour themes?!",
        "userId": 6,
        "suggestionId": 9,
    },
    {
        "id": 14,
        "content": "This would be great! At the moment, I'm just starting challenges in order to save them. But this means the My Challenges section is overflowing with projects and is hard to manage. Being able to bookmark challenges would be really helpful.",
        "userId": 1,
        "suggestionId": 10,
    },
    {
        "id": 15,
        "content": "I'd love to see this! It always makes me so happy to see little details like these on websites.",
        "userId": 9,
        "suggestionId": 12,
    },
    {
        "id": 19,
        "content": "Me too! I'd also love to see celebrations at specific points as well. It would help people take a moment to celebrate their achievements!",
        "userId": 1,
        "suggestionId": 12,
        "replyingToUserId": 9,
        "replyingToCommentId": 15,        
    }
]

export const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        commentAdded(state, action) {
            state.push(action.payload);
        }
    }
})

export const { commentAdded } = commentsSlice.actions;

export default commentsSlice.reducer;