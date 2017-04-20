<template lang="html">
   <div class="edit">
     <div class="headernya">
         <h3>edit data</h3>
     </div>
     <el-form label-position="left" label-width="100px" >
         <el-form-item label="Owner">
           <el-input v-model='editData.owner' ></el-input>
         </el-form-item >
         <el-form-item label="Price">
           <el-input v-model='editData.price'></el-input>
         </el-form-item>
         <el-form-item label="Phone">
           <el-input v-model='editData.phone'></el-input>
         </el-form-item>
         <el-form-item label="Image">
           <el-input v-model='editData.image'></el-input>
         </el-form-item>
         <el-form-item label="Description">
           <el-input type="textarea" v-model='editData.description'></el-input>
         </el-form-item>
         <el-form-item label="Address">
           <el-input v-model='editData.address' value='lalala'></el-input>
         </el-form-item>
         <el-form-item>
           <gmap-map
            :center="editData.location"
            :zoom="17"
            @click="mapRclicked"
            style="width:450px; height:300px">
            <gmap-marker
              :position="saveLoc"
              :clickable="true"
            ></gmap-marker>
          </gmap-map>
        </el-form-item>
         <el-form-item>
          <el-button type="primary" @click="postdata()">Submit</el-button>
        </el-form-item>
     </el-form>
   </div>
</template>

<script>

import Elheader from './elheader'

export default {
  name: 'edit',
  components:{
    Elheader
  },
  mounted(){
    this.geteditdata()
    this.saveLoc=editData.location
  },
  data () {
    return{
      editData:'',
      saveLoc:{
        lat:0,
        lng:0
      },
      markers:''
    }
  },
  methods:{
    postdata(){
      let self=this
      this.axios.put(`http://localhost:3000/api/house/${this.$route.params.id}`, {
        owner:self.editData.owner,
        price:self.editData.price,
        phone:self.editData.phone,
        image:self.editData.image,
        description:self.editData.description,
        address:self.editData.address,
        location:self.saveLoc,
      })
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
    },
     geteditdata(){
       let self=this
       this.axios.get(`http://localhost:3000/api/house/${this.$route.params.id}`, {})
       .then(function (response) {
         self.editData = response.data
       })
       .catch(function (error) {
         console.log(error)
       })
     },
     mapClicked(mouseArgs) {
      console.log('map clicked', mouseArgs); // eslint-disable-line no-console
     },
   mapRclicked(mouseArgs) {
  const createdMarker = this.addMarker();
  console.log(mouseArgs);
  // this.houseDialog.loc.lat = mouseArgs.latLng.lat();
  // this.houseDialog.loc.lng = mouseArgs.latLng.lng();
  this.saveLoc.lat = mouseArgs.latLng.lat();
  this.saveLoc.lng = mouseArgs.latLng.lng();
  createdMarker.position.lat = mouseArgs.latLng.lat();
  createdMarker.position.lng = mouseArgs.latLng.lng();
 },
 addMarker: function() {
  this.lastId++;
  this.markers = {
    id: this.lastId,
    position: {
      lat: 48.8538302,
      lng: 2.2982161
    },
    opacity: 1,
    draggable: true,
    enabled: true,
    clicked: 0,
    rightClicked: 0,
    dragended: 0,
    ifw: true,
    ifw2text: 'This text is bad please change me :( '
  }
  return this.marker;
 }
  }
}

</script>

<style lang="css">
.headernya{
  height: 60px;
  background-color: #0a429b;
  width: 100%;
}
</style>
