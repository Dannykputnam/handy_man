import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ServiceForm from './ServiceForm';
// import Comments from '../comments/Comments';


const Service = ({ id, name, description, mins, deleteService, updateService }) => {
  const [editing, setEdit] = useState(false)

  return(
    <>
      <h2>{name}</h2>
      <h4>Minutes to to complete: {mins}</h4>
      <p>{description}</p>
      { editing ?
        <>
          <ServiceForm
            id={id}
            name={name}
            mins={mins}
            description={description}
            updateService={updateService}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
        :
        <button onClick={() => setEdit(true)}>Edit</button>
      }
      <button onClick={() => deleteService(id)}>Delete</button>
      {/* <Comments postId={id} /> */}
    </>
  )
}

export default Service;