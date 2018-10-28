import React, { Component } from 'react';
import { connect } from 'react-redux';
import Member from './Member';
import AddOrEditMember from './AddOrEditMember';

import {
  addingMember
} from "./actions/memberActions";

class AllMembers extends Component {

  handleAdd = (e) => {
    this.props.addingMember();
  }

  render() {
    return (
    <div>
      {
        (!!!this.props.editMemberId && !this.props.addFlag)?
        <div>
          <div className="add-btn-div">
            <button className="edit" onClick={this.handleAdd}>Add Member</button>
          </div>
          <h1 className="post_heading">All Members</h1>
          <p className="center">there are {this.props.members.length} members in the team</p>
          {
            this.props.members.map((member) => (
            <div key={member.id}>
              {<Member member={member} key={member.id}/>}
            </div>
            ))
          }
        </div>
        : <AddOrEditMember members={this.props.members} editMemberId={this.props.editMemberId} addFlag={this.props.addFlag}/>
      }
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    members: state.members,
    editMemberId: state.editMemberId,
    addFlag: state.addFlag
  }
}

const mapDispatchToProps = dispatch => ({
  addingMember: () => dispatch(addingMember()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllMembers);
