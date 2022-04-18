<template>
  <div>
    <div class=" zebra" v-for="(data, index) in DataList" :key="index">
      <AppValueItem class="value-row" :data="data" />
    </div>
  </div>

</template>

<script>
import AppValueItem from "../ValueItem";
import './styles.scss'

export default {
  name: 'AppValueRow',
  components: {AppValueItem},
  props:['DataList'],
  data: () => ({}),
}
</script>
