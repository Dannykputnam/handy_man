import { useState, useEffect } from 'react';

const ServiceForm = ({ addService, id, name, mins, description, updateService, setEdit}) => {
  const [service, setService] = useState({ name: '', description: '', mins: 0 })

  useEffect( () => {
    if (id) {
      setService({ name, description, mins })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateService(id, service)
      setEdit(false)
    } else {
      addService(service)
    }
    setService({ name: '', description: '', mins: 0 })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Service Name:</label>
        <input 
          name='Service Name'
          value={service.name}
          onChange={(e) => setService({ ...service, name: e.target.value })}
          required
        />
        <label>Service description:</label>
        <textarea
          name='Service Description'
          value={service.description}
          onChange={(e) => setService({ ...service, description: e.target.value })}
          required
        ></textarea>
        <label>Minutes to complete:</label>
        <input 
          name='minutes to complete job'
          value={service.mins}
          onChange={(e) => setService({ ...service, mins: e.target.value })}
          required
          type="number"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default ServiceForm;