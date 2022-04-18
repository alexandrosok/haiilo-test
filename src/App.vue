<template>
  <div id="app">
    <div class="main-container">
      <div id="left">
        <AppLeftContainer :question-list="QuestionList"/>
      </div>
      <div id="right">
        <vue-scroll>
          <AppRightContainer :filter-list="FilterList" :data-list="DataList"/>
        </vue-scroll>
      </div>
    </div>
  </div>
</template>

<script>

import FiltersHttpService from "./Services/Filters.service";
import ScoresHttpService from "./Services/Scores.service";
import QuestionsHttpService from "./Services/Questions.service";
import AppLeftContainer from "./components/LeftContainer";
import AppRightContainer from "./components/RightContainer";

export default {
  name: 'App',
  components: {AppRightContainer, AppLeftContainer},
  data: () => ({
    ScoresHttpService,
    QuestionsHttpService,
    FiltersHttpService,
    FilterList: null,
    QuestionList: null,
    ScoreList: null,
    DataList: []
  }),
  async beforeMount() {
    this.FiltersHttpService = new FiltersHttpService(this.$http)
    this.QuestionsHttpService = new QuestionsHttpService(this.$http)
    this.ScoresHttpService = new ScoresHttpService(this.$http)

    this.FilterList = await this.FiltersHttpService.GetFilters()
    this.QuestionList = await this.QuestionsHttpService.GetQuestions()
    this.ScoreList = await this.ScoresHttpService.GetScores();

    this.ConstructData()
  },
  methods: {
    ConstructData() {
      this.QuestionList.forEach((question) => {
        this.ScoreList.forEach((score) => {
          if (question._id === score.question_id) {
            this.DataList.push(score.scores[0].map(item => item.value))
          }
        })
      })
    }
  }
}
</script>

<style lang="scss">

@import "styles/global.scss";


//@for $value from 0 through 10 {
//  .value-#{$value} {
//    color: $score_#{$value}_dark;
//  }
//}

.value-score {
  padding: 5px;
  font-weight: bold;
}

.search-container {
  height: 120px;
}

</style>
