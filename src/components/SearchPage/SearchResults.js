import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'



function SearchResults(props) {
    const { id, name, city, state } = props.item;
    const history = useHistory();
    return (
        <tr>
            <td><p>{name}</p></td>
            <td><p>{city}, {state}</p></td>
            <td>
                <Link className="btn btn-primary" to={`/brewery/${id}`}>See more</Link>
                {/* <button
                    className="btn btn-primary"
                    onClick={() => history.push(`/brewery/${id}`, { from: "/search" })}
                >
                    See more
                </button> */}
            </td>
        </tr>
    );
}

export default SearchResults;