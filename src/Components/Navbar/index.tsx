import { Link } from 'react-router-dom';
import { useState } from 'react';
import { APP_NAME } from '../../config';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-blue-600 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <h1 className='text-2xl font-bold'>
              <Link to='/'>{APP_NAME}</Link>
            </h1>
          </div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              <Link
                to='/'
                className='px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700'
              >
                Home
              </Link>
              <Link
                to='/about'
                className='px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700'
              >
                About
              </Link>
              <Link
                to='/photo-app'
                className='px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700'
              >
                Photo app
              </Link>
              <Link
                to='/dicom-viewer'
                className='px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700'
              >
                DiCom Viewer
              </Link>
            </div>
          </div>
          <div className='-mr-2 flex md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-blue-700 focus:outline-none'
            >
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d={
                    isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <Link
              to='/'
              className='block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700'
            >
              Home
            </Link>
            <Link
              to='/about'
              className='block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700'
            >
              About
            </Link>
            <Link
              to='/photo-app'
              className='block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700'
            >
              Photo app
            </Link>
            <Link
              to='/dicom-viewer'
              className='block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700'
            >
              DiCom Viewer
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
