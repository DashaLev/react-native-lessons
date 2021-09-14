
const initialState = {status:true}

export const headerStatusReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'CHANGE_STATUS':
            return {...state, status:action.payload}
        default:
            return state
    }
}