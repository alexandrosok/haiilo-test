<template>
  <div>
    <div class="value-item" v-for="(valueItem, index) in data" :key="index">
      <div :class="'value-score value-' + Math.round(ParseValue(valueItem))">
        {{ ParseValue(valueItem) }}
      </div>
    </div>
  </div>

</template>

<script>

import './styles.scss'

export default {
  name: 'AppValueItem',
  props:['data'],
  data: () => ({}),
  methods: {
    ParseValue(value) {
      return (parseFloat(value) / 10).toFixed(1)
    },
  }
}
</script>
