import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'

import SurveyField from './SurveyField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { reduxForm, Field } from 'redux-form'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    input: {
        marginBottom: theme.spacing(5)
    }
}))


const SurveyForm = ({ handleSubmit }) => {

    const fields = [
        {label: 'Survey Title', name: 'title'},
        {label: 'Subject Line', name: 'subject'},
        {label: 'Email Body', name: 'body'},
        {label: 'Recipients List', name: 'emails'},
    ]

    const classes = useStyles()

    return(
        <Container className={classes.root}>
            <CssBaseline />
            <Typography variant='h3' color='inherit'>
                SurveyForm
            </Typography>
            <form onSubmit={handleSubmit(values => console.log(values))} className={classes.form}>
                {fields.map((field, idx) => <Field key={idx} type='text' name={field.name} component={SurveyField} label={field.label} className={classes.input}/>)}
                <Button type='submit' color='primary' variant='contained'>Submit</Button>
            </form>
        </Container>
        
    )
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm)