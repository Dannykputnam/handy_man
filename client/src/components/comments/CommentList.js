import { Link } from 'react-router-dom';
import Comment from './Comment';

const CommentList = ({ comments, serviceId, deleteComment, updateComment, id}) => {
  return (
    <>
      { comments.map( c => 
        <>
        
          <Comment
            {...c} 
            serviceId={serviceId} 
            deleteComment={deleteComment} 
            updateComment={updateComment}
          />
           <Link to={`comments/${c.id}`}>Show</Link>
        </> 
        
      )}
    </>
  )
}

export default CommentList;