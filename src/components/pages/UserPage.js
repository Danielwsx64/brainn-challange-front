import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Grid, Header } from 'semantic-ui-react'
import GetRepositoriesForm from '../forms/GetRepositoriesForm'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createUser } from '../../actions/User'
import Api from '../../Api.js'

class UserPage extends Component {

  submitUser = user => {
    this.props.createUser(user)
      .then( resp => Api.user.repositories.fetch(resp.data.id) )
      .then( () => console.log('redirecionar') )
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
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    createUser,
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(UserPage)
