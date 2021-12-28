// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCars from './pages/BookingCars';
import 'antd/dist/antd.css';
import UserBookings from './pages/UserBookings';
import AddCar from './pages/AddCar';
import AdminHome from './pages/AdminHome';
import EditCar from './pages/EditCar';
import { useParams } from 'react-router-dom';


function App() {
  
  // const {props} = useParams();
  // function ProtectedRoute() {
  //     // const navigate = useNavigate();
  //     if (localStorage.getItem('user')) {
  //       return <Route {...props} />;
  //     }
  //     else {
  //       // return navigate("/login")
  //       return <Navigate to="/login" />
  //     }
  //   }
  return (
    <div className="App">
    
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/booking/:carid"  element={<BookingCars/>} />
          <Route path="/userbookings"  element={<UserBookings/>} />
          <Route path="/addcar"  element={<AddCar/>} />
          <Route path="/admin"  element={<AdminHome/>} />
          <Route path="/editcar/:carid"  element={<EditCar/>} />
        </Routes>
      </Router>
    </div>
  );
  
  
}
export default App;

