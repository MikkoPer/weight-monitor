<template lang="pug">
  v-row.ma-0.justify-space-between.align-center.pa-4
    v-text-field(
      hide-details
      outlined
      dense
      :value="weight"
      type="number"
      @input="weightInternal = parseFloat($event)"
      label="Uusi paino"
      append-outer-icon="mdi-content-save"
      @click:append-outer="handleSaveWeight"
      ).mr-4
    //- v-btn(@click="handleSaveWeight" color="primary") Tallenna
</template>

<script>
export default {
  props: {
    weight: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      weightInternal: 0
    }
  },
  methods: {
    handleSaveWeight () {
      this.$emit('save', this.weightInternal)
    }
  }
}
</script>
