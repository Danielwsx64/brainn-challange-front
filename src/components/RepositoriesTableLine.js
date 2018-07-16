import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import EditTagsModal from './EditTagsModal'
class RepositoriesTableLine extends Component {

  submitTags = tags => {
    const { repository, submitTags } = this.props

    return submitTags({
      repository_id: repository.id,
      tags: tags
    })
  }

  render() {
    const { repository } = this.props

    const tags = repository.tags.map(function(tag){
      return `#${tag.name}`
    }).join(', ')

    const plain_tags = tags.replace(/#/g,'')

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
          <EditTagsModal
            tags={plain_tags}
            repository_name={repository.name}
            submitTags={this.submitTags}/>
        </Table.Cell>
      </Table.Row>
      )
  }
}

RepositoriesTableLine.propTypes = {
  submitTags: PropTypes.func.isRequired,
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
