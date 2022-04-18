<template>
  <div>
    <div class="search-container">
      search
    </div>
    <div class="question-container">
      <AppQuestionItem class="question-item zebra" :question-list="QuestionList" />
    </div>
  </div>

</template>

<script>

import AppQuestionItem from "./QuestionItem";
import './styles.scss'
export default {
  name: 'AppLeftContainer',
  components: {AppQuestionItem},
  props:['QuestionList'],
  data: () => ({})
}
</script>
