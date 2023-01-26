<template>
  <h2>Vector block</h2>
  <table>
    <thead>
      <tr>
        <td><p>positionStart:</p></td>
        <td>
          [
          <input type="text" size="3" v-model.positionStart[0]="positionStart[0]">
          ,
          <input type="text" size="3" v-model.positionStart[1]="positionStart[1]">
          ]
        </td>
        <td><p>positionEnd:</p></td>
        <td>
          [
          <input type="text" size="3" v-model.positionEnd[0]="positionEnd[0]">
          ,
          <input type="text" size="3" v-model.positionEnd[1]="positionEnd[1]">
          ]
        </td>
      </tr>
      <tr>
        <td><p>vector:</p></td>
        <td>{{ vector }}</td>
      </tr>
      <tr>
        <td><p>vectorLength:</p></td>
        <td>{{ vectorLength }}</td>
      </tr>
      <tr>
        <td><p>unit vector:</p></td>
        <td>{{ unitVector }}</td>
      </tr>
    </thead>
  </table>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let positionStart = ref([0, 0])
let positionEnd = ref([0, 0])
let vector = ref(usePositionToVector(positionStart.value, positionEnd.value))
let vectorLength = ref(useVectorToVectorLength(vector.value))
let unitVector = ref(useCalcUnitVector(vector.value))

watchEffect(() => {
  vector.value = usePositionToVector(positionStart.value, positionEnd.value)
  vectorLength.value = useVectorToVectorLength(vector.value)
  unitVector.value = useCalcUnitVector(vector.value)
})
</script>

<style lang="scss">
</style>
