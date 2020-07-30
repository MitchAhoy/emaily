import React, { useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import  Header  from './Header'
import Landing from './Landing'
import Dashboard from './Dashboard'
import SurveyNew from './surveys/SurveyNew'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	root: {
        height: '100vh',
        textDecoration: 'none'
	}
}))


const App = (props) => {

    const classes = useStyles()

    useEffect(() => {
        props.fetchUser()
    })

    return(
        <div className={classes.root}> 
            <Header />
            <BrowserRouter>
             <Container>
                 <Route exact path='/' component={Landing} />
                 <Route exact path='/surveys' component={Dashboard} />
                 <Route exact path='/surveys/new' component={SurveyNew} />
             </Container>
            </BrowserRouter>
        </div>
    )
}

export default connect(null, actions)(App)