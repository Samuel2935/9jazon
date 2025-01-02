
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='mt-72 text-red-300'>
      <h1>Oops! Page not found.</h1>
      <p><Link to="/">Return home </Link> </p>
    </div>
  )
}

export default NotFound
