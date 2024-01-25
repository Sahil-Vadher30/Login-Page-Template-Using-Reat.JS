import logo from './logo.svg';
import './App.css';
import Form_login from './login_page/Form_login';
import Navbar from './login_page/Navbar';
import LeftSideComponent from './login_page/LeftSideComponent';


function App() {
  return (
    <div >
      <Navbar/>
      <div className='body'>
        <LeftSideComponent/>
        <Form_login/>
      </div>
    </div>
  );
}

export default App;
