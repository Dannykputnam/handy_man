import { Link } from 'react-router-dom';
import WorkerShow from './WorkerShow';
import Worker from './Worker'

const WorkerList = ({ workers, deleteWorker, updateWorker }) => {

  
  return (
    <>
      { workers.map( w => 
            <>
              <Worker
                {...w} 
                key={w.id} 
                updateWorker={updateWorker} 
                deleteWorker={deleteWorker} 
              />
              <Link to={`/Workers/${w.id}`}>Show</Link>
              <br />
            </>
          )}
        </>
      )
    }

export default WorkerList;