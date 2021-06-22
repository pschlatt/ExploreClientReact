import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

import FetchRandomUser from './components/FetchRandomUser.js'

class App extends React.Component {
  render() {
    return (
      
      <div className="form-container">
        <FetchRandomUser />
      </div>

    );
  }
}

// function App() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);

//   // Note: the empty deps array [] means
//   // this useEffect will run once
//   // similar to componentDidMount()
  
//   return (
//     <div className="App">
//       <header className="FetchRand">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

  

export default App;
