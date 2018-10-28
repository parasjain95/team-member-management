import React, { Component } from 'react';
import AllMembers from './AllMembers';


class App extends Component {
  render() {
    return (
    <div className="App">
      <div className="navbar">
        <h2 className="center ">Team Member Management WebApp</h2>
        </div>
        <AllMembers />
    </div>
    );
  }
}
export default App;