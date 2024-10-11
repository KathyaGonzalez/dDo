export const initialState = []

export const boardReducer = (state, action) => {
    const { type: actionType, payload: actionPayload} = action
    switch(actionType){
        case 'ADD_TO_BOARD': {
            const newState = [
                ...state, {
                    ...actionPayload
                }
            ]
            return newState
        }
        case 'REMOVE_FROM_BOARD' : {
            const { description } = actionPayload
            const newState = state.filter(item => item.description!== description)
            return newState
        }
        case 'CLEAR_CART': {
            return []
        }
    }
}