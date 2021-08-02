import React, {useState} from 'react';
import { useSelector } from 'react-redux';

import { FormContainer, FormHeading, FormControl, FormLabel, FormLabelHeading, FeedbackFormTextArea, ButtonContainer } from './SuggestionFormStyles';

import { SubmitButton, CancelButton, DeleteButton } from '../../reusable/reusableStyles';

const SuggestionForm = ({heading, title, category, status, description, submitBtnText, onFormSubmitted}) => {

    const [titleValue, setTitleValue] = useState(title);
    const [categoryValue, setCategoryValue] = useState(category);
    const [statusValue, setStatusValue] = useState(status);
    const [descriptionValue, setDescriptionValue] = useState(description);

    const categories = useSelector(state => state.categories);
    
    const renderedCategories = categories.map(cat => {
        return (
            <option key={cat.name} value={cat.name}>{cat.name}</option>
        )
    })

    const onSubmitForm = e => {
        e.preventDefault();

        const newSuggestion = {
            title: titleValue,
            category: categoryValue,
            status: statusValue,
            description: descriptionValue,
        }

        onFormSubmitted(newSuggestion);
    }
    
    return (
        <FormContainer>
            <FormHeading>
                {heading}
            </FormHeading>
            <form onSubmit={e => onSubmitForm(e)}>
                <FormControl>
                    <FormLabel htmlFor="title">
                        <FormLabelHeading>
                            Feedback Title
                        </FormLabelHeading>
                        Add a short, descriptive headline
                    </FormLabel>
                    <input 
                        type="text" 
                        id="title" 
                        value={titleValue} 
                        onChange={e => setTitleValue(e.target.value)}
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
                        value={categoryValue}
                        onChange={e => setCategoryValue(e.target.value)}
                    >
                        { renderedCategories }
                    </select>
                </FormControl>
                {
                    status ?

                        <FormControl>
                            <FormLabel htmlFor="status">
                                <FormLabelHeading>
                                    Update Status
                                </FormLabelHeading>
                                Change feature state  
                            </FormLabel>
                            <select 
                                id="status"
                                value={statusValue}
                                onChange={e => setStatusValue(e.target.value)}
                            >
                                <option value="suggestion">Suggestion</option>
                                <option value="planned">Planned</option>
                                <option value="in-progress">In-Progress</option>
                                <option value="live">Live</option>
                            </select>
                        </FormControl>

                    : null
                }
                <FormControl>
                    <FormLabel htmlFor="description">
                        <FormLabelHeading>
                            Feedback Detail
                        </FormLabelHeading>
                        Include any specific comments on what should be improved, added, etc.
                    </FormLabel>
                    <FeedbackFormTextArea 
                        id="description"
                        value={descriptionValue}
                        onChange={e => setDescriptionValue(e.target.value)}    
                    />
                </FormControl>
                <ButtonContainer>
                    { status ? 
                        <DeleteButton type="button">Delete</DeleteButton>
                    : null }
                    <CancelButton type="button">Cancel</CancelButton>
                    <SubmitButton type="submit">{submitBtnText}</SubmitButton>
                </ButtonContainer>
            </form>
        </FormContainer>
    )
}

export default SuggestionForm;