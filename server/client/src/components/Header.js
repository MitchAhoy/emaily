import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import EmailIcon from '@material-ui/icons/Email'
import CssBaseline from '@material-ui/core/CssBaseline'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Link from '@material-ui/core/Link'
import { connect } from 'react-redux'
import Payments from './Payments'

const useStyles = makeStyles((theme) => ({
	toolbar: {
		justifyContent: 'space-between',
	},
	logo: {
		borderRadius: 0,
	},
	icon: {
		marginRight: theme.spacing(1),
	},
	btn: {
		borderRadius: 0,
		justifyContent: 'space-between',
		textTransform: 'none',
	},
}))

const Header = ({ auth }) => {
	const classes = useStyles()

	const renderBtns = () => {
		switch (auth) {
			case null:
				return
			case false:
				return (
						<Link underline='none' href='/auth/google' color='inherit'>
							<IconButton color='inherit' className={classes.btn}>
								<AccountCircleIcon className={classes.icon} />
								<Typography>Sign In With Google</Typography>
							</IconButton>
						</Link>
				)
			default:
				return (
					<div>
						<Button color='inherit' className={classes.btn}>
							<Typography>Credits: {auth.credits}</Typography>
						</Button>
						<Payments />
						<Link underline='none' href='/api/logout' color='inherit'>
							<Button color='inherit' className={classes.btn}>
								<Typography>Logout</Typography>
							</Button>
						</Link>
					</div>
				)
		}	
	}
	

	return (
		<nav className={classes.root}>
			<CssBaseline />
			<AppBar position='static'>
				<Toolbar className={classes.toolbar}>
					<Link underline='none' href={auth ? '/surveys' : '/'} color='inherit'>
						<Button color='inherit' className={classes.logo}>
							<EmailIcon className={classes.icon} />
							<Typography variant='h6'>Emaily</Typography>
						</Button>
					</Link>
						{renderBtns()}

				</Toolbar>
			</AppBar>
		</nav>
	)
}

const mapStateToProps = ({ auth }) => {
	return { auth }
}

export default connect(mapStateToProps)(Header)
