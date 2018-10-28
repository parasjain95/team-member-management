export function addMember(data) {
    return {
        type: "ADD_MEMBER",
        data
    };
}

export function addingMember() {
    return {
        type: "ADDING_MEMBER"
    };
}

export function deleteMember(id) {
    return {
        type: "DELETE_MEMBER",
        id
    };
}

export function editMember(id) {
    return {
        type: "EDIT_MEMBER",
        id
    };
}

export function updateMember(data) {
    return {
        type: "UPDATE_MEMBER",
        data
    };
}

export function cancel(editId) {
    return {
        type: "CANCEL"
    };
}