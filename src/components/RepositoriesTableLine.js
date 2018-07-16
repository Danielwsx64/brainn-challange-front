import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class RepositoriesTableLine extends Component {

  render() {
    const { repository } = this.props

    const tags = repository.tags.map(function(tag){
      return `#${tag.name}`
    }).join(', ')

    return (
      <Table.Row>

        <Table.Cell>
          <a href={repository.html_url}>
            {repository.name}
          </a>
        </Table.Cell>

        <Table.Cell singleLine>
          {repository.description}
        </Table.Cell>

        <Table.Cell>
          {repository.language}
        </Table.Cell>

        <Table.Cell>
          {tags}
        </Table.Cell>

        <Table.Cell>
          <a>Edit</a>
        </Table.Cell>
      </Table.Row>
      )
  }
}

RepositoriesTableLine.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number.isRequired,
    github_id: PropTypes.number,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    html_url: PropTypes.string.isRequired,
    language: PropTypes.string,
    tags: PropTypes.array.isRequired
  }).isRequired
}
export default RepositoriesTableLine
