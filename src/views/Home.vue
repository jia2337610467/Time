<template>
  <div class="home">
    <div class="year">
      <span>{{ newtime.getMonth() + 1 }}月 </span>
      <span>{{ newtime.getDate() }}日</span>
    </div>
    <div class="time">
      <span>{{ newtime.getHours() + ":" + timsmm() }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, ref, onMounted,toRefs } from "vue";
export default {
  name: "home",
  setup() {
    const data = reactive({
      newtime: new Date(),
      timsmm: (time: any) => {
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
    font-size: 190px;
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