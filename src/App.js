import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './Components/Contacts';
import { Container } from 'react-bootstrap';

// function App() {
//   return (
//     <div class="card">
//     <div class="card-body">
//       <h5 class="card-title">Steve Jobs</h5>
//       <h6 class="card-subtitle mb-2 text-muted">steve@apple.com</h6>
//       <p class="card-text">Stay Hungry, Stay Foolish</p>
//     </div>
//   </div>
//   );
// }
// import React, {Component} from 'react';

class App extends Component {
    render() {
      return (
        <div className="App">
          <Container>
            <h1 style={{textAlign:'center'}}>Details of Comments</h1>
            <Contacts/>
          </Container>
        </div>
      );
    }
  }

export default App;