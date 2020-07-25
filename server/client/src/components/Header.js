import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import EmailIcon from '@material-ui/icons/Email'
import CssBaseline from '@material-ui/core/CssBaseline'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Link from '@material-ui/core/Link'
import { connect } from 'react-redux'

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
	loginBtn: {
		borderRadius: 0,
		justifyContent: 'space-between',
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
							<IconButton color='inherit' className={classes.loginBtn}>
								<AccountCircleIcon className={classes.icon} />
								<Typography>Sign In With Google</Typography>
							</IconButton>
						</Link>
				)
			default:
				return (
					<Link underline='none' href='/api/logout' color='inherit'>
					<IconButton color='inherit' className={classes.loginBtn}>
						<Typography>Logout</Typography>
					</IconButton>
				</Link>
				)
		}	
	}
	

	return (
		<nav className={classes.root}>
			<CssBaseline />
			<AppBar position='static'>
				<Toolbar className={classes.toolbar}>
					<Link underline='none' href={auth ? '/surveys' : '/'} color='inherit'>
						<IconButton color='inherit' className={classes.logo}>
							<EmailIcon className={classes.icon} />
							<Typography variant='h6'>Emaily</Typography>
						</IconButton>
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
