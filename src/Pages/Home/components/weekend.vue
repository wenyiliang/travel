<template>
	<div>
		<div class="title">周末去哪儿</div>
		<ul>
		<li class="item" v-for="item of list" :key="item.id">
      <div class="image-wraper"> 
			<img  class="item-image" :src="item.imgUrl"/>
      </div>
			<div class="info">
			<p class="infotitle">{{item.title}}</p>
			<p class="infodetail">{{item.desc}}</p>
			</div>
		</li>
		</ul>
	</div>
</template>
<script >
export default {
	name:"weekend",
  props:{
      list:Array
  }
	// data(){
	// 	return {
	// 		datalist:[{	id:"0001",
 //       			src:"http://img1.qunarzz.com/sight/source/1509/bc/50eb743f47cec5.jpg_r_640x214_fa1b0019.jpg",
 //       			title:"湛江必游TOP5",
 //       			detail:"中国海军南海舰队司令部所在地，够酷",
 //       		},
 //       		{	id:"0002",
 //       			src:"http://img1.qunarzz.com/sight/source/1509/bc/50eb743f47cec5.jpg_r_640x214_fa1b0019.jpg",
 //       			title:"湛江必游TOP5",
 //       			detail:"中国海军南海舰队司令部所在地，够酷",
 //       		},
 //       		{	id:"0003",
 //       			src:"http://img1.qunarzz.com/sight/source/1509/bc/50eb743f47cec5.jpg_r_640x214_fa1b0019.jpg",
 //       			title:"湛江必游TOP5",
 //       			detail:"中国海军南海舰队司令部所在地，够酷",
 //       		}]
	// 	}
	// }
}	
</script>
<style lang="stylus" scoped>
     .title
     	line-height:.8rem
     	background:#eee
     	text-indent: .2rem
    .image-wraper
      height:0
      overflow:hidden
      padding-bottom:37.8%    
     	.item-image
     		width:100%
   	.info
   		padding:.1rem
   		.infotitle
   			font-size:.32rem
   			line-height:.54rem
   		.infodetail
   			line-height:.4rem
   			color:#ccc	
</style>