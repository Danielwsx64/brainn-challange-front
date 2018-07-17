import React, { Component } from 'react'
import { Input, Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class SearchForm extends Component {

  state = { tag: '' }

  onSubmit = () => this.props.submit(this.state.tag)

  onChange = e =>
    this.setState({ [e.target.name]: e.target.value })

  render() {
    return(
      <Form onSubmit={this.onSubmit}>
        <Input
          icon='search'
          iconPosition='left'
          name='tag'
          value={this.state.tag}
          onChange={this.onChange}
          placeholder='Search by tag' />
      </Form>
    )
  }
}

SearchForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default SearchForm
