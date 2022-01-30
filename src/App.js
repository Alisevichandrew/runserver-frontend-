import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import PrivateRoute from './utils/PrivateRoute'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <PrivateRoute component={HomePage} path="/" exact/>
        <Route component={LoginPage} path="/login"/>
       </Router>  
    </div>
  );
}

export default App;
