<template>
  <div class="home">
    <div class="year">
      <span>{{ newtime.getFullYear() }}年</span>
      <span>{{ newtime.getMonth() + 1 }}月 </span>
      <span>{{ newtime.getDate() }}日</span>
    </div>
    <div class="time">
      <span>{{ newtime.getHours() + ":" + timsmm() }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, onMounted,toRefs } from "vue";
export default {
  name: "home",
  setup() {
    const data = reactive({
      newtime: new Date(),
      timsmm: () => {
        return data.newtime.getMinutes() < 10
          ? "0" + data.newtime.getMinutes()
          : data.newtime.getMinutes();
      },
    });

    onMounted(() => {
      setInterval(() => {
        data.newtime = new Date();
      }, 1000);
    });

    const dataArr = toRefs(data);
    return {
      ...dataArr,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  background-color: #272931;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .year {
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 150px;
    span:nth-of-type(1){
      color: rgb(207, 78, 78);
    }
    span:nth-of-type(2){
      color: #9DC8AD;
    }
    span:nth-of-type(3){
      color: #9DC8AD;
    }
  }
  .time {
    flex: 1;
    display: flex;
    font-size: 420px;
  }
  span {
    color: #ffffff;
  }
}
</style>