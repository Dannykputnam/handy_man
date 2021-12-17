import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
// import Posts from '../posts/Posts'

const WorkerShow = ({}) => {
  const [worker, setWorker] = useState({name: '', employee: 0, title: ''})
  let params = useParams()

  useEffect( () => {
    axios.get(`/api/workers/${params.workerId}`)
      .then( res => {
        setWorker(res.data)
      }) 
      .catch( err => console.log(err))
  }, [])


  return (
    <>
      <h1>Workers Name:</h1>
      <h1>{worker.name}</h1>
      <h2>Workers Name:</h2>
      <p>{worker.employee}</p>
      <h4>What can {worker.name} do?</h4>
      <p>{worker.title}</p>
      {/* <Posts blogId={params.blogId} /> */}
      <Link to={'/workers'}>Back</Link>
      
    
    </>
  )
} 

export default WorkerShow;