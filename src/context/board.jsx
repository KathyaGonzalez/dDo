import { createContext, useReducer } from "react";
import { boardReducer, initialState } from "../reducers/board";

export const BoardContext = createContext()

function useBoardReducer () {
    const [state, dispatch] = useReducer(boardReducer, initialState)

    const addToBoard = task => dispatch({
        type: 'ADD_TO_BOARD',
        payload: task
    })
    const removeFromBoard = task => dispatch({
        type: 'REMOVE_FROM_BOARD',
        payload: task
    })
    const clearBoard = () => dispatch({
        type: 'ADD_TO_BOARD'
    })
    return {state, addToBoard, clearBoard, removeFromBoard }
}

export function BoardProvider({children}) {
    const {state, addToBoard, clearBoard, removeFromBoard} = useBoardReducer()

    return (
        <BoardContext.Provider
            value={{
                board: state, addToBoard, clearBoard, removeFromBoard
            }}
        >
            {children}
        </BoardContext.Provider>
    )
}