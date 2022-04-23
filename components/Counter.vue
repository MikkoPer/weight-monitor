<template lang="pug">
v-progress-circular(
  :rotate="360"
  :size="100"
  :width="15"
  :value="value"
  color="teal"
  ) {{ value }}
  //- <div class="pie" style="--progress:60;--b:20px;--c:purple;">60%</div>
  //- .bg
  //- .circle
    .absolute-fill
      .center-disk
    //- .section-left
    //- .section-right
</template>

<script>
export default {
  data () {
    return {
      value: 10
    }
  }
}
</script>

<style lang="sass" scoped>
@property --p
  syntax: '<number>'
  inherits: true
  initial-value: 0

.bg
  width: 100%
  height: 100%
  background: grey
  padding: 2rem

.circle
  width: 100%
  height: 100%
  border-radius: 50%
  background-color: teal
  overflow: hidden
  box-shadow: 0rem 0.25rem 0.5rem 0.25rem rgba(0,0,0,0.5) inset
  border-style: none none solid
  border-width: 1.5px
  border-color: rgba(255,255,255,0.25)

.absolute-fill
  width: 100%
  height: 100%

.center-disk
  margin-left: 1.5rem
  margin-top: 1.5rem
  width: calc(100% - 3rem)
  height: calc(100% - 3rem)
  border-radius: 50%
  background-color: grey
  z-index: 10
  box-shadow: 0.0rem 0.25rem 0.5rem 0rem rgba(0,0,0,0.5)
  border-style: solid none none
  border-width: 1.5px
  border-color: rgba(255,255,255,0.25)

.pie
  --w: 150px
  width: var(--w)
  aspect-ratio: 1
  display: inline-grid
  place-content: center
  margin: 1rem
  font-size: 25px
  font-weight: bold
  font-family: sans-serif

  &:before,&:after
    position: absolute
    content: ""
    border-radius: 50%

  &:before
    inset: 0
    //                          <position, start_col start to_col> <height       width      repeat>                 <color   percentage                  color percentage
    background: radial-gradient(farthest-side, var(--c) 98%, #0000) top/var(--b) var(--b) no-repeat, conic-gradient(var(--c) calc(var(--progress) * 1%), #0000 0)
    mask: radial-gradient(farthest-side, #0000 calc(99% - var(--b)), #000 calc(100% - var(--b)))

  &.pie:after
    inset: calc(50% - var(--b)/2)
    background: var(--c)
    transform: rotate(calc(var(--progress)*3.6deg)) translateY(calc(50% - var(--w)/2))
</style>
