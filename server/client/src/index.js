import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import reduxThunk from 'redux-thunk'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { teal } from '@material-ui/core/colors'
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1a237e'
        },
        secondary: teal,
    }
})

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>, 
    document.getElementById('root')
)