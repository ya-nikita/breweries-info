import SearchResults from "./SearchResults.js";
import "./sortingIcon.css";
import alphabeticalSortingDownwardsIcon from "../../imgs/alphabetical_sorting_downwards.png";
import alphabeticalSortingUpwardsIcon from "../../imgs/alphabetical_sorting_upwards.png";
import numericalSortingDownwardsIcon from "../../imgs/numerical_sorting_downwards.png";
import numericalSortingUpwardsIcon from "../../imgs/numerical_sorting_upwards.png";
import { useState } from "react";

const CELL_IDS = ["id", "name", "city"];

function SearchContainer(props) {
    const [id, name, city] = CELL_IDS;
    const items = props.items;
    // const [items, setItemsOrder] = useState(props.items);
    const [isSortingOrderUpwards, setSortingOrder] = useState(true);
    function sortTable(e) {
        let cellId = e.target.id;
        if (cellId === id) {
            isSortingOrderUpwards ?
                e.target.src = numericalSortingDownwardsIcon :
                e.target.src = numericalSortingUpwardsIcon;
        } else if (cellId === name || cellId === city) {
            isSortingOrderUpwards ?
                e.target.src = alphabeticalSortingDownwardsIcon :
                e.target.src = alphabeticalSortingUpwardsIcon;
        }
        let cb = function (a, b) {
            if (a[cellId] > b[cellId]) {
                return !isSortingOrderUpwards ? 1 : -1;
            }
            if (a[cellId] < b[cellId]) {
                return !isSortingOrderUpwards ? -1 : 1;
            }
            return 0;
        }
        setSortingOrder(!isSortingOrderUpwards);
        let sorted = items.sort(cb);
        items.slice(0, items.length, ...sorted)
        // setItemsOrder(sorted);
    }
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr onClick={sortTable}>
                        <th onClick={() => console.log(props.history)}>Name<img id="name"
                            className="sortingIcon"
                            src={alphabeticalSortingUpwardsIcon} alt="#" /></th>
                        <th>Location<img
                            id="city"
                            className="sortingIcon"
                            src={alphabeticalSortingUpwardsIcon} alt="#" /></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <SearchResults key={item.id} item={item} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SearchContainer;