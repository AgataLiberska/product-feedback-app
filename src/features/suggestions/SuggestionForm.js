import React, {useState} from 'react';
import { useSelector } from 'react-redux';


// styled components
import { FormContainer, FormHeading, FormControl, FormLabel, FormLabelHeading, FormInput, FeedbackFormTextArea, ButtonContainer, FormError, DeleteButtonWrapper } from './SuggestionsStyles';

import { SubmitButton, CancelButton, DeleteButton } from '../../reusable/reusableStyles';

const SuggestionForm = ({ heading, title, category, status, description, submitBtnText, onFormSubmitted, goBack, onDelete }) => {

    const [titleValue, setTitleValue] = useState(title);
    const [categoryValue, setCategoryValue] = useState(category);
    const [statusValue, setStatusValue] = useState(status);
    const [descriptionValue, setDescriptionValue] = useState(description);
    const [titleError, setTitleError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);

    const categories = useSelector(state => state.categories);
    
    const renderedCategories = categories.map(cat => {
        return (
            <option key={cat.name} value={cat.name}>{cat.name}</option>
        )
    })

    const onTitleChange = e => {
        if (titleValue.trim()) {
            setTitleError(false)
        }

        setTitleValue(e.target.value);
    }

    const onDescriptionChange = e => {
        if (descriptionValue.trim()) {
            setDescriptionError(false);
        }

        setDescriptionValue(e.target.value)
    }

    const onSubmitForm = e => {
        e.preventDefault();

        if (!titleValue.trim()) {
            setTitleError(true);
        }

        if (!descriptionValue.trim()) {
            setDescriptionError(true);
        }

        if (titleValue && descriptionValue) {
            const newSuggestion = {
                title: titleValue,
                category: categoryValue,
                status: statusValue,
                description: descriptionValue,
            }
    
            onFormSubmitted(newSuggestion);
        }
    }

    const onDeleteBtnClicked = (e) => {
        e.preventDefault();
        onDelete();
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
                    <FormInput 
                        type="text" 
                        id="title" 
                        value={titleValue} 
                        onChange={onTitleChange}
                        showError={titleError}
                    />
                    { titleError ? 
                    <FormError>Can't be empty</FormError>
                    : null }
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
                        onChange={onDescriptionChange}    
                        showError={descriptionError}
                    />
                    { descriptionError ?                     <FormError>Can't be empty</FormError> 
                    : null}
                </FormControl>
                <ButtonContainer>
                    <SubmitButton type="submit">{submitBtnText}</SubmitButton>
                    <CancelButton to={goBack}>Cancel</CancelButton>
                    { status ? 
                        <DeleteButtonWrapper>
                            <DeleteButton onClick={onDeleteBtnClicked}>Delete</DeleteButton>
                        </DeleteButtonWrapper>
                    : null }
                </ButtonContainer>
            </form>
        </FormContainer>
    )
}

export default SuggestionForm;