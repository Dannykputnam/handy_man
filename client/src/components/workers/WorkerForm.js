import { useState, useEffect } from 'react';

const WorkerForm = ({ id, name, employee, title, addWorker, setEdit }) => {
  const [worker, setWorker] = useState({ name: '', employee: 0, title: '' })

  useEffect( () => {
    if (id) {
      setWorker({ name, employee, title})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
    addWorker(worker)
    setEdit(false)
  } else {
    addWorker(worker)
  }
    setWorker({ name: '', employee: 0, title: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      <label>Name:</label>
        <input 
          name='name' 
          value={worker.name}
          onChange={(e) => setWorker({...worker, name: e.target.value})}
          required
          placeholder="Name"
        />
         <label>Employee #:</label>
        <input 
          name='employee' 
          value={worker.employee}
          onChange={(e) => setWorker({...worker, employee: e.target.value})}
          required
          type="number"
          placeholder="Employee #"
        />
        <label>Title:</label>
        <textarea
          name='title'
          value={worker.title}
          onChange={(e) => setWorker({...worker, title: e.target.value})}
          required
          placeholder="Title"
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default WorkerForm;