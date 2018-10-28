import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  addMember,
  updateMember,
  cancel
} from "./actions/memberActions";

class AddOrEditMember extends Component {

  constructor(props){
    super(props);

    if(this.props.editMemberId){
      this.state = {
        tempMember: this.props.members.filter((member) => member.id === this.props.editMemberId)[0]
      }
    }else{
      this.state = {
        tempMember: {
          fname: "",
          lname: "",
          email: "",
          mobile: "",
          role: "regular",
        }
      };
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if(!!this.props.editMemberId){
      const data = {
        ...this.state.tempMember
      }

      console.log(data);

      this.props.updateMember(data);
    }else{
      const data = { 
        ...this.state.tempMember,
        id: new Date()
      }

      console.log(data);

      this.props.addMember(data);
    }

    this.setState({
      tempMember: {
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
      tempMember: {
        ...this.state.tempMember,
        fname: e.target.value
      }
    });
  }

  handleLnameChange = (e) => {
    this.setState({
      tempMember: {
        ...this.state.tempMember,
        lname: e.target.value
      }
    });
  }

  handleEmailChange = (e) => {
    this.setState({
      tempMember: {
        ...this.state.tempMember,
        email: e.target.value
      }
    });
  }

  handleMobileChange = (e) => {
    this.setState({
      tempMember: {
        ...this.state.tempMember,
        mobile: e.target.value
      }
    });
  }

  handleRoleChange = (e) => {
    this.setState({
      tempMember: {
        ...this.state.tempMember,
        role: e.target.value
      }
    });
  }

  handleCancel = (e) => {
    e.preventDefault();
    this.props.cancecl();
  }

  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading">Add Member</h1>
        <form className="form" onSubmit={this.handleSubmit} >
          <input required type="text" value={this.state.tempMember.fname} onChange={this.handleFnameChange}
          placeholder="Enter First Name" /><br /><br />
          <input required type="text" value={this.state.tempMember.lname} onChange={this.handleLnameChange}
          placeholder="Enter Last Name" /><br /><br />
          <input required type="email" value={this.state.tempMember.email} onChange={this.handleEmailChange}
          placeholder="Enter Email ID" /><br /><br />
          <input required type="number" min={1000000000} max={9999999999} value={this.state.tempMember.mobile} onChange={this.handleMobileChange}
          placeholder="Enter Mobile Number" /><br /><br />
          <label>
            <input type="radio" value="admin" checked={this.state.tempMember.role === "admin"} onChange={this.handleRoleChange} />
            Admin(can delete other members)
          </label>
          <label>
            <input type="radio" value="regular" checked={this.state.tempMember.role === "regular"} onChange={this.handleRoleChange} />
            Regular(can't delete other members)
          </label><br/><br/>
          <button>SAVE</button><br/><button onClick={this.handleCancel}>CANCEL</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addMember: (data) => dispatch(addMember(data)),
  updateMember: (data) => dispatch(updateMember(data)),
  cancel: () => dispatch(cancel())
});

export default connect(null, mapDispatchToProps)(AddOrEditMember);
