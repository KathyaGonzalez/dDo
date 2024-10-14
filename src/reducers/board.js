export const initialState = JSON.parse(localStorage.getItem('board')) || []

//update LocalStorage with state for board
export const updateLocalStorage = state => {
    localStorage.setItem('board', JSON.stringify(state))
}

export const boardReducer = (state, action) => {
    const { type: actionType, payload: actionPayload} = action
    switch(actionType){
        case 'ADD_TO_BOARD': {
            const newState = [
                ...state, {
                    ...actionPayload
                }
            ]    
            updateLocalStorage(newState)
            return newState
        }
        case 'REMOVE_FROM_BOARD' : {
            const { description } = actionPayload
            const newState = state.filter(item => item.description!== description)
            updateLocalStorage(newState)
            return newState
        }
        case 'CLEAR_CART': {
            updateLocalStorage([])
            return []
        }
    }
}