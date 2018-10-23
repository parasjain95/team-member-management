import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditMember extends Component {
  handleEdit = (e) => {
    e.preventDefault();
    const newFname = this.getFname.value;
    const newLname = this.getLname.value;
    const newEmail = this.getEmail.value;
    const newMobile = this.getMobile.value;
    const data = {
      newFname,
      newLname,
      newEmail,
      newMobile
    }
    this.props.dispatch({ type: 'UPDATE_MEMBER', id: this.props.member.id, data: data })
  }

  handleCancelEdit = (e) => {
    e.preventDefault();
    console.log('cancel edit');
  }

  render() {
    return (
    <div key={this.props.member.id} className="post">
      <form className="form" onSubmit={this.handleEdit}>
        <input required type="text" ref={(input) => this.getFname = input}
        defaultValue={this.props.member.fname} placeholder="Enter First Name" /><br /><br />
        <input required type="text" ref={(input) => this.getLname = input}
        defaultValue={this.props.member.lname} placeholder="Enter Last Name" /><br /><br />
        <input required type="email" ref={(input) => this.getEmail = input}
        defaultValue={this.props.member.email} placeholder="Enter Email ID" /><br /><br />
        <input required type="number" ref={(input) => this.getMobile = input}
        defaultValue={this.props.member.mobile} placeholder="Enter Mobile Number" /><br /><br />
        <button>SAVE</button>   <button onClick={this.handleCancelEdit}>CANCEL</button>
      </form>
    </div>
    );
  }
}
export default connect()(EditMember);
