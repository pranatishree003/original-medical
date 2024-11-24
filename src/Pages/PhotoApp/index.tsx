import ImageManipulator from '../../Components/ImageManipulator';

const PhotoApp = () => {
  // const dispatch = useDispatch();

  return (
    <div className='max-w-4xl mx-auto mt-8 text-center'>
      <h1 className='text-3xl font-bold text-gray-800'>PhotoApp</h1>

      <div className='mt-8'>
        <p className='text-gray-700'>This is photo app</p>
      </div>

      <ImageManipulator />
    </div>
  );
};

export default PhotoApp;
