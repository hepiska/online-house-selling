<template lang="html">
   <div class="viewmaps">
     <gmap-map
  :center="viewlocation"
  :zoom="7"
  style="width: 400px; height: 250px"
>
  <gmap-marker
    :position="viewlocation"
    :clickable="true"
    :draggable="true"
  ></gmap-marker>
</gmap-map>
   </div>
</template>

<script>
export default {
  name:'viewmaps',
  props:['viewlocation']
}
</script>

<style lang="css">
</style>
