<template>
  <div>
    <AppFilterItem :filter-list="FilterList"/>
    <div class="value-container">
      <AppValueRow :data-list="DataList" />
    </div>
  </div>

</template>

<script>

import AppFilterItem from "./FilterItem";
import AppValueRow from "./ValueRow";
import './styles.scss'

export default {
  name: 'AppRightContainer',
  components: {AppValueRow, AppFilterItem},
  props: ['DataList', 'FilterList'],
  data: () => ({}),
}
</script>
