import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentForm from './CommentForm';



const Comment = ({ id, by, title, deleteComment, updateComment }) => {
  const [editing, setEdit] = useState(false)

  return(
    <>
      <h1> Commented By:</h1>
      <h2>{by}</h2>
      <h4>Comment Body:</h4>
      <p>{title}</p>
      { editing ?
        <>
          <CommentForm
            id={id}
            by={by}
            title={title}
            updateComment={updateComment}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
        :
        <button onClick={() => setEdit(true)}>Edit</button>
      }
      <button onClick={() => deleteComment(id)}>Delete</button>
     
    </>
  )
}

export default Comment;