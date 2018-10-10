import React, { Component } from 'react';
import EnhancedForm from './components/EnhancedForm';

class App extends Component {
  constructor() {
    super();

    this.setUser = this.setUser.bind(this);

    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: ''
      },
    };
  }

  setUser(user) {
    const updatedUser = Object.assign(this.state.user, user);
    this.setState(updatedUser);
    console.log('User was set!');
  }

  render() {
    return (
      <div className="container">
        <h1>Formik Studies</h1>
        <EnhancedForm
          setUser={this.setUser}
          user={this.state.user}
        />
      </div>
    );
  }
}

export default App;
