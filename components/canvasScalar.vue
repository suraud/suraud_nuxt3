<template>
  <h2>Scalar block</h2>
  <table>
    <thead>
      <tr>
        <td><p>degrees:</p></td>
        <td><input type="text" size="30" v-bind:value="degrees" v-on:input="changeDegrees"></td>
      </tr>
      <tr>
        <td><p>radius:</p></td>
        <td><input type="text" size="30" v-bind:value="radius" v-on:input="changeRadius"></td>
      </tr>
      <tr>
        <td>sin:</td>
        <td>{{ sin }}</td>
      </tr>
      <tr>
        <td>cos:</td>
        <td>{{ cos }}</td>
      </tr>
      <tr>
        <td><p>distance(vector length):</p></td>
        <td><input type="text" size="3" v-model="distance">px</td>
      </tr>
      <tr>
        <td>After moving from [0, 0]:</td>
        <td>{{ place }}</td>
      </tr>
    </thead>
  </table>

  <p><br></p>
  <p class="p-anime" ref="pAnime">↓graff: moved {{ degrees }} degrees from [0,0] to After moving↓</p>
  <p>height(sin * distance): {{ sin * distance }}px</p>
  <p>base(cos * distance): {{ cos * distance }}px</p>
  <div class="line-box">
    <div class="base-line base-x">x</div>
    <div class="base-line base-y">&nbsp;y</div>
    <div class="line-content-row" :style="lineStyle">
      <div class="line-content none" />
      <div class="line-content" />
    </div>
    <div class="line-content-trajectory anime" :style="trajectoryStyle()" ref="trajectory" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let degrees = ref(30)
let dummyDeg = ref(degrees.value)
let radius = ref(useDegToRad(degrees.value))
let dummyRad = ref(radius.value)
let sin = ref(useRadToSinCos(radius.value).sin)
let cos = ref(useRadToSinCos(radius.value).cos)
let distance = ref(400)
let place = ref(useCalcPlace(sin.value, cos.value, distance.value))

const trajectory: any = ref(null)
const pAnime: any = ref(null)

watch(dummyDeg, (newVal, oldVal) => {
  radius.value = useDegToRad(degrees.value)
})
watch(dummyRad, (newVal, oldVal) => {
  degrees.value = useRadToDeg(radius.value)
})
watchEffect(() => {
  sin.value = useRadToSinCos(radius.value).sin
  cos.value = useRadToSinCos(radius.value).cos
  place.value = useCalcPlace(sin.value, cos.value, distance.value)
})

const changeDegrees = (event: any) => {
  degrees.value = event.target.value
  dummyDeg.value = event.target.value
}

const changeRadius = (event: any) => {
  radius.value = event.target.value
  dummyRad.value = event.target.value
}

const lineStyle = computed(() => {
  return {
    transform: 'rotate(-' + radius.value + 'rad)',
    width: distance.value + 'px'
  }
})

const trajectoryStyle: any = () => {
  if (trajectory.value) {
    trajectory.value.classList.remove('anime')
    pAnime.value.classList.remove('p-anime')
    trajectory.value.style.opacity = 0
    setTimeout(() => {
      trajectory.value.classList.add('anime')
      pAnime.value.classList.add('p-anime')
    }, 200)
  }
  return {
    width: distance.value + 'px',
    height: distance.value + 'px',
    position: 'absolute',
    zIndex: '-1',
    borderRadius: '50%',
    transform: 'rotate(90deg) scale(-1, 1)',
    transition: 'all 1.5s',
    background: 'conic-gradient(red ' + degrees.value + 'deg, #FFFFFF00 ' + degrees.value + 'deg'
  }
}

</script>

<style lang="scss">
.line-box {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #00000020;
  position: relative;

  &.radias {
    height: 200px;
  }

  .line-content-row {
    width: 100%;
    height: 2px;
    display: flex;
    z-index: 0;
    transition: all 1s;

    .line-content {
      width: 50%;
      height: 100%;
      background-color: red;
      background: conic-gradient(red 6deg);
      &.none {
        background-color: unset;
      }
    }
  }
  .base-line {
    width: 100%;
    height: 2px;
    background-color: black;
    position: absolute;
    z-index: 10;
    &.base-y {
      width: 2px;
      height: 100%;
      left: 50%;
    }
  }
  .anime {
    animation: backgroundAnimation 1.5s infinite;
    animation-direction: alternate;
    @keyframes backgroundAnimation {
      from {
        opacity: 0;
      }
      to {
        opacity: 1.0;
      }
    }
  }
}
.p-anime {
  animation: pAnimation 1.5s infinite;
  animation-direction: alternate;
  @keyframes pAnimation {
    from {
      opacity: 0.3;
    }
    to {
      opacity: 1.0;
    }
  }
}
</style>
