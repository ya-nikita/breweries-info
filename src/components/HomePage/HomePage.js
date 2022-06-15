import homePageImg from "../../imgs/breweries.jpg"

export default function HomePage() {
    return (
        <div className="container pt-4">
            <div className="px-3">
                <h1>Welcome to Breweries info!</h1>
                <p className="lead">
                    This web-site is a React application that allows searching the
                    information on breweries, cideries, brewpubs, and bottle shops.
          </p>
                <p className="lead">
                    <img className="home-img" src={homePageImg} alt="#"/>
                </p>
            </div>
        </div>
    );
}