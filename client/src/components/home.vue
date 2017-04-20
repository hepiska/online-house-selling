<template lang="html">
   <div class="home">
      <elheader></elheader>
      <newadds></newadds>
      <allhouse></allhouse>
   </div>
</template>

<script>
import Elheader from './elheader'
import Allhouse from './allhouse'
import Newadds from './newadds'
export default {
  name: 'home',
  components:{
    Elheader,
    Allhouse,
    Newadds
  },
  data () {
    return{

    }
  }
}
</script>

<style lang="css">
</style>
