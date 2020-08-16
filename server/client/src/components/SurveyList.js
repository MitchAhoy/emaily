import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSurveys } from '../actions'


const SurveyList = ({ surveys }) => {

    useEffect(() => {
        fetchSurveys()
        
    })

    return(
        <div>
            {surveys}
        </div>
    )



}

const mapStateToProps = ({ surveys }) => {
    return { surveys }
}


export default connect(mapStateToProps, { fetchSurveys })(SurveyList)