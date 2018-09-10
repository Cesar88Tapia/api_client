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
    this.addRegister = this.addRegister.bind(this);
    this.getRegister = this.getRegister.bind(this);
  }

  getRegister() {
    axios.get('/Register')
    .then((results) => {
      this.setState({list: results.data});
    })
    .catch((err) => {
      console.log(err);
    })
  }

  addRegister(userName, password) {
    axios.post('/Register', {
      userName: userName,
      password: password
    })
    .then(() => {
      this.getRegister();
    })
  }

  componentDidMount() {
    this.getRegister();
  }

  render() {
    return (<div>
        <h1 className="title">Generador de Tickets</h1>

      </div>

    )
  }
}

export default App;
