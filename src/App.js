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
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/TopBar.js';
import QueryScreen from './screens/QueryScreen';
import Home from './screens/Home';
import Login from './screens/Login';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';


function App() {
    return (
        <div className="App">
            {/* <NavigationBar /> */}
            <BrowserRouter>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home" as={Link} to="/">Nome da empresa</Navbar.Brand>
                        <Nav className="me-auto" style={{ position: 'absolute', top: '50%', right: '15%', transform: 'translateY(-50%)' }}>
                            <Nav.Link href="#pricing" as={Link} to="/Login">Fazer login</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/" exact={true} element={<Home />}> </Route>
                    <Route path="/Login" element={<Login />}> </Route>
                    <Route path="/QueryScreen" element={<QueryScreen />}> </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;