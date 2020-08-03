import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'

const useStyles = makeStyles((theme) => ({
    inputField: {
        marginBottom: theme.spacing(2)
    },
    alert: {
        marginBottom: theme.spacing(1)
    }
}))

const SurveyField = ({ input, label, meta: { error, touched } }) => {

    const classes = useStyles()

   

    return(
        <>
            <TextField 
                {...input}
                label={label}
                className={classes.inputField}
            />
           {touched && error ? <Alert className={classes.alert} severity="error">{error}</Alert> : null}
        </>
    )
}

export default SurveyField