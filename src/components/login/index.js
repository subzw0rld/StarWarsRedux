import React, { Component } from 'react';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.handleUserNameInput = this.handleUserNameInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
        username: '',
        password: ''
    };
  }
  handlePasswordInput(event) {
        this.setState({password:event.target.value})
    }

    handleUserNameInput(event) {
        this.setState({username:event.target.value});
    }

    submitForm(event) {
        event.preventDefault();
        let userInfo = {username:this.state.username, password:this.state.password};
    }

  render () {
    return (
      <form className='login' onSubmit={this.submitForm}>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' placeholder='Username' onChange={this.handleUserNameInput} required />
          <label htmlFor='pwd'>Password</label>
          <input type='password' id='pwd' placeholder='Password' onChange={this.handlePasswordInput} required />
          <input type='submit' value='Login'/>
      </form>
    );
  }
}
