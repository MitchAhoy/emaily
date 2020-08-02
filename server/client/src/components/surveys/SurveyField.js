import React from 'react'
import TextField from '@material-ui/core/TextField'

const SurveyField = ({ input, label }) => {
    return(
            <TextField 
                {...input}
                label={label}
            />
    )
}

export default SurveyField