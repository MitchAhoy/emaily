import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSurveys } from '../actions'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
	card: {
		marginBottom: theme.spacing(2),
    },
    cardAction: {
        marginTop: theme.spacing(1)
    }
}))

const SurveyList = ({ surveys, fetchSurveys }) => {
	useEffect(() => {
		fetchSurveys()
	})

	const classes = useStyles()

	const renderSurveys = () => {
		return surveys
			.reverse()
			.map(({ _id, title, body, dateSent, yes, no }) => {
				return (
					<Card key={_id} className={classes.card}>
						<CardContent>
							<Typography
								variant='h5'
								gutterBottom
								color='primary'
							>
								{title}
							</Typography>
							<Typography variant='body1'>{body}</Typography>
							<Typography gutterBottom align='right'>
								Sent on: {new Date(dateSent).toLocaleDateString()}
							</Typography>
							<Divider light />
							<CardActions className={classes.cardAction}>
								<Typography>Yes: {yes}</Typography>
								<Typography>No: {no}</Typography>
							</CardActions>
						</CardContent>
					</Card>
				)
			})
	}

	return (
		<div>
			<Typography variant='h3' gutterBottom>
				Survey List
			</Typography>
			{renderSurveys()}
		</div>
	)
}

const mapStateToProps = ({ surveys }) => {
	return { surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList)
