import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityname: '',
    citys: [{value:''}]
  },
  mutations: {
    increment(state, cityname) {
      var citys = state.citys;
      var a;
      for ( var i = 0,len = citys.length; i < len; i++) {
        console.log(citys[i]);
        console.log(!a);
        console.log(citys);
        console.log({value:cityname});
        if (citys[i].value == cityname) {
          a = true; 
          break   
        } else {
          a = false
        }
      }
        if(!a) {
          citys.push({ value: cityname });
        }
    }
  },
  actions: {
    addCity(context, cityname) {
      context.commit('increment', cityname)
    }
  }
})
