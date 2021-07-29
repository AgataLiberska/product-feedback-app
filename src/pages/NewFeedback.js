import React, { useState } from 'react';
import GoBack from '../reusable/GoBackLink';

// styled components
import { NewFeedbackPageWrapper, NewFeedbackFormContainer, NewFeedbackHeading, FormControl, FormLabel, FormLabelHeading, FeedbackFormTextArea, ButtonContainer  } from './NewFeedbackStyles';

import { SubmitButton, CancelButton } from '../reusable/reusableStyles';

const NewFeedback = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('feature');
    const [description, setDescription] = useState('');

    const onTitleChange = e => setTitle(e.target.value);
    const onCategoryChange = e => setCategory(e.target.value);
    const onDescriptionChange = e => setDescription(e.target.value);

    return (
        <NewFeedbackPageWrapper>
            <header>
                <GoBack />
            </header>

            <NewFeedbackFormContainer>
                <NewFeedbackHeading>
                    Create New Feedback
                </NewFeedbackHeading>
                <form>
                    <FormControl>
                        <FormLabel htmlFor="title">
                            <FormLabelHeading>Feedback Title</FormLabelHeading>
                            Add a short, descriptive headline
                        </FormLabel>
                        <input 
                            type="text" 
                            id="title" 
                            value={title} 
                            onChange={onTitleChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="category">
                            <FormLabelHeading>
                                Category
                            </FormLabelHeading>
                            Choose a category for your feedback
                        </FormLabel>
                        <select 
                            id="category"
                            value={category}
                            onChange={onCategoryChange}
                        >
                            <option value="feature">Feature</option>
                            <option value="UI">UI</option>
                            <option value="UX">UX</option>
                            <option value="enhancement">Enhancement</option>
                            <option value="bug">Bug</option>
                        </select>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="description">
                            <FormLabelHeading>Feedback Detail</FormLabelHeading>
                            Include any specific comments on what should be improved, added, etc.
                        </FormLabel>
                        <FeedbackFormTextArea 
                            id="description"
                            value={description}
                            onChange={onDescriptionChange}    
                        />
                    </FormControl>
                    <ButtonContainer>
                        <CancelButton>Cancel</CancelButton>
                        <SubmitButton>Add Feedback</SubmitButton>
                    </ButtonContainer>
                </form>
            </NewFeedbackFormContainer>
        </NewFeedbackPageWrapper>
    )
}

export default NewFeedback;