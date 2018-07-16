import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import RepositoriesTableLine from './RepositoriesTableLine'

class RepositoriesTable extends Component {

  render() {
    const { repositories } = this.props

    const repositoriesList = repositories.map(function(repository){
      return <RepositoriesTableLine repository={repository}/>
    })

    return (
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Repository</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Language</Table.HeaderCell>
            <Table.HeaderCell>Tags</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          { repositoriesList }
        </Table.Body>
      </Table>
    )
  }
}

RepositoriesTable.propTypes = {
  repositories: PropTypes.array.isRequired
}

export default RepositoriesTable
