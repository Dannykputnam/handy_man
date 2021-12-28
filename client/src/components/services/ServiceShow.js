import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Comments from '../comments/Comments';

const ServiceShow = ({workerId, id}) => {
  const [service, setService] = useState({name: '', description: '', mins: 0})
  let params = useParams()

  useEffect( () => {
    axios.get(`/api/workers/${params.workerId}/services/${params.serviceId}`)
      .then( res => {
        setService(res.data)
      }) 
      .catch( err => console.log(err))
  }, [])

  return (
    <>
      <h1>Name of the Service: {service.name}</h1>
      <p>Service Description: {service.description}</p>
      <p>Minutes to complete service: {service.mins}</p>
      <Link to={(`/workers/${params.workerId}`)}>Back</Link>
      <Comments serviceId={params.serviceId} />
    </>
  )
} 

export default ServiceShow;