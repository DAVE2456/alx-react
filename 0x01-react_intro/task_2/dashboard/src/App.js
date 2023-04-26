import logo from "./holberton-logo.jpg";
import "./App.css"
import { getFullYear, getFooterCopy } from "./utils";

let fullYear = getFullYear().toString();
let footerCopy = getFooterCopy(true)

function App() {
  return (
    <div className='App'>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
    </div>
    <div className="App-body">
      <p>Login to access the full dashboard</p>
      <label for="email">Email</label>
      <input type="email" id="email" />
      <label for="password">Password</label>
      <input type="password" id="password" />
      <button value="ok">Ok</button>
    </div>
    <div className="App-footer">
      <p>Copyright { fullYear } - { footerCopy }</p>
    </div>
    </div>
  );
}

export default App;
