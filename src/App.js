import './App.scss';
import Header from './components/Header/Header';
import Navbar from './pages/Navbar/Navbar';
import Main from './pages/Main/Main';
import { Route,Routes,BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/'element={<Main/>} />
        <Route path='/navbar'element={<Navbar/>} />
      </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
