import React from "react";
import { Link } from "react-router-dom";
import DataFetching from "../../services/dataFetching.js";
import InfoItem from "./InfoItem.js";
import Preloader from "../Preloader/Preloader.js";

class BreweryInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { info: [], breweryName: "", componentLoadFinished: false };
    this.dataFetching = new DataFetching();
    this.getInfo = () => {
      this.dataFetching
        .getBreweryInfo(this.props.id)
        .then((data) => {
          const sortedData = [
            data.brewery_type[0].toUpperCase() + data.brewery_type.slice(1),
            data.country,
            `${data.street ? data.street + ", " : ""}${""/*
          comments are used to get rid of line break symbols in the string
          */}${data.city ? data.city + ", " : ""}${""/*
          */}${data.state ? data.state + ", " : ""}${""/*
          */}${data.postal_code ? data.postal_code : ""}`,
            data.phone,
            data.website_url !== "" ?
              <a
                aria-label="Brewery website"
                href={data.website_url}
                target="_blank"
                rel="noreferrer noopener"
              >
                {data.website_url}
              </a> :
              "",
          ]
          this.setState({
            info: sortedData,
            breweryName: data.name,
            componentLoadFinished: true
          });
        })
        .catch((error) => console.log(error.message));
    }
    this.componentDidMount = () => {
      this.getInfo();
    }
  }
  render() {
    return this.state.componentLoadFinished ?
      <div className="container pt-4">
        <div className="px-3">
          <h1>{this.state.breweryName}</h1>
          <div className="lead">
            {this.state.info.map((item, i) => <InfoItem item={item} key={i} i={i} />)}
            <Link className="btn btn-primary" to="/search">Go back</Link>
          </div>
        </div>
      </div> :
      <div className="preloader">
        <Preloader />
      </div>
  }
}

export default BreweryInfo;