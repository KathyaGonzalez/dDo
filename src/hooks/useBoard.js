import { useContext } from "react";
import { BoardContext } from "../context/board";

export const useBoard = () => {
    const context = useContext(BoardContext)
    if(context === undefined){
        throw new Error('This module cannot access to the context requeried')
    }
    return context
}