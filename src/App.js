import logo from './logo.svg';
import './App.css';
import UseStateHookDemo from './UseStateHookDemo';
import Inline from './Inline';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
function App() {
  return (  
    <div className="App">
      <Home></Home>
      <Inline></Inline>
      <UseStateHookDemo primary={true}></UseStateHookDemo>
    </div>
  );
}

export default App;
