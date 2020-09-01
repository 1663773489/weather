<template>
  <div>
    <div class="wid">
      <ul>
        <li>日期</li>
        <li>温度</li>
        <li>天气情况</li>
        <li>风向</li>
      </ul>
    </div>
    <div class="today1">
      <ul>
        <li>{{result1.date}}</li>
        <li>{{result1.temperature}}</li>
        <li>{{result1.weather}}</li>
        <li>{{result1.direct}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'future',
  props:{
    result1:Array
  }
};
</script>
