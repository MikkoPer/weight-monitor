<template lang="pug">
  v-row(no-gutters).px-4
    v-col(cols=5)
      .text-caption.grey--text.text-uppercase Paino
      div
        span(class="text-h4 font-weight-black" v-text="latestEntry.weight || '—'")
        strong(v-if="latestEntry.weight") KG
    v-col(cols=2).d-flex.justify-center
      v-icon(large color="grey") mdi-scale-balance
    v-col(cols=5).d-flex.justify-end
      .pudotus
        .text-caption.grey--text.text-uppercase Pudotus
        div
          span(class="text-h4 font-weight-black" v-text="drop || '—'")
          strong(v-if="drop") KG
</template>

<script>
export default {
  props: {
    entries: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    latestEntry () {
      if (this.entries.length) {
        return this.entries[this.entries.length - 1]
      }
      return { weight: 0 }
    },
    drop () {
      if (this.entries.length > 1) {
        const first = this.entries[0]
        const last = this.entries[this.entries.length - 1]
        const diff = first.weight - last.weight
        return Math.round((diff + Number.EPSILON) * 100) / 100
      }
      return 0
    }
  }
}
</script>
