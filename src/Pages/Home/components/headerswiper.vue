<template>
    <div class="wraper">
  <swiper :options="swiperOption" >
    <!-- slides -->
    <swiper-slide v-for="item of list" :key="item.id">
        <img :src="item.imgUrl" class="img-full"/>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
export default {
    name:"headerswiper",
    props:{
        list: Array
    },
    data() {
        return {
            swiperOption:{pagination:".swiper-pagination",
            loop:"true"}
        // },
        //     list:[{
        //         src:"http://img1.qunarzz.com/piao/fusion/1807/c6/44fce1467be17702.jpg_750x200_406f5fc3.jpg",
        //         id:"0001"
        //     },
        //     {  
        //         src:"http://img1.qunarzz.com/piao/fusion/1807/66/e5a5cec881702f02.jpg_750x200_67bb5691.jpg",
        //         id:"0002"
        //     },{
        //         src:"http://img1.qunarzz.com/piao/fusion/1806/3c/c72a1ccd4d7b2202.jpg_750x200_b88bbab4.jpg",
        //         id:"0003"}
        //         ]
        }
    }
}
</script>

<style lang="stylus" scoped>
     .wraper >>> .swiper-pagination-bullet-active
         background:#fff !important
     .wraper
         overflow:hidden
         width:100%
         height:0
         padding-bottom:26.67%
         background:#eee
        .img-full
           width:100%
</style>