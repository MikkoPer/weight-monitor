<template lang="pug">
  v-sparkline(
    :value="entries"
    color="rgba(255, 255, 255, .7)"
    height="100"
    padding="24"
    line-width="1"
    :gradient="['#f72047', '#ffd200', '#1feaea']"
    stroke-linecap="round"
    smooth
  )
</template>

<script>
export default {
  props: {
    entries: {
      type: Array,
      default: () => []
    }
  }
}
</script>
