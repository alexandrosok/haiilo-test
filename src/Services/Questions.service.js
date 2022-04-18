export default class QuestionsHttpService {
    constructor(http) {
        this.http = http;
        this.UrlList = {
            Questions: 'questions.json'
        }
    }

    GetQuestions() {
        return this.http.get(this.UrlList.Questions).then(response => response.data).catch(err => err)
    }
}
