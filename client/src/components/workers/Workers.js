import { useState, useEffect } from 'react';
import axios from 'axios';
// import WorkerForm from './WorkerForm';
// import WorkerList from './WorkerList';

const Workers = ({}) => {
  const [workers, setWorkers] = useState([])

  // useEffect( () => {
  //   axios.get('/api/workers')
  //     .then( res => {
  //       setWorker(res.data)
  //     })
  //     .catch( err => console.log(err))
  // }, [])

  // const addWorker = (worker) => {
  //   axios.post('/api/workers', { worker })
  //     .then( res => {
  //       setWorkers([...workers, res.data])
  //     })
  //     .catch( err => console.log(err))
  // }

  return (
    <>
      <h1>Workers Page</h1>
      {/* <BlogForm addBlog={addWorker} />
      <BlogList blogs={blogs} /> */}
    </>
  )
}

export default Workers;