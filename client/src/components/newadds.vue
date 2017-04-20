<template lang="html">
   <div class="newadds">
     <el-popover
        ref="popover4"
        placement="right-end"
        width="800"
        trigger="click">
       <elinput></elinput>
    </el-popover>
     <el-row :gutter="10" type="flex" class="row-bg">
         <el-col :xs="7" :sm="5" :md="3" :lg="2"><el-button class="button" v-popover:popover4 >new Adds</el-button></el-col>
    </el-row>
   </div>
</template>

<script>
import Elinput from './input'
export default {
  name:'newadds',
  components:{
    Elinput
  },
  data () {
    return {
      house:''
    }
  }
}
</script>

<style lang="css" scoped>
.newadds{
  margin-top: 10px;
  margin-bottom: 10px;
}
.button{
  background-color: #0a429b;
  color: white;
}
</style>
