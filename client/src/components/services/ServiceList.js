import { Link } from 'react-router-dom';
import ServiceShow from './ServiceShow';

const ServiceList = ({ services, workerId, deleteService, updateService, id}) => {
  return (
    <>
      { services.map( s => 
        <>
        
          <ServiceShow 
            {...s} 
            workerId={workerId} 
            deleteService={deleteService} 
            updateService={updateService}
          />
           <Link to={`api/workers/${workerId}/services/${s.id}`}>Show</Link>
        </> 
        
      )}
    </>
  )
}

export default ServiceList;