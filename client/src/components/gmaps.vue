<template lang="html">
   <div class="ingmaps">
     <gmap-map
  :center="center"
  :zoom="7"
  style="width: 400px; height: 250px"
>
  <gmap-marker
    v-for="m in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @drag="loc=m.position"
  ></gmap-marker>
</gmap-map>
    <el-button type="primary" @click='setLocation()'>set location</el-button>
   </div>
</template>

<script>
export default {
  name:'ingmaps',
  mounted () {
  },
  watch: {
  '$route'(to, from) {
    Vue.$gmapDefaultResizeBus.$emit('resize')
  }
},
  data () {
    return {
      loc:'',
      center: {lat: -6.175284, lng: 106.826570},
        markers: [{
          position: {lat: -6.175284, lng: 106.826570}
        }]
    }
  },
  methods :{
    move (){

      console.log(this.loc);
    },
    setLocation (){
      console.log(this.loc);
      this.$emit('sendLocation',this.loc)
    }
  }
}
</script>

<style lang="css">
</style>
