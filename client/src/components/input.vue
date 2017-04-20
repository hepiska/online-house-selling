<template lang="">
  <div class="elinput">
    <el-form label-position="left" label-width="100px" >
        <el-form-item label="Owner">
          <el-input v-model='datainput.owner' ></el-input>
        </el-form-item >
        <el-form-item label="Price">
          <el-input v-model='datainput.price'></el-input>
        </el-form-item>
        <el-form-item label="Phone">
          <el-input v-model='datainput.phone'></el-input>
        </el-form-item>
        <el-form-item label="Image">
          <el-input v-model='datainput.image'></el-input>
        </el-form-item>
        <el-form-item label="Description">
          <el-input type="textarea" v-model='datainput.description'></el-input>
        </el-form-item>
        <el-form-item label="Address">
          <el-input v-model='datainput.address' value='lalala'></el-input>
        </el-form-item>
        <el-form-item>
         <ingmaps @sendLocation='getlocation'></ingmaps>
       </el-form-item>
        <el-form-item>
         <el-button type="primary" @click="postdata()">Submit</el-button>
       </el-form-item>
    </el-form>
    <p>lal:{{datainput.location}}</p>
  </div>
</template>
<script>
import Ingmaps from './gmaps'
export default {
  name:'elinput',
  components:{
     Ingmaps
  },
  data () {
    return {
      datainput:{
        owner:'',
        price:'',
        phone:'',
        image:'',
        description:'',
        address:'',
        location:''
      }
    }
  },
  methods:{
    postdata(){
      var self = this
      this.axios.post('http://localhost:3000/api/house', {
        owner:self.datainput.owner,
        price:self.datainput.price,
        phone:self.datainput.phone,
        image:self.datainput.image,
        description:self.datainput.description,
        address:self.datainput.address,
        location:self.datainput.location,
      })
      .then(function (response) {
        self.datahouses = response.data
        console.log(self.datahouses);
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    getlocation(gmapsLocation){
      this.datainput.location=gmapsLocation
    },
    handleRemove(file, fileList) {
       console.log(file, fileList);
     },
     handlePreview(file) {
       console.log(file);
     }
  }
}
</script>

<style lang="css">
</style>
