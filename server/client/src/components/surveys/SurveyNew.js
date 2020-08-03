import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2)
    }
}))

const SurveyNew = () => {

    const classes = useStyles()

    const [showReview, setShowReview] = useState(false)

    const handleChange = () => setShowReview(!showReview)

    return(
        <Container className={classes.root}>
            <CssBaseline />
            <Typography variant='h3' color='inherit'>
                Create a new survey
            </Typography>
            {showReview ? <SurveyFormReview showReview={handleChange} /> : <SurveyForm showReview={handleChange} />}
            
            
        </Container>
        
    )
}

export default SurveyNew