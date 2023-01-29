<template>
  <div class="page-index">

    <div class="welcome-row" ref="welcomeRow">
      <div v-for="s, i in welcomeString" :ref="setWelRef" class="welcome-content">
        {{ s }}
      </div>
    </div>

    <!-- <div class="choose-row" ref="chooseRow">
         <div class="choose-content">
         Go to<br>
         left
         </div>
         <div class="choose-content">
         Go to<br>
         right
         </div>
         </div> -->

    <div class="index-container">

      <div class="scroll-road" v-for="i in 40">
        <div :class="'road-circle' + (i % 8 === 0 ? ' last' : '')" :ref="setRoadRef" />
      </div>

    </div>

  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'

let welcomeString = ref(useCreateWelcomeString('welcome to my page'))
let welcomeContent = ref([])
let welcomeRow = ref()
let chooseRow = ref()
let roadCircle = ref([])
let scrollHeight = ref()

let setWelRef = (el) => {
  if (el) {
    welcomeContent.value.push(el)
  }
}

let setRoadRef = (el) => {
  if (el) {
    roadCircle.value.push(el)
  }
}

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

async function playWelcome() {
  await useShowWelcomeString(welcomeContent.value)
  await delay(2000)
  await useHideWelcomeString(welcomeRow.value)
  await delay(1000)
  useShowRoadCircle(roadCircle.value)
  for (let i = 0; i < roadCircle.value.length; i++) {
    await useScrollToEnd(roadCircle.value[i])
    await delay(100)
  }
  await delay(2000)
  //   await useShowChooseRow(chooseRow.value)
}

onMounted(() => {
  //   console.log('mounted', testRef.value, setWelRef.value)
  console.log(welcomeString.value)
  console.log(setRoadRef)

  playWelcome()
})

</script>

<style lang="scss">
.page-index {
  width: 100%;
  height: 80vh;
  overflow: hidden;
  position: relative;

  .welcome-row {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 50%;
    z-index: 20;

    opacity: 1;
    transform: scale3d(1.0, 1.0, 1.0);
    transition: all 0.5s;
    &.hide {
      opacity: 0;
      transform: scale3d(2.0, 2.0, 2.0);
    }

    .welcome-content {
      position: relative;
      color: white;
      white-space: pre;
      padding: 0 2px;

      opacity: 0;
      transform: scale3d(10, 10, 150);
      transition: all 0.5s;
      &.show {
        opacity: 1;
        transform: scale3d(1.5, 1.5, 1.5);
      }
    }
  }

  .choose-row {
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;

    opacity: 0;
    transition: all 0.5s;
    &.show {
      opacity: 1;
    }
    .choose-content {
      width: 15vw;
      height: 15vw;
      background-color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin: 0 10vw;
      cursor: pointer;
      box-shadow: 0 0 10px 10px #FFFFFF80;
    }
  }

  .index-container {
    width: 100%;
    background: linear-gradient(black, gray);
    position: relative;
    z-index: 10;

    .scroll-road {
      width: 100%;
      height: 80vh;
      /* display: flex;
         justify-content: center;
         align-items: center; */
      padding: 10vw 0 0;
      z-index: 20;

      .road-circle {
        background-color: white;
        border-radius: 50%;

        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        box-shadow: 0 0 0 0 #FFFFFF80;
        width: 0;
        height: 0;
        transition: all 7s;
        &.show {
          width: 20vw;
          height: 20vw;
          box-shadow: 0 0 10px 10px #FFFFFF80;
          &.last {
            background-image: url("../assets/suraud_square.gif");
            background-size: 100%;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
