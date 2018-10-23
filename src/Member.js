import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    onClick={() => this.props.dispatch({ type: 'EDIT_MEMBER', id: this.props.member.id })
    }
    >Edit</button>
    <button className="delete"
    onClick={() => this.props.dispatch({ type: 'DELETE_MEMBER', id: this.props.member.id })}
    >Delete</button>
  </div>
</div>
);
}
}
export default connect()(Member);
