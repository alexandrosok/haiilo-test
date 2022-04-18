export default class FiltersHttpService {
    constructor(http) {
        this.http = http;
        this.UrlList = {
            Filters: 'filters.json'
        }
    }

    GetFilters() {
        return this.http.get(this.UrlList.Filters).then(response => response.data).catch(err => err)
    }
}
