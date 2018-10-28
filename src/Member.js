import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  editMember,
  deleteMember
} from "./actions/memberActions";

class Member extends Component {
  render() {
    return (
      <div className="post">
        <h2 className="post_title">{this.props.member.fname} {this.props.member.lname}</h2>
        {this.props.member.role==="admin" ? <p className="post_message">Admin(can delete other members)</p> : <p className="post_message">Regular(can't delete other members)</p>}
        <p className="post_message">{this.props.member.email}</p>
        <p className="post_message">{this.props.member.mobile}</p>
        <div className="control-buttons">
          <button className="edit"
          onClick={() => this.props.editMember(this.props.member.id)}
          >Edit</button>
          <button className="delete"
          onClick={() => this.props.deleteMember(this.props.member.id)} 
          >Delete</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editMember: (id) => dispatch(editMember(id)),
  deleteMember: (id) => dispatch(deleteMember(id))
});

export default connect(null, mapDispatchToProps)(Member);
