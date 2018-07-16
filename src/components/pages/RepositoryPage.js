import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Grid, Header } from 'semantic-ui-react'

import SearchForm from '../forms/SearchForm'
import RepositoriesTable from '../RepositoriesTable'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserRepositories } from '../../actions/User'

import Api from '../../Api'

class RepositoryPage extends Component {

  submitSearch = tag => ( console.log(tag) )

  submitTags = data =>
    Api.user.repositories.tags.update({
      ...data,
      user_id: this.props.user.id
    })
      .then( () => this.props.getUserRepositories(this.props.user.id))

  componentWillMount() {
    this.props.getUserRepositories(this.props.user.id)
  }

  render() {
    const repositories = this.props.user.repositories

    return(
      <Container fluid style={{ height: '60vh', padding: '5px' }} >
        <Header as='h1'> Githubstars</Header>

        <Grid>
          <Grid.Column floated='left' width={5}>
            <SearchForm submit={this.submitSearch}/>
          </Grid.Column>
          <Grid.Column floated='right' width={2}>
            <a href='/'> Home</a>
          </Grid.Column>
        </Grid>

        <Grid>
          <Grid.Column>

            <RepositoriesTable
              repositories={repositories}
              submitTags={this.submitTags} />

          </Grid.Column>
        </Grid>
      </Container>
      )
  }
}

RepositoryPage.propTypes = {
  user: PropTypes.object.isRequired,
}

const mapStateToProps = store => ({
  user: store.user
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getUserRepositories,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryPage)
