import React, { Component } from 'react'
import { Button, Icon, Input, Form, Progress } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class GetRepositoriesForm extends Component {

  state = {
    data: {
      github_user: ''
    },
    loading: false,
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
  }

  render() {
    const { data, loading } = this.state

    if(loading)
      return(
        <Progress percent={100} active>
          Getting the repositories list from Github...
        </Progress>
        )

    return(
      <Form style={{ height: '100%' }} onSubmit={this.onSubmit}>
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
