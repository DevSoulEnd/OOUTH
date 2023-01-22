import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Appointments from "./pages/appointments/Appointments";
import Transactions from "./pages/transactions/Transactions";
import PaymentForm from "./components/form/PaymentForm";
import Formwrapper from "./pages/form-wrapper/Formwrapper";
import Payment from "./pages/payment-form/Payment";
import Transform from "./components/form/Transform";
import Profile from "./pages/profile/Profile";
import Message from "./pages/messages/Message";
import Singleappointment from "./pages/singlecard/Singleappointment";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
        <Route path='/' element = {<Navigate to= "/home"/>}/>
        <Route path='/home' element = {<Home/>}/> 
        <Route path='/appointments' element = {<Appointments/>}/> 
        <Route path="/form-wrapper" element = {<Formwrapper/>}/>
        <Route path="/transactions" element = {<Transactions/>}/>
        <Route path="/payment-form" element = {<PaymentForm/>}/>
        <Route path="/payment-form2" element = {<Payment/>}/>
        <Route path="/transform" element = {<Transform/>}/>
        <Route path="/profile" element = {<Profile/>}/>
        <Route path="/message" element = {<Message/>}/>
        <Route path="/appointments/:id" element = {<Singleappointment/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;