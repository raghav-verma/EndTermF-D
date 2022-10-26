import './App.css';
import './styles/builder-page.css';
import './styles/globals.css';
import './styles/Home.module.css';
import './styles/listing.module.css';
import "react-multi-carousel/lib/styles.css";
import './styles/building.css';
import './styles/thanku.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/login/login';
import Register from './pages/login/register';
import Home from './pages/home/home';
import Building from './pages/listing/building';
import Detail from './pages/detail/detail';
import RealEstate from './pages/addestate/addestate';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Thanku from './pages/thanku';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div><ToastContainer />

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/estates' element={<Building />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/addestate' element={<RealEstate />} />
          <Route path='/thankyou' element={<Thanku />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
