import React from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import validateEmails from '../../utils/validateEmails'
import SurveyField from './SurveyField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import { formFields } from './formFields'

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
		flexDirection: 'column',
	},
	btnContainer: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	btn: {
		marginTop: theme.spacing(2),
	},
	link: {
		textDecoration: 'none',
	},
}))

const SurveyForm = ({ handleSubmit, showReview }) => {
	const classes = useStyles()

	return (
		<Container className={classes.root}>
			<CssBaseline />
			<Typography variant='h3'>Create your survey</Typography>
			<form onSubmit={handleSubmit(showReview)} className={classes.form}>
				<Container className={classes.inputFields}>
					{formFields.map((field, idx) => (
						<Field
							key={idx}
							type='text'
							name={field.name}
							component={SurveyField}
							label={field.label}
							className={classes.input}
						/>
					))}
				</Container>
				<Container className={classes.btnContainer}>
					<Link className={classes.link} to='/surveys'>
						<Button
							type='submit'
							color='secondary'
							variant='contained'
							className={classes.btn}
						>
							Cancel
						</Button>
					</Link>
					<Button
						type='submit'
						color='primary'
						variant='contained'
						className={classes.btn}
					>
						Next
					</Button>
				</Container>
			</form>
		</Container>
	)
}

const validate = (values) => {
	const errors = {}

	errors.recipients = validateEmails(values.recipients)

	formFields.forEach(({ name }) => {
		if (!values[name]) {
			errors[name] = `You must provide a ${name}`
		}
	})

	return errors
}

export default reduxForm({
	form: 'surveyForm',
	validate,
	destroyOnUnmount: false,
})(SurveyForm)
