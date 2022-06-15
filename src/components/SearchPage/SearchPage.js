import React from "react";
import DataFetching from "../../services/dataFetching.js";
import SearchContainer from "./SearchContainer.js";
import Preloader from "../Preloader/Preloader.js";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const SEARCH_INPUT = "#search_input";
const NO_RESULTS = "NO RESULTS";

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], loader: NO_RESULTS };
        this.dataFetching = new DataFetching();
        this.search = () => {
            let searchInput = document.querySelector(SEARCH_INPUT);
            if (searchInput.value) {
                this.setState({ loader: "loading" });
            }
            setTimeout(() => this.setState({ loader: NO_RESULTS }), 5000);
            this.dataFetching
                .getBreweriesList(searchInput.value)
                .then((data) => {
                    this.setState({ items: data });

                })
                .catch((error) => console.log(error.message));
        }
        this.clear = () => {
            let searchInput = document.querySelector(SEARCH_INPUT);
            searchInput.value = "";
            this.setState({ items: [], loader: NO_RESULTS })
        }
    }
    render() {
        return (
            <div>
                <div className="d-flex flex-row justify-content-center align-items-center pt-4">
                    <h1 id="siteTitle">Search for breweries</h1>
                </div>
                <div className="search-bar-container">
                    <div className="input-group mb-0">
                        <input
                            id="search_input"
                            type="text"
                            placeholder="For example, California..."
                            className="form-control search-input"
                        />
                        <button onClick={this.search} className="btn btn-dark mx-1">Search</button>{/*
                        */}<button onClick={this.clear} className="btn btn-warning">Clear</button>
                    </div>
                </div>
                <div className="results-container">
                    {this.state.items.length > 0 ?
                        <SearchContainer items={this.state.items} history={history} /> :
                        this.state.loader === "loading" ?
                            <Preloader /> :
                            <p className="text-center">{this.state.loader}</p>}
                </div>
            </div>
        );
    }
}



