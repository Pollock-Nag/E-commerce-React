
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from './Components/NavigationBar';
import CustomerLists from './Pages/CustomerLists';
import ManageOrders from './Pages/ManageOrders';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Router>
        <Routes>
          <Route path="/" element={<CustomerLists />}></Route>
          <Route path="/ManageOrders/:nid" element={<ManageOrders />}></Route>

          <Route path="*" element></Route>
        </Routes>
      </Router>






    </div>
  );
}

export default App;
