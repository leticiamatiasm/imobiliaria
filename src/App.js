// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
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

// export default App;

import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom';
import {Nav} from 'react-bootstrap';

function App(){
    return(
        <div className="App">
            <BrowserRouter>
                <Nav variant='tabs'>
                    <Nav.Link as={Link} to="/">Página Inicial</Nav.Link>
                </Nav>
            
            <Routes>
                <Route path="/" exact={true} element={<Home/>}> </Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;