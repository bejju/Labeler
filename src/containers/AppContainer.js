import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Pagination from 'material-ui-pagination';
class AppContainer extends Component {

  render() {
    const { routes, store } = this.props;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Provider store={store}>
          <div style={{ height: '100%' }}>
            <Router history={browserHistory} children={routes}>
            </Router>
          </div>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default AppContainer
