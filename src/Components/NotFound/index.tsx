import { useState } from 'react';
import { Link } from 'react-router-dom';

const ErrorComponent = () => {
  throw new Error('This is a render-time error');
};

const NotFound = () => {
  const [showError, setShowError] = useState(false);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800'>
      <h1 className='text-6xl font-bold text-red-500'>404</h1>
      <p className='text-xl mt-4'>Page Not Found</p>

      <button
        className='mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        onClick={() => setShowError(true)}
      >
        Show Error
      </button>
      {showError && <ErrorComponent />}

      <Link
        to='/'
        className='mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
