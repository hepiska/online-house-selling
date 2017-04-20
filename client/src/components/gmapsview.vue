<template lang="html">
   <div class="viewgmaps">
     <!-- <gmap-map
  :center="center"
  :zoom="7"
  style="width: 400px; height: 250px"
>
  <gmap-marker
    :position="center"
    :clickable="true"
    :draggable="true"
    @drag="loc=m.position"
  ></gmap-marker>
</gmap-map> -->
   </div>
</template>

<script>

export default {
  name:'viewgmaps',
  props:['getlocation'],
  mounted () {
  },
  watch: {
  // '$route'(to, from) {
  //   //Vue.$gmapDefaultResizeBus.$emit('resize')
  // }
},
  data () {
    return {
      center:his.getlocation
    }
  }
}
</script>

<style lang="css">
</style>
