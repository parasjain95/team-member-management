import React, { Component } from 'react';
import { connect } from 'react-redux';
import Member from './Member';
import EditMember from './EditMember';

class AllMembers extends Component {
  render() {
    return (
    <div>
      <h1 className="post_heading">All Members</h1>
      <p className="center">there are {this.props.members.length} members in the team</p>
      {this.props.members.map((member) => (
      <div key={member.id}>
        {member.editing ? <EditMember member={member} key={member.id} /> : <Member member={member}
        key={member.id} />}
      </div>
    ))}
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    members: state
  }
}
export default connect(mapStateToProps)(AllMembers);
