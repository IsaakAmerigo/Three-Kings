import './Sort.css'

const Sort = (props) => {

    const handleSort = (event) => {
        props.handleSort(event.target.value)
    }

    return (
        <form className="sort-container" onSubmit={props.handleSubmit}>
            <label htmlFor="sort">SORT BY:</label>
            <select className="sort" onChange={handleSort}>

                <option className="option" value="title-ascending" >&nbsp; Alphabetically, A-Z &nbsp;</option>
                
            </select>
        </form>
    )
}

export default Sort