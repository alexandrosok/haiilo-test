<template>
  <div>
    <div class="question-item zebra" v-for="question in QuestionList" :key="question._id">
      {{ question.labels.fr }}
    </div>
  </div>

</template>

<script>
import './styles.scss';

export default {
  name: 'AppQuestionItem',
  props:['QuestionList'],
  data: () => ({})
}
</script>
