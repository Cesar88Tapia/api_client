import React from 'react';
import React, { render } from 'react-dom';

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
  addNewUser() {
    this.props.postUsers(this.state.userName, this.state.password);

    this.setState({
      userName: '',
      password: ''
    })
  }

  render (){
    return(
      <div>
        <h1 className='registro'> registrate </h1>
      </div>
    )
  }
}
