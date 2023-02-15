import logo from './logo.svg';
import './App.css';
import Index from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/profile';
import Register from './pages/register';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Index /> */}
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
