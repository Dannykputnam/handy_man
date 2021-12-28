import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
// import Posts from '../posts/Posts';

const CommentShow = ({}) => {
  const [comment, setComment] = useState({by: '', title: ''})
  let params = useParams()

  useEffect( () => {
    axios.get(`/api/services/${params.serviceId}/comments/${params.commentId}`)
      .then( res => {
        setComment(res.data)
      }) 
      .catch( err => console.log(err))
  }, [])

  return (
    <>
      <h1>Commented by: {comment.by}</h1>
      <p>Comment Body: {comment.title}</p>
      
      {/* <Posts blogId={params.blogId} /> */}
      <Link to={(`/services/${params.serviceId}`)}>Back</Link>
    </>
  )
} 

export default CommentShow;