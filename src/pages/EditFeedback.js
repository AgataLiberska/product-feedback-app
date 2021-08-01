import React from 'react';
import SuggestionForm from '../features/suggestions/SuggestionForm';
import { FormPageWrapper } from '../features/suggestions/SuggestionFormStyles';
import GoBack from '../reusable/GoBackLink';

const EditFeedback = () => {
    return (
        <FormPageWrapper>
            <header>
                <GoBack />
            </header>
            <SuggestionForm 

            />
        </FormPageWrapper>
    )
}

export default EditFeedback;