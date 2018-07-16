import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react'

import PropTypes from 'prop-types'
import EditTagsForm from './forms/EditTagsForm'

class EditTagsModal extends Component {
  state = { modalOpen: false  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {

    const { tags, repository_name, submitTags } = this.props

    return(
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size='mini'
        trigger={<a onClick={this.handleOpen}>edit</a>}>

        <Modal.Header>Edit tags for {repository_name}</Modal.Header>
        <Modal.Content>

          <EditTagsForm
            tags={tags}
            submit={submitTags}
            toClose={this.handleClose}/>

        </Modal.Content>

      </Modal>
    )
  }
}

EditTagsModal.propTypes = {
  repository_name: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  submitTags: PropTypes.func.isRequired
}

export default EditTagsModal
