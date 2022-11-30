
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from './Components/NavigationBar';
import CustomerLists from './Pages/CustomerLists';
import ManageOrders from './Pages/ManageOrders';
import OnlinePayments from './Pages/OnlinePayments';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Router>
        <Routes>
          <Route path="/" element={<CustomerLists />}></Route>
          <Route path="/ManageOrders/:phone" element={<ManageOrders />}></Route>
          <Route path="/OnlinePayments/:phone" element={<OnlinePayments />}></Route>
          <Route path="*" element></Route>
        </Routes>
      </Router>






    </div>
  );
}

export default App;
