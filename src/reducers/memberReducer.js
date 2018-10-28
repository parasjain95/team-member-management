const defaultState = {
  members: [],
  editMemberId: null,
  addFlag: false
}

const memberReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADDING_MEMBER':
      return {
        ...state,
        addFlag: true
      }
    case 'ADD_MEMBER':
      return {
        members: state.members.concat([action.data]),
        editMemberId: null,
        addFlag: false
      }
    case 'DELETE_MEMBER':
      return {
        ...state,
        members: state.members.filter((member) => member.id !== action.id)
      }
    case 'EDIT_MEMBER':
      return {
        ...state,
        editMemberId: action.id
      }
    case 'CANCEL':
      return {
        ...state,
        editMemberId: null,
        addFlag: false
      }
    case 'UPDATE_MEMBER':
      return {
        members: state.members.map((member) => {
          if (member.id === action.data.id) {
            return {
              ...member,
              fname: action.data.fname,
              lname: action.data.lname,
              email: action.data.email,
              mobile: action.data.mobile,
              role: action.data.role,
            }
          } else return member;
        }),
        editMemberId: null,
        addFlag: false
      }
    default:
      return state;
  }
}
export default memberReducer;
  