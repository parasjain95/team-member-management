import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditMember extends Component {

  constructor(props){
    super(props);
    this.state = {
      editMember: this.props.member
    };
  }

  handleEdit = (e) => {
    e.preventDefault();
    const data = { 
      ...this.state.editMember
    }

    this.props.dispatch({ type: 'UPDATE_MEMBER', id: this.props.member.id, data: data })
  }

  handleFnameChange = (e) => {
    this.setState({
      editMember: {
        ...this.state.editMember,
        fname: e.target.value
      }
    });
  }

  handleLnameChange = (e) => {
    this.setState({
      editMember: {
        ...this.state.editMember,
        lname: e.target.value
      }
    });
  }

  handleEmailChange = (e) => {
    this.setState({
      editMember: {
        ...this.state.editMember,
        email: e.target.value
      }
    });
  }

  handleMobileChange = (e) => {
    this.setState({
      editMember: {
        ...this.state.editMember,
        mobile: e.target.value
      }
    });
  }

  handleRoleChange = (e) => {
    this.setState({
      role: e.target.value
    });
  }

  handleRoleChange = (e) => {
    this.setState({
      editMember: {
        ...this.state.editMember,
        role: e.target.value
      }
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
        <input required type="text" value={this.state.editMember.fname} onChange={this.handleFnameChange}
         placeholder="Enter First Name" /><br /><br />
        <input required type="text" value={this.state.editMember.lname} onChange={this.handleLnameChange}
         placeholder="Enter Last Name" /><br /><br />
        <input required type="email" value={this.state.editMember.email} onChange={this.handleEmailChange}
         placeholder="Enter Email ID" /><br /><br />
        <input required type="number" min={1000000000} max={9999999999} value={this.state.editMember.mobile} onChange={this.handleMobileChange}
         placeholder="Enter Mobile Number" /><br /><br />
        <label>
          <input type="radio" value="admin" checked={this.state.editMember.role==="admin"} onChange={this.handleRoleChange} />
          Admin(can delete other members)
        </label>
        <label>
          <input type="radio" value="regular" checked={this.state.editMember.role==="regular"} onChange={this.handleRoleChange} />
          Regular(can't delete other members)
        </label><br/><br/>
        <button>SAVE</button><br/><button onClick={this.handleCancelEdit}>CANCEL</button>
      </form>
    </div>
    );
  }
}
export default connect()(EditMember);
