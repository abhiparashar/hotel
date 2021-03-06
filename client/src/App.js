import './App.css';
import{BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './booking/Home'
import Login from "./auth/Login"
import Register from "./auth/Register"
import NavTab from './components/NavTab'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavTab/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
