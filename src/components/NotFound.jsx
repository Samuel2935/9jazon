
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='mt-72 text-red-300'>
      <h1>Oops! Page not found.</h1>
      <h3><Link className='text-emerald-500' to="/">Return home </Link> </h3>
    </div>
  )
}

export default NotFound
