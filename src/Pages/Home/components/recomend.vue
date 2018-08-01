<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
		<li class="item border-bottom" v-for="item of list" :key="item.id">
			<img  class="item-image" :src="item.imgUrl"/>
			<div class="info">
			<p class="infotitle">{{item.title}}</p>
			<p class="infodetail">{{item.desc}}</p>
			<button class="infobtn">查看详情</button>
			</div>
		</li>
		</ul>
	</div>
</template>
<script >
export default {
	name:"recomend",
	props:{
		list:Array
	}
	// data(){
	// 	return {
	// 		datalist:[{	id:"0001",
 //       			src:"http://img1.qunarzz.com/sight/p0/1804/c0/c0e5716b77df6aa0a3.img.jpg_200x200_9f19ef7b.jpg",
 //       			title:"德萨斯水世界",
 //       			detail:"世界一流乐园游玩",
 //       		},
 //       		{	id:"0002",
 //       			src:"http://img1.qunarzz.com/sight/p0/1804/c0/c0e5716b77df6aa0a3.img.jpg_200x200_9f19ef7b.jpg",
 //       			title:"德萨斯水世界",
 //       			detail:"世界一流乐园游玩",
 //       		},
 //       		{	id:"0003",
 //       			src:"http://img1.qunarzz.com/sight/p0/1804/c0/c0e5716b77df6aa0a3.img.jpg_200x200_9f19ef7b.jpg",
 //       			title:"德萨斯水世界",
 //       			detail:"世界一流乐园游玩",
 //       		}]
	// 	}
	// }
}	
</script>
<style lang="stylus" scoped>
     .title
     	margin-top:.2rem
     	line-height:.8rem
     	background:#eee
     	text-indent: .2rem
     .item
     	display:flex
     	height:2.2rem
     	overflow:hidden
     	.item-image
     		width:1.7rem
     		height:1.7rem
     		padding:.1rem
     	.info
     		flex:1
     		padding:.1rem
     		.infotitle
     			font-size:.32rem
     			line-height:.54rem
     		.infodetail
     			line-height:.4rem
     			color:#ccc
     		.infobtn
     			border-radius:.06rem
     			background:#ff9300
     			padding:0 .1rem
     			line-height:.44rem
     			margin-top:.16rem
     			color:#fff		
</style>