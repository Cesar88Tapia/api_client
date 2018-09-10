import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Register from './components/Register.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
    this.addUsers = this.addRegister.bind(this);
    this.getUsers = this.getUsers.bind(this);
  }

  getUsers() {
    axios.get('/users')
    .then((results) => {
      this.setState({list: results.data});
    })
    .catch((err) => {
      console.log(err);
    })
  }

  addRegister(userName, password) {
    axios.post('/users', {
      userName: userName,
      password: password
    })
    .then(() => {
      this.getUsers();
    })
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (<div>
        <h1 className="title">Generador de Tickets</h1>

      </div>

    )
  }
}

export default App;
