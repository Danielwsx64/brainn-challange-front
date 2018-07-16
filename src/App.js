import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserFromStorage } from './actions/User'

import UserPage from './components/pages/UserPage'
import RepositoryPage from './components/pages/RepositoryPage'

class App extends Component {

  componentWillMount() {
    if(localStorage.user_id)
      this.props.getUserFromStorage()
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact component={UserPage} />
          <Route path='/repositories' exact component={RepositoryPage} />
        </Switch>
      </div>
      )
  }
}

App.propTypes = {
  getUserFromStorage: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getUserFromStorage,
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
