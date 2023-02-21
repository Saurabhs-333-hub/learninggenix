import logo from './logo.svg';
import './App.css';
import Index from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/profile';
import ProjectNAvAdmin from './pages/ProjectNAvAdmin';
import Register from './pages/register';
function App() {
  let user = localStorage.getItem('user')
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Index /> */}
        <Routes>
          <Route path='/signup' element={<Register />} />
          <Route path='/profile' element={user == 'sonisaurabhsoni333@gmail.com' ? <ProjectNAvAdmin /> : <Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
