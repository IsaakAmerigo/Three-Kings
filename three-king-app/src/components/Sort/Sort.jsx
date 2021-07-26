import './Sort.css'

const Sort = (props) => {

    const handleSort = (event) => {
        props.handleSort(event.target.value)
    }

    return (
        <form classTitle="sort-container" onSubmit={props.handleSubmit}>
            <label htmlFor="sort">SORT BY:</label>
            <select classTitle="sort" onChange={handleSort}>
                <option classTitle="option" value="title-ascending" >&nbsp; Alphabetically, A-Z &nbsp;</option>
            </select>
        </form>
    )
}

export default Sort