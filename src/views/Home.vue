<template>
  <div class="home">
    <div class="year">
      <span>{{ newtime.getFullYear() }}年</span>
      <span>{{ newtime.getMonth() + 1 }}月 </span>
      <span>{{ newtime.getDate() }}日 </span>
      <span>{{ week() }}</span>
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
      week:()=>{
        switch(data.newtime.getDay()){
          case 0: return '星期日'
          case 1: return '星期一'
          case 2: return '星期二'
          case 3: return '星期三'
          case 4: return '星期四'
          case 5: return '星期五'
          case 6: return '星期六'
        }
      }
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
  min-height: 100vh;
  background-color: #272931;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .year {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    font-size: 0.3rem;
    span:nth-of-type(1){
      color: rgb(207, 78, 78);
    }
    span:nth-of-type(2){
      color: #9DC8AD;
    }
    span:nth-of-type(3){
      color: #1b9bd6;
    }
    span:nth-of-type(4){
      font-size: 65%;
    }
  }
  .time {
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 1rem;
  }
  span {
    color: #ffffff;
  }
}
@media screen and (max-width: 415px) {
  .year{
    font-size: 0.8rem!important;
  }
}
</style>