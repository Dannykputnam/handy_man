import { Link } from 'react-router-dom';
import WorkerShow from './WorkerShow';
import WorkerForm from './WorkerForm';
import { useState, useEffect } from 'react';



const WorkerList = ({ workers, deleteWorker, updateWorker, workerId }) => {
  const [editing, setEdit] = useState(false)

  const updateWorker = (id, worker) => {
    axios.put(`/api/workers/${id}`, { worker })
      .then( res => {
        const newUpdatedWorkers = worker.map( w => {
          if (w.id === id) {
            return res.data
          }
          return w
        })
        setWorkers(newUpdatedWorkers)
        // edit works but needs to refresh
      })
      .catch( err => console.log(err))
  }
  
  return (
    <>
      { workers.map( w => 
        <>
  <br />
    <Link to={`/workers/${w.id}`} key={w.id} >{w.name}</Link>
    <br />
    <br />
    <button onClick={() => deleteWorker(w.id)}>Delete</button>
    <button onClick={() => updateWorker(w.id)}>Update</button>
   
    <br />
  </>
)}
     
      
    </>
  )
}

export default WorkerList;