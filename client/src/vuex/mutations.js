import axios from 'axios'
export const state = {
    houses:[],
    newhouse:{
      owner:'',
      price:'',
      phone:'',
      image:'',
      description:'',
      address:'',
      latitude:'',
      longitude:''
    },
    editHouse:''
}

export const mutations = {
    GET_DATA (state){
      var self = this
      axios.get('http://localhost:3000/api/house', {})
      .then(function (response) {
        state.houses = response.data
        console.log(state.houses);
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    GET_EDIT_DATA(state,id){
      axios.get(`http://localhost:3000/api/house/${id}`, {})
      .then(function (response) {
        state.editHouse = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
    }
}

export const actions = {
   getData :function ({commit}){
     commit('GET_DATA')
   },
   getEditData :function ({commit},id){
     commit('GET_DATA',id)
   }
}

export const getters = {
    getHouses: state => state.houses,
    getnewhouse: state => state.newhouse,
    getedithouse: state =>state.editHouse,
}
