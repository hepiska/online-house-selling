<template lang="html">
   <div class="elheader">
      <div class="headernya">

      </div>
        <el-carousel :interval="5000" arrow="always" height="550px">
          <el-carousel-item v-for="image in carouselimage">
             <img :src="image" alt="" class="image">
          </el-carousel-item>
        </el-carousel>

   </div>
</template>

<script>
export default {
  name: 'elheader',
  data () {
    return{
      carouselimage:['http://www.stanstedpark.co.uk/public/images/slideshow/stansted-House.jpg',
                    'https://static.domain.com.au/domainblog/uploads/2015/07/24141500/2_gik15v.jpg']
    }
  }
}
</script>

<style lang="css" scoped>
  .headernya{
    height: 60px;
    background-color: #0a429b;
    width: 100%;
  }
  .el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.image{
  width: 1424px;
}
</style>
