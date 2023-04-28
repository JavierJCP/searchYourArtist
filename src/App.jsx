import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Albums from './Pages/Albums';
import Tracks from './Pages/Tracks';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/albums/:id' element={<Albums />} />
      <Route path='/tracks/:id' element={<Tracks />} />
    </Routes>
  );
}

export default App;
