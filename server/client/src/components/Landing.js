import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1,
        height: '90vh',
        textAlign: 'center',
        lineHeight: theme.spacing(1)
    },
    btn: {
        maxWidth: '10rem',
        position: 'relative',
        margin: ' 0 auto'
    }
}))

const Landing = () => {
    const classes = useStyles()

    return(
        <Container className={classes.root}>
            <CssBaseline />
            <Typography variant='h2'>Emaily - effortlessly survey your users</Typography>
            <Typography variant='body1'>Sign up today for 10 free credits</Typography>
            <Link href='/auth/google' underline='none'>
                <Button className={classes.btn} color='primary' variant='contained' >Get started</Button>
            </Link>
        </Container>
    )
}

export default Landing