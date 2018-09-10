import React from 'react';
import ReactDom from 'react-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    }
    this.updateUserName = this.updateUserName.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }
  updateUserName(e) {
    this.setState({
      userName: e.target.value
    })
  }
  updatePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  add() {
    this.props.postUsers(this.state.userName, this.state.password);

    this.setState({
      userName: '',
      password: ''
    })
  }

  render (){
    return(<div>
        userName: <input onChange={this.updateUserName} value={this.state.userName}></input>
        <br />
        password: <input onChange={this.updatePassword} value={this.state.password}></input>
        <button onClick={this.add}>Add New User</button>
      </div>
    )
  }
}

export default Register;
