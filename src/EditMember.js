import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditMember extends Component {

  constructor(props){
    super(props);
    this.state = {
      role: this.props.member.role
    };
  }

  handleEdit = (e) => {
    e.preventDefault();
    const newFname = this.getFname.value;
    const newLname = this.getLname.value;
    const newEmail = this.getEmail.value;
    const newMobile = this.getMobile.value;
    const newRole = this.state.role;
    const data = {
      newFname,
      newLname,
      newEmail,
      newMobile,
      newRole
    }
    this.props.dispatch({ type: 'UPDATE_MEMBER', id: this.props.member.id, data: data })
  }

  handleRoleChange = (e) => {
    this.setState({
      role: e.target.value
    });
  }

  handleCancelEdit = (e) => {
    e.preventDefault();
    this.props.dispatch({ type: 'CANCEL_EDIT', id: this.props.member.id})
  }

  render() {
    return (
    <div key={this.props.member.id} className="post">
      <h1 className="post_heading">Edit Member</h1>
      <form className="form" onSubmit={this.handleEdit}>
        <input required type="text" ref={(input) => this.getFname = input}
        defaultValue={this.props.member.fname} placeholder="Enter First Name" /><br /><br />
        <input required type="text" ref={(input) => this.getLname = input}
        defaultValue={this.props.member.lname} placeholder="Enter Last Name" /><br /><br />
        <input required type="email" ref={(input) => this.getEmail = input}
        defaultValue={this.props.member.email} placeholder="Enter Email ID" /><br /><br />
        <input required type="number" maxLength="10" ref={(input) => this.getMobile = input}
        defaultValue={this.props.member.mobile} placeholder="Enter Mobile Number" /><br /><br />
        <label>
          <input type="radio" value="admin" checked={this.state.role==="admin"} onChange={this.handleRoleChange} />
          Admin(can delete other members)
        </label>
        <label>
          <input type="radio" value="regular" checked={this.state.role==="regular"} onChange={this.handleRoleChange} />
          Regular(can't delete other members)
        </label><br/><br/>
        <button>SAVE</button><br/><button onClick={this.handleCancelEdit}>CANCEL</button>
      </form>
    </div>
    );
  }
}
export default connect()(EditMember);
