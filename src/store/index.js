import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas: [
      {nombre: 'manzana', cantidad: 0, estado: false},
      {nombre: 'pera', cantidad: 0, estado: false}, 
      {nombre: 'naranja', cantidad: 0, estado: false}
    ]
  },
  mutations: {
    aumentar(state, index){
      state.frutas[index].cantidad ++;
      state.frutas[index].estado = true;
    },
    resetear(state) {
      if(state.frutas.length > 0){
        state.frutas.forEach(elemento => {
          elemento.cantidad = 0;
          elemento.estado = false
        })
      }  
      else{
        console.log("no hay frutas en la canasta");
      }
    }
  
  },
  actions: {
  },
  modules: {
  }
})
