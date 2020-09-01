<template>
  <div class="hello">
    <el-header>
      <h1>天气预报</h1>
      <span>
        <form>
          <el-autocomplete
            :autofocus="true"
            type="text"
            v-model="cityname"
            :fetch-suggestions="querySearch"
            placeholder="请输入城市名称"
          ></el-autocomplete>
          <el-button v-on:click="search" icon="el-icon-search">搜索</el-button>
        </form>
      </span>
    </el-header>
    <el-main>
      <div class="city">{{cityname}}</div>
      <div class="today">
        <el-card class="box-card">
          <div slot="header">
            <h3>实时天气</h3>
            <Today v-bind:result="results"></Today>
            <!-- 引入子组件 -->
            <div class="today1">
              <ul>
                <li v-for="result in  results" v-bind:key="result.city">{{result}}</li>
              </ul>
            </div>
          </div>
        </el-card>
      </div>
      <div class="future">
        <el-card class="card2">
          <div slot="header">
            <h3>近五天天气情况</h3>
            <Future v-bind:result1="result1s"></Future>
            <!-- 引入子组件 -->
            <div class="today1">
              <ul class="future1" v-for="result1 in  result1s" v-bind:key="result1.city">
                <li>{{result1.date}}</li>
                <li>{{result1.temperature}}</li>
                <li>{{result1.weather}}</li>
                <li>{{result1.direct}}</li>
              </ul>
            </div>
          </div>
        </el-card>
      </div>
    </el-main>
  </div>
</template>

<script>
const API_PROXY = "https://bird.ioliu.cn/v1/?url=";
import { mapState, mapActions } from "vuex";
import Today from "../views/Today.vue";
import Future from "../views/Future.vue";
export default {
  name: "HelloWorld",
  components: {
    Today,
    Future
  },
  data() {
    return {
      cityname: "",
      results: [],
      result1s: []
    };
  },
  computed: mapState(["citys"]),
  methods: {
    ...mapActions(["addCity"]),
    querySearch(queryString, cb) {
      var citys = this.citys;
      var results = queryString
        ? citys.filter(this.createFilter(queryString))
        : citys;
      cb(results);
    },
    createFilter(queryString) {
      return citys => {
        return (
          citys.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    search: function() {
      var _this = this;
      _this.addCity(_this.cityname);
      var a =
        API_PROXY +
        "http://apis.juhe.cn/simpleWeather/query?city=%E5%8C%97%E4%BA%AC&key=f6aafd5f15828c2dc293aff0d8ecec64";
      var c = _this.cityname;
      var b = {
        params: {
          city: c
        }
      };
      _this.$axios
        .get(a, b)
        .then(function(response) {
          _this.results = response.data.result.realtime;
          _this.result1s = response.data.result.future;
          console.log(_this.results);
          console.log(_this.result1s);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style>
.city {
  height: 30px;
  width: 100%;
}
.card2 {
  height: 300px;
}
ul {
  display: inline-block;
  list-style-type: none;
}
li {
  padding-right: 40px;
  list-style-type: none;
  line-height: 20px;
}
.el-header {
  width: 100%;
  height: 30%;
  text-align: center;
}
.el-main {
  width: 100%;
  height: 70%;
}
.today {
  padding-top: 3%;
  height: 200px;
  width: 100%;
}
.today1,
.wid {
  float: left;
}
.future {
  padding-top: 8%;
  height: 500px;
  width: 100%;
}
</style>
<style  scoped>
.el-card {
  background-image: url("../assets/1-2.png");
  background-repeat: no-repeat;
  background-position: center;
}
/* background: rgb(253, 202, 234);
} */
</style>