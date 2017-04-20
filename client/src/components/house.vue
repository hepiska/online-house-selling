<template lang="html">
   <div class="House">
     <el-card class="box-card">
       <el-row :gutter="10">
        <el-col :xs="12" :sm="9" :md="6" :lg="6">
          <img :src="datahouse.image" class="image">
        </el-col>
        <el-col :xs="12" :sm="9" :md="6" :lg="6">
            <h3 class='harga'>harga:Rp {{datahouse.price}}</h3>
            <h3 class='harga'>owner: {{datahouse.owner}}</h3>
            <h3 class='harga'>phone:{{datahouse.phone}}</h3>
            <h3 class='harga'>description :</h3>
            <textarea rows="4" cols="50" readonly class='area'>
              {{datahouse.description}}
            </textarea>
        </el-col>
        <el-col :xs="6" :sm="6" :md="5" :lg="5">
            <h4 class='harga'> address: {{datahouse.address}} </h4>
        </el-col>
        <el-col :xs="6" :sm="6" :md="5" :lg="5">
             <viewmaps v-bind:viewlocation="datahouse.location"></viewmaps>
        </el-col>

      </el-row>

            <el-button type="primary"><router-link :to="'/edit/'+datahouse._id">edit</router-link></el-button>

        <el-button type="primary" @click='deletehouse()'>delete</el-button>
    </el-card>
   </div>
</template>

<script>
import Viewmaps from './viewmaps'
export default {
  name:'house',
  props:['housesprops'],
  components:{
    Viewmaps
  },
  data () {
    return{
      datahouse:this.housesprops
    }
  },
  methods :{
    deletehouse(){
      let self=this
      this.axios.delete(`http://localhost:3000/api/house/${self.datahouse._id} `, {})
      .then(function (response) {
        alert(response.data)
        console.log(response.data);
        self.$store.dispatch(`getData`);
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="css" scoped>
.box-card {
  width: 100%;
}
.harga{
  text-align: left;
  height: 15px;
  line-height: 15px;
  white-space: nowrap;
  margin: 10px
}
.area{
  text-align: left;
  float: left;
}
.image{
  width: 100%;
}
.houseinfo{
  padding: 5px;
}
.box-card{
  margin-top:10px;
  margin-bottom: 10px;
}
</style>
