import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMember extends Component {

  constructor(){
    super();
    this.state = {
      role: "regular"
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const fname = this.getFname.value;
    const lname = this.getLname.value;
    const email = this.getEmail.value;
    const mobile = this.getMobile.value;
    const role = this.state.role;
    const data = {
      id: new Date(),
      fname,
      lname,
      email,
      mobile,
      role,
      editing: false
    }
    this.props.dispatch({
      type: 'ADD_MEMBER',
      data
    })
    this.getFname.value = '';
    this.getLname.value = '';
    this.getEmail.value = '';
    this.getMobile.value = '';
    this.setState({
      role: "regular"
    });
  }

  handleRoleChange = (e) => {
    this.setState({
      role: e.target.value
    });
  }

  handleCancelAdd = (e) => {
    e.preventDefault();
    console.log('cancel add');
  }

  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading">Add Member</h1>
        <form className="form" onSubmit={this.handleSubmit} >
          <input required type="text" ref={(input) => this.getFname = input}
          placeholder="Enter First Name" /><br /><br />
          <input required type="text" ref={(input) => this.getLname = input}
          placeholder="Enter Last Name" /><br /><br />
          <input required type="email" ref={(input) => this.getEmail = input}
          placeholder="Enter Email ID" /><br /><br />
          <input required type="number" max={9999999999} ref={(input) => this.getMobile = input}
          placeholder="Enter Mobile Number" /><br /><br />
          <label>
            <input type="radio" value="admin" checked={this.state.role === "admin"} onChange={this.handleRoleChange} />
            Admin(can delete other members)
          </label>
          <label>
            <input type="radio" value="regular" checked={this.state.role === "regular"} onChange={this.handleRoleChange} />
            Regular(can't delete other members)
          </label><br/><br/>
          <button>SAVE</button>
        </form>
      </div>
    );
  }
}
export default connect()(AddMember);
