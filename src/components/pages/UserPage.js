import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Grid, Header } from 'semantic-ui-react'
import GetRepositoriesForm from '../forms/GetRepositoriesForm'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createUser } from '../../actions/User'
import Api from '../../Api.js'

class UserPage extends Component {

  storeUser = data => {
    localStorage.user_id = this.props.user.id
    localStorage.user_name = this.props.user.name
  }

  submitUser = user => {
    return this.props.createUser(user)
      .then( resp => Api.user.repositories.fetch(resp.data.id) )
      .then( data => {
        this.storeUser(data)
        window.location.href = '/repositories'
        // this.props.history.push('/repositories')
      })
  }

  render() {
    return(
      <Container fluid style={{ height: '60vh', padding: '5px' }} >
          <Header as='h1'> Githubstars</Header>

          <Grid
            textAlign='center'
            verticalAlign='middle'
            style={{ height: '100%' }} >

            <Grid.Column style={{ maxWidth: 450   }}>

              <GetRepositoriesForm submit={this.submitUser} />

            </Grid.Column>
          </Grid>
      </Container>
    )
  }
}

UserPage.propTypes = {
  createUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

const mapStateToProps = store => ({
  user: store.user
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    createUser,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
