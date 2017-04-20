<template lang="html">
   <div class="allhouse">
   <house v-for='house in houses' v-bind:housesprops="house"></house>
   </div>
</template>

<script>
import House from './house'
export default {
  name: 'allhouse',
  components:{
    House
  },
  mounted () {
    this.$store.dispatch(`getData`);
    //this.getdata()
  },
  data () {
    return{
      datahouses:''
    }
  },
  computed: {
   houses () {
    return this.$store.state.houses
   }
 },
  methods : {
  }
}
</script>


</style>
