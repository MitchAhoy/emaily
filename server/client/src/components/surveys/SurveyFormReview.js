import React from 'react'
import Container from '@material-ui/core/Container' 
import Typography from '@material-ui/core/Typography' 
import Button from '@material-ui/core/Button' 

const SurveyFormReview = ({ showReview }) => {

    return(
        <Container>
            <Typography variant='h5'>
                Please confirm entries
            </Typography>
            <Button variant='contained' color='primary' onClick={showReview}>Go Back</Button>
        </Container>
    )

}

export default SurveyFormReview