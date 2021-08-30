
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserList } from './components/userList/UserList';
import NavBar from './components/navBar/NavBar';
import AddUser from './components/addUser/AddUser';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <UserList/>
    <AddUser/>
    </div>
  );
}

export default App;
