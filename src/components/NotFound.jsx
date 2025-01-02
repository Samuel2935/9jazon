
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='mt-72 text-red-300'>
      <h1>Oops! Page not found.</h1>
      <h3><Link style={{textDecoration:"none", color:"blue"}} to="/">Return home </Link> </h3>
    </div>
  )
}

export default NotFound
