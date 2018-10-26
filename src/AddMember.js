import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMember extends Component {

  constructor(){
    super();
    this.state = {
      newMember: {
        fname: "",
        lname: "",
        email: "",
        mobile: "",
        role: "regular",
      }
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    const data = { 
      id: new Date(),
      ...this.state.newMember
    }

    this.props.dispatch({
      type: 'ADD_MEMBER',
      data
    })

    this.setState({
      newMember: {
        fname: "",
        lname: "",
        email: "",
        mobile: "",
        role: "regular",
      }
    });
  }

  handleFnameChange = (e) => {
    this.setState({
      newMember: {
        ...this.state.newMember,
        fname: e.target.value
      }
    });
  }

  handleLnameChange = (e) => {
    this.setState({
      newMember: {
        ...this.state.newMember,
        lname: e.target.value
      }
    });
  }

  handleEmailChange = (e) => {
    this.setState({
      newMember: {
        ...this.state.newMember,
        email: e.target.value
      }
    });
  }

  handleMobileChange = (e) => {
    this.setState({
      newMember: {
        ...this.state.newMember,
        mobile: e.target.value
      }
    });
  }

  handleCancelAdd = (e) => {
    e.preventDefault();
    console.log('cancel add');
  }

  handleRoleChange = (e) => {
    this.setState({
      newMember: {
        ...this.state.newMember,
        role: e.target.value
      }
    });
  }

  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading">Add Member</h1>
        <form className="form" onSubmit={this.handleSubmit} >
          <input required type="text" value={this.state.newMember.fname} onChange={this.handleFnameChange}
          placeholder="Enter First Name" /><br /><br />
          <input required type="text" value={this.state.newMember.lname} onChange={this.handleLnameChange}
          placeholder="Enter Last Name" /><br /><br />
          <input required type="email" value={this.state.newMember.email} onChange={this.handleEmailChange}
          placeholder="Enter Email ID" /><br /><br />
          <input required type="number" min={1000000000} max={9999999999} value={this.state.newMember.mobile} onChange={this.handleMobileChange}
          placeholder="Enter Mobile Number" /><br /><br />
          <label>
            <input type="radio" value="admin" checked={this.state.newMember.role === "admin"} onChange={this.handleRoleChange} />
            Admin(can delete other members)
          </label>
          <label>
            <input type="radio" value="regular" checked={this.state.newMember.role === "regular"} onChange={this.handleRoleChange} />
            Regular(can't delete other members)
          </label><br/><br/>
          <button>SAVE</button>
        </form>
      </div>
    );
  }
}
export default connect()(AddMember);
