const memberReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MEMBER':
      return state.concat([action.data])
    case 'DELETE_MEMBER':
      return state.filter((member) => member.id !== action.id)
    case 'EDIT_MEMBER':
      return state.map((member) => member.id === action.id ? { ...member, editing: !member.editing } : member)
    case 'CANCEL_EDIT':
      return state.map((member) => member.id === action.id ? { ...member, editing: !member.editing } : member)
    case 'CANCEL_ADD':
      return state.map((member) => member.id === action.id ? { ...member, editing: !member.editing } : member)
    case 'UPDATE_MEMBER':
      return state.map((member) => {
        if (member.id === action.id) {
        return {
          ...member,
          fname: action.data.newFname,
          lname: action.data.newLname,
          email: action.data.newEmail,
          mobile: action.data.newMobile,
          editing: !member.editing
        }
        } else return member;
      })
    default:
    return state;
  }
}
export default memberReducer;
  