import React, { Component } from 'react'
import { Container, Grid, Header } from 'semantic-ui-react'
import GetRepositoriesForm from '../forms/GetRepositoriesForm'

class UserPage extends Component {

  submitUser = user => ( console.log(user) )

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

export default UserPage
