import { Link } from "react-router-dom";
import React from "react";

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { homeLinkActive: false, searchLinkActive: false };
        this.setFocus = (e) => {
            if (e.target.className.includes("nav-item nav-link") ||
                e.target.className.includes("navbar-brand")) {
                if (e.target.id === "homeLink" || e.target.id === "title") {
                    this.setState({ homeLinkActive: true, searchLinkActive: false })
                } else {
                    this.setState({ homeLinkActive: false, searchLinkActive: true })
                }
            }
        }
    }
    render() {
        const LINK_ON_FOCUS = "nav-item nav-link active";
        const LINK_OFF_FOCUS = "nav-item nav-link";
        return (
            <nav id="navbar-custom" className="navbar navbar-expand-lg navbar-light bg-warning">
                <Link id="title" className="navbar-brand" to="/" onClick={this.setFocus}>Breweries info</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div id="navbar-nav-custom" className="navbar-nav" onClick={this.setFocus}>
                        <Link id="homeLink"
                            className={
                                this.state.homeLinkActive ?
                                    LINK_ON_FOCUS :
                                    LINK_OFF_FOCUS} to="/">Home</Link>
                        <Link id="searchLink" className={
                            this.state.searchLinkActive ?
                                LINK_ON_FOCUS :
                                LINK_OFF_FOCUS} to="/search">Search</Link>
                    </div>
                </div>
            </nav>
        );
    }
}