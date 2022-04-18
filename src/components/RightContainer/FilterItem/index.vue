<template>
  <div class="row" :style="{'top':top}">
    <div class="filter-item" v-for="filter in FilterList" :key="filter._id">
      {{ filter.fr }}
    </div>
  </div>
</template>

<script>
import './styles.scss'

export default {
  name: 'AppFilterItem',
  props:['FilterList'],
  data: () => ({
    top: null
  }),
  beforeMount() {
    window.addEventListener('scroll',() =>{
      this.top = window.pageYOffset + 'px';
    })
  }
}
</script>
