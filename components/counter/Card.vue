<template lang="pug">
  v-card(tile)
    swipe-out
      template(#right)
        v-card(width="40px" color="red")
      v-card-title.primary
        .text-h5 Painonseuranta
    slot
</template>
