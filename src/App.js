import logo from './logo.svg';
import './App.css';
import Index from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/profile';
import ProjectNAvAdmin from './pages/ProjectNAvAdmin';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Index /> */}
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/profile' element={<ProjectNAvAdmin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
