import React, { Component } from 'react';
import AddMember from './AddMember';
import AllMembers from './AllMembers';


class App extends Component {
  render() {
    return (
    <div className="App">
      <div className="navbar">
        <h2 className="center ">Team Member Management WebApp</h2>
        </div>
        <AddMember />
        <AllMembers />
    </div>
    );
  }
}
export default App;