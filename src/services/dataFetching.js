const QUERY_URL = "https://api.openbrewerydb.org/breweries/search?query=";
const BREWERY_URL = "https://api.openbrewerydb.org/breweries/";

class DataFetching {
    async fetchData(url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, received ${response.status}`);
        }
        const data = await response.json();
        return data;
    }
    getBreweriesList(value) {
        return this.fetchData(QUERY_URL + value);
    }
    getBreweryInfo(id) {
        return this.fetchData(BREWERY_URL + id);
    }
}

export default DataFetching;