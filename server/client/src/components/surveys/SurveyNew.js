import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'
import { reduxForm } from 'redux-form'

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(2),
	},
}))

const SurveyNew = () => {
	const classes = useStyles()

	const [showReview, setShowReview] = useState(false)

	const handleChange = () => setShowReview(!showReview)

	return (
		<Container className={classes.root}>
			<CssBaseline />
			{showReview ? (
				<SurveyFormReview showReview={handleChange} />
			) : (
				<SurveyForm showReview={handleChange} />
			)}
		</Container>
	)
}

export default reduxForm({
	form: 'surveyForm',
})(SurveyNew)
