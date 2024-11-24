import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  selectCounter,
} from '../../redux/counterSlice.ts';

const Counter = () => {
  const count = useSelector(selectCounter) as string;
  const dispatch = useDispatch();

  return (
    <div className='max-w-4xl mx-auto mt-8 text-center'>
      <h1 className='text-3xl font-bold text-gray-800'>Counter</h1>
      <p className='mt-4 text-lg'>
        Counter: <span className='font-semibold'>{count}</span>
      </p>
      <div className='mt-6 flex justify-center space-x-4'>
        <button
          onClick={() => dispatch(increment())}
          className='px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600'
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600'
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
