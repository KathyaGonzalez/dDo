import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {
    const { filters, setFilters} = useContext(FiltersContext)

    const filterTasks = (tasks) => {
        if(filters.priority==='all'){
            return tasks
        }else{
        return tasks.filter(task => {
            return (task.priority === filters.priority)
        })}
    }

    return { filterTasks, setFilters, filters}
}