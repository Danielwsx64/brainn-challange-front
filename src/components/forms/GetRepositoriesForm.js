import React, { Component } from 'react'
import { Button, Icon, Input, Form, Message, Progress } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class GetRepositoriesForm extends Component {

  state = {
    error: null,
    data: {
      github_user: ''
    },
    loading: false,
  }

  handleError = () => {
    this.setState(
      {
        error: { message: 'Failed on fetch user repositories' },
        loading: false
      }
    )
  }

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value  },
      loading: false
    })

  onSubmit = e => {
    e.preventDefault()
    this.setState({loading: true})

    this.props.submit(this.state.data.github_user)
      .catch( () => this.handleError() )
  }

  render() {
    const { data, loading } = this.state

    const errorMessage = (this.state.error)?
      <Message
        negative
        content={this.state.error.message} /> : ''


    if(loading)
      return(
        <Progress percent={100} active>
          Getting the repositories list from Github...
        </Progress>
        )

    return(
      <Form style={{ height: '100%' }} onSubmit={this.onSubmit}>
        {errorMessage}
        <Form.Group>
          <Input
            label='https://github.com/'
            type='text'
            name='github_user'
            value={data.github_user}
            onChange={this.onChange} />
        </Form.Group>

        <Button type='submit'>
          Get Repositories
          <Icon name='caret right' />
        </Button>
      </Form>
    )
  }
}

GetRepositoriesForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default GetRepositoriesForm
