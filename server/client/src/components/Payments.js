import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

const useStyles = makeStyles((theme) => ({
	btn: {
		borderRadius: 0,
		justifyContent: 'space-between',
		textTransform: 'none'
	},
}))

const Payments = ({ handleToken }) => {

    const classes = useStyles()

	return (
		<StripeCheckout
			name='Emaily'
			description='$5 for 5 email credits'
			amount={500}
			token={(token) => handleToken(token)}
			stripeKey={process.env.REACT_APP_STRIPE_KEY}
		>
			<Button color='inherit' className={classes.btn}>
				<Typography>Add Credits</Typography>
			</Button>
		</StripeCheckout>
	)
}

export default connect(null, actions)(Payments)
