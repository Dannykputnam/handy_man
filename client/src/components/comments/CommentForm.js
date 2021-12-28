import { useState, useEffect } from 'react';

const CommentForm = ({ addComment, id, by, title, updateComment, setEdit}) => {
  const [comment, setComment] = useState({ by: '', title: ''})

  useEffect( () => {
    if (id) {
      setComment({ by, title})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateComment(id, comment)
      setEdit(false)
    } else {
      addComment(comment)
    }
    setComment({ by: '', title: ''})
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Comment Made by:</label>
        <input 
          name='Comment Name'
          value={comment.by}
          onChange={(e) => setComment({ ...comment, by: e.target.value })}
          required
        />
        <label>Comment Body:</label>
        <textarea
          name='Comment Body'
          value={comment.title}
          onChange={(e) => setComment({ ...comment, title: e.target.value })}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default CommentForm;