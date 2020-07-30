import React from 'react'
import Fab from '@material-ui/core/Fab'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2)
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2)
    }
}))

const Dashboard = () => {

    const classes = useStyles()

    return(
        <Container className={classes.root}>
            <CssBaseline />
            <div>
                <Typography variant='h3' color='inherit'>
                    Dashboard
                </Typography>
            </div>
            <Link to='/surveys/new'>
                <Fab color='secondary' aria-label='add' className={classes.fab}>
                    <AddIcon />
                </Fab>
            </Link>
        </Container>
    )
}

export default Dashboard