import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const Comments = ({ serviceId }) => {
  const [comments, setComments] = useState([])

  useEffect( () => {
    axios.get(`/api/services/${serviceId}/comments`)
      .then( res => setComments(res.data))
      .catch( err => console.log(err))
  }, [])

  const addComment = (comment) => {
    axios.post(`/api/services/${serviceId}/comments`, { comment })
      .then( res => setComments([ ...comments, res.data ]))
      .catch( err => console.log(err))
  }

  const deleteComment = (id) => {
    axios.delete(`/api/services/${serviceId}/comments/${id}`)
      .then( res => {
        alert(res.data.message)
        setComments(comments.filter( c => c.id !== id ))
      })
      .catch( err => console.log(err))
  }

  const updateComment = (id, comment) => {
    axios.put(`/api/services/${serviceId}/comments/${id}`, { comment })
      .then( res => {
        const newUpdatedComments = comment.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setComments(newUpdatedComments)
        // edit works but needs to refresh
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <h1>Comments</h1>
      <CommentForm addComment={addComment} />
      <CommentList 
        comments={comments} 
        serviceId={serviceId} 
        deleteComment={deleteComment}
        updateComment={updateComment}
        id
      />
    </>
  )
}

export default Comments;