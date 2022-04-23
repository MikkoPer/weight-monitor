<template lang="pug">
  v-container(fluid)
    v-row
      v-col(cols=12)
        counter-card
          counter-input(@save="handleSaveWeight")
          counter-kpi(:entries="sorted")
          counter-chart(:entries="sortedValues")
    //- v-row
      v-col(cols=12 v-for="entry in entries" :key="entry.time")
        weight-entry(v-bind="entry" @delete="handleDeleteWeight")
    v-row
      v-timeline(dense)
        v-timeline-item(
          v-for="entry,index in entries"
          :key="`tl-${entry.time}`"
          :small="index!=0"
          icon-color="#033"
          )
          //- v-row(align="start")
          .d-flex.align-center
            .weight
              .text-h5 {{ entry.weight }}kg
              .text-caption {{ formatISO(entry.time) }}
            v-btn(icon @click="handleDeleteWeight(entry.id)")
              v-icon mdi-delete
</template>

<script>
import localforage from 'localforage'
import { v4 as uuid } from 'uuid'
import { formatISO } from '@/utils'
export default {
  data () {
    return {
      entries: []
    }
  },
  async fetch () {
    this.entries = await localforage.getItem('metric-pwa') || []
  },
  computed: {
    sorted () {
      const sorted = this.entries
        .slice() // Sort does it in place so we need to copy entries
        .sort((a, b) => {
          if (a.time === b.time) {
            return 0
          }
          return a.time > b.time
        })
      return sorted
    },
    sortedValues () {
      return this.sorted.map(e => e.weight)
    }
  },
  methods: {
    formatISO,
    async handleSaveWeight (weight) {
      try {
        const entries = await localforage.getItem('metric-pwa') || []
        entries.push({
          id: uuid(),
          color: 'blue',
          time: new Date().toISOString(),
          weight
        })
        await localforage.setItem('metric-pwa', entries)
        this.entries = [...entries]
        console.log(entries)
      } catch (err) {
        // This code runs if there were any errors.
        console.log(err)
      }
    },
    async handleDeleteWeight (id) {
      const cleaned = this.entries.filter(e => e.id !== id)
      await localforage.setItem('metric-pwa', cleaned)
      this.entries = cleaned
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
