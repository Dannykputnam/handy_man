import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Services from '../services/Services'

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
      <h2>Workers Employee Number:</h2>
      <p>{worker.employee}</p>
      <h4>What can {worker.name} do?</h4>
      <p>{worker.title}</p>
      <Link to={'/workers'}>Back</Link>
      <Services workerId={params.workerId} />
      


    </>
  )
} 

export default WorkerShow; 