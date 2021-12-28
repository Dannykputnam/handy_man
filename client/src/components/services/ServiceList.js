import { Link } from 'react-router-dom';
import Service from './Service';

const ServiceList = ({ services, workerId, deleteService, updateService, id}) => {
  return (
    <>
      { services.map( s => 
        <>
        
          <Service
            {...s} 
            workerId={workerId} 
            deleteService={deleteService} 
            updateService={updateService}
          />
           <Link to={`services/${s.id}`}>Show</Link>
        </> 
        
      )}
    </>
  )
}

export default ServiceList;