import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import PhotoApp from './Pages/PhotoApp';
import Navbar from './Components/Navbar';
import NotFound from './Components/NotFound';
import Counter from './Pages/Counter';
import DicomViewer from './Components/DicomViewer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/photo-app' element={<PhotoApp />} />
        <Route path='/dicom-viewer' element={<DicomViewer />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
