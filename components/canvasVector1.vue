<template>
  <h3>vector dot product block</h3>
  <table>
    <thead>
      <tr>
        <td><p>vectorA:</p></td>
        <td>
          [
          <input type="text" size="3" v-model.vectorA[0]="vectorA[0]">
          ,
          <input type="text" size="3" v-model.vectorA[1]="vectorA[1]">
          ]
        </td>
        <td><p>vectorB:</p></td>
        <td>
          [
          <input type="text" size="3" v-model.vectorB[0]="vectorB[0]">
          ,
          <input type="text" size="3" v-model.vectorB[1]="vectorB[1]">
          ]
        </td>
      </tr>
      <tr>
        <td><p>unitVectorA</p></td>
        <td>
          [
          {{ unitVectorA[0].toString().substring(0, 5) + '...' }}
          ,
          {{ unitVectorA[1].toString().substring(0, 5) + '...' }}
          ]
        </td>
        <td><p>unitVectorB</p></td>
        <td>
          [
          {{ unitVectorB[0].toString().substring(0, 5) + '...' }}
          ,
          {{ unitVectorB[1].toString().substring(0, 5) + '...' }}
          ]
        </td>
      </tr>
      <tr>
        <td><p>dot(内積):</p></td>
        <td>{{ dot }}</td>
      </tr>
      <tr>
        <td><p>radian:</p></td>
        <td>{{ radian }}</td>
      </tr>
      <tr>
        <td><p>degrees:</p></td>
        <td>{{ degrees }}&#176;</td>
      </tr>
    </thead>
  </table>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let vectorA = ref([2, 8])
let vectorB = ref([5, -3])
let unitVectorA = ref(useCalcUnitVector(vectorA.value))
let unitVectorB = ref(useCalcUnitVector(vectorB.value))
let dot = ref(useCalcDot(unitVectorA.value, unitVectorB.value))
let radian = ref(useDotToRadian(dot.value))
let degrees = ref(useRadToDeg(radian.value))

watchEffect(() => {
  unitVectorA.value = useCalcUnitVector(vectorA.value)
  unitVectorB.value = useCalcUnitVector(vectorB.value)
  dot.value = useCalcDot(unitVectorA.value, unitVectorB.value)
  radian.value = useDotToRadian(dot.value)
  degrees.value = useRadToDeg(radian.value)
})
</script>

<style lang="scss">
</style>
