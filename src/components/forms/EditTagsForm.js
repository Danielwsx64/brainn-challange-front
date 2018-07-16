import React, { Component } from 'react'
import { Button, Input, Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class EditTagsForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tags: props.tags
    }
  }

  onSubmit = () => {
    this.props.submit(this.sanitizeTags(this.state.tags))
      .then(() => this.props.toClose())
  }

  sanitizeTags = tags =>
    tags.replace(/\s/g,'').split(',')

  onChange = e =>
    this.setState({ [e.target.name]: e.target.value })

  render() {
    const { tags } = this.state

    return(
      <Form onSubmit={this.onSubmit}>
        <Form.Group>
          <Input name='tags' onChange={this.onChange} value={tags} />
        </Form.Group>
        <Form.Group>
          <Button type='submit'> Save </Button>
          <Button onClick={this.props.toClose}> Cancel </Button>
        </Form.Group>
      </Form>
    )
  }
}

EditTagsForm.propTypes = {
  submit: PropTypes.func.isRequired,
  toClose: PropTypes.func,
  tags: PropTypes.string.isRequired
}

export default EditTagsForm
