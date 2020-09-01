import Vue from "vue"
import axios from "axios"

Vue.use(axios)
axios.get('http://v.juhe.cn/weather/index?cityname=&dtype=&format=&key=98cd10911abcf8547af7579df131cac3',{
    params:{
        cityname:'',
    }
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })