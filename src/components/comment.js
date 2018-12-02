import React from 'react'
import PropTypes from 'prop-types'

function Comment({ comment }) {
  Comment.propTypes = {
    comment: PropTypes.object.isRequired
  }

  return (
    <div className="test__comment--body">
      {comment.text} <b>by {comment.user}</b>
    </div>
  )
}

export default Comment
