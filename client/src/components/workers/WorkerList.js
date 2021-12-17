import { Link } from 'react-router-dom';
import WorkerShow from './WorkerShow';

const WorkerList = ({ workers, deleteWorker, updateWorker }) => {
  return (
    <>
      { workers.map( w => 
      
        <>
        <br />
          <Link to={`/workers/${w.id}`} key={w.id} >{w.name}</Link>
          <br />
          <br />
          <button onClick={() => deleteWorker(w.id)}>Delete</button>
          
          <br />
        </>
      )}
    </>
  )
}

export default WorkerList;