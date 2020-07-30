import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2)
    }
}))

const SurveyNew = () => {

    const classes = useStyles()

    return(
        <Container className={classes.root}>
            <CssBaseline />
            <Typography variant='h3' color='inherit'>
                New Survey
            </Typography>
        </Container>
        
    )
}

export default SurveyNew