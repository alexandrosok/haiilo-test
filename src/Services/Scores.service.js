export default class ScoresHttpService {
    constructor(http) {
        this.http = http;
        this.UrlList = {
            Scores: 'scores.json'
        }
    }

    GetScores() {
        return this.http.get(this.UrlList.Scores).then(response => response.data).catch(err => err)
    }
}
