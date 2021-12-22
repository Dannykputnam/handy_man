import { useState } from 'react';
import WorkerForm from './WorkerForm';

const Worker = ({ id, title, employee, name,  updateWorker, deleteWorker }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <h2>{name}</h2>
      <p>{title}</p>
      {
        editing ?
        <>
          <WorkerForm
            id={id}
            title={title}
            name={name}
            employee={employee}
            updateWorker={updateWorker}
            setEdit={setEdit}
          />
          <button onClick={ () => setEdit(false) }>Cancel</button>
        </>
        :
        <button onClick={ () => setEdit(true) }>Edit</button>
      }
      <button onClick={ () => deleteWorker(id) }>Delete</button>
    </>
  )
}

export default Worker;