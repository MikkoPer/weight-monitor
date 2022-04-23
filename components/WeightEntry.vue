<template lang="pug">
v-card
  v-card-text.d-flex
    .mark(:style="{'background-color': color}").ml-n4.mr-4
    .weight
      .text-h4 {{ weight }}kg
      .text-caption {{ formatISO(time) }}
    v-spacer
    v-btn(fab icon @click="handleDeleteWeight")
      v-icon mdi-delete
</template>

<script>
import { formatISO } from '@/utils'
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    weight: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  methods: {
    formatISO,
    handleDeleteWeight () {
      this.$emit('delete', this.id)
    }
  }
}
</script>

<style lang="sass" scoped>
.mark
  width: 2rem
  border-radius: 0 0.5rem 0.5rem 0
</style>
