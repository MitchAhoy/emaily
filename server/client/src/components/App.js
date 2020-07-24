import React, { useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import  Header  from './Header'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Container from '@material-ui/core/Container'

const Dashboard = () => <h1>Dashboard</h1>
const SurveyNew = () => <h1>SurveyNew</h1>
const Landing = () => <h1>Landing</h1>

const App = (props) => {

    useEffect(() => {
        props.fetchUser()
    })

    return(
        <div> 
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