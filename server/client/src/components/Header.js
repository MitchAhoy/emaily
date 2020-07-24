import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import EmailIcon from '@material-ui/icons/Email'
import CssBaseline from '@material-ui/core/CssBaseline'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
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

const Header = () => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position='static'>
				<Toolbar className={classes.toolbar}>
					<IconButton color='inherit' className={classes.logo}>
						<EmailIcon className={classes.icon} />
						<Typography variant='h6'>Emaily</Typography>
					</IconButton>
					<IconButton color='inherit' className={classes.loginBtn}>
						<AccountCircleIcon className={classes.icon} />
						<Typography>Sign In With Google</Typography>
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Header
