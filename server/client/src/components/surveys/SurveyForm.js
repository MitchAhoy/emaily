import React from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import validateEmails from '../../utils/validateEmails'
import SurveyField from './SurveyField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputFields: {
        display: 'flex',
        flexDirection: 'column'
    },
    btnContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    btn: {
        marginTop: theme.spacing(2),
    },
    link: {
        textDecoration: 'none'
    }
}))

const fields = [
    {label: 'Survey Title', name: 'title'},
    {label: 'Subject Line', name: 'subject'},
    {label: 'Email Body', name: 'body'},
    {label: 'Recipients List', name: 'emails'},
]


const SurveyForm = ({ handleSubmit, showReview }) => {
    

    const classes = useStyles()

    return(
        <Container className={classes.root}>
            <CssBaseline />
            <form onSubmit={handleSubmit(showReview)} className={classes.form}>
                <Container className={classes.inputFields}>
                    {fields.map((field, idx) => <Field key={idx} type='text' name={field.name} component={SurveyField} label={field.label} className={classes.input}/>)}
                </Container>
                <Container className={classes.btnContainer}>
                <Link className={classes.link} to='/surveys'>
                    <Button type='submit' color='secondary' variant='contained' className={classes.btn}>Cancel</Button>
                </Link>
                    <Button type='submit' color='primary' variant='contained' className={classes.btn}>Next</Button>
                </Container>
            </form>
        </Container>
        
    )
}

const validate = (values) => {
    const errors = {}

    errors.emails = validateEmails(values.emails)

    fields.forEach(({ name }) => {
        if (!values[name]) {
            errors[name] = `You must provide a ${name}`
        }
    })

    


    return errors

}

export default reduxForm({
    form: 'surveyForm',
    validate
})(SurveyForm)