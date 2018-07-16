import React, { Component } from 'react'
import { Input, Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class SearchForm extends Component {

  onSubmit = () => {
    'fazer algo'
  }

  render() {
    return(
      <Form onSubmit={this.onSubmit}>
        <Input icon='search' iconPosition='left' placeholder='Search by tag' />
      </Form>
    )
  }
}

SearchForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default SearchForm
