import { useFilters } from "../hooks/useFilters"
import '../styles/Filters.css'
export function Filters() {
    const {setFilters } = useFilters()
    const handleChangePriority = (event) => {
        setFilters(prevState => ({
            ...prevState,
            priority: event.target.value
        }))
    }
    return (
        <article className="filters">
            <section className="filter">
                <label>Priority</label>
                <select onChange={handleChangePriority}>
                    <option value="all">All</option>
                    <option value="HP">High priority</option>
                    <option value="MP">Medium priority</option>
                    <option value="LP">Low priority</option>
                </select>
            </section>
        </article>
    )
}