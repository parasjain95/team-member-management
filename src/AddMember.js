import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMember extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const fname = this.getFname.value;
    const lname = this.getLname.value;
    const email = this.getEmail.value;
    const mobile = this.getMobile.value;
    const data = {
      id: new Date(),
      fname,
      lname,
      email,
      mobile,
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
          <input required type="number" ref={(input) => this.getMobile = input}
          placeholder="Enter Mobile Number" /><br /><br />
          <button>SAVE</button>   <button onClick={this.handleCancelAdd}>CANCEL</button>
        </form>
      </div>
    );
  }
}
export default connect()(AddMember);
