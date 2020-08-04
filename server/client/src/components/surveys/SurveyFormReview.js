import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import { connect } from 'react-redux'
import { formFields } from './formFields'
import { makeStyles } from '@material-ui/core/styles'
import * as actions from '../../actions'
import { withRouter } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	reviewField: {
		marginBottom: theme.spacing(2),
	},
	btnContainer: {
		display: 'flex',
		justifyContent: 'space-between',
	},
}))

const SurveyFormReview = ({ showReview, formValues, submitSurvey, history }) => {
	const classes = useStyles()

	const renderReviews = () => {
		return formFields.map(({ label, name }, idx) => (
			<Container key={idx} className={classes.reviewField}>
				<Typography variant='h5'>{label}</Typography>
				<Typography variant='body1'>{formValues[name]}</Typography>
			</Container>
		))
	}

	const handleSubmit = (evt) => {
		submitSurvey(formValues, history)
	}

	return (
		<Container>
			<Typography variant='h3'>Please confirm entries</Typography>
			{renderReviews()}
			<Container className={classes.btnContainer}>
				<Button
					variant='contained'
					color='secondary'
					onClick={showReview}
				>
					Go Back
				</Button>
				<Button
					variant='contained'
					color='primary'
					endIcon={<SendIcon />}
					onClick={handleSubmit}
				>
					Send Survey
				</Button>
			</Container>
		</Container>
	)
}

const mapStateToProps = (state) => {
	return { formValues: state.form.surveyForm.values }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview))
