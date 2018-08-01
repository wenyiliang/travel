<template>
	<div class="container">
		 <swiper :options="swiperOption">
		<swiper-slide v-for="(items,index) of pages" :key="index">
		<div class="item" v-for="item of items" :key="item.id">
			<div class="iconcontent">
				<img class="icon" :src="item.imgUrl"/>
			</div>
			<p class="text" v-text="item.desc"></p>
		</div>
		</swiper-slide>
	</swiper>
	</div>
</template>
<script>
export default {
       name:"icon",
       data(){return {
       	  swiperOption:{
       	   autoplay:false
       }
       }
       },
       props:{
       	   list:Array
       },
     //   data(){return {
     //         datalist:[{id:"0001",
     //   			  src:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
     //   			  text:"景点门票"
     //   			},
     //   			{
     //   			  id:"0002",
     //   			  src:"http://img1.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png",
     //   			  text:"海滨海岛"
     //   			},
     //   			{
     //   			id:"0003",
     //   			  src:"http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png",
     //   			  text:"水世界乐园"
     //   			 },
     //   			 {
     //   			id:"0004",
     //   			  src:"http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png",
     //   			  text:"游船游艇"
     //   			 },
     //   			{
     //   			id:"0005",
     //   			  src:"http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",
     //   			  text:"自然风光"
     //   			 },
     //   			{
     //   			id:"0006",
     //   			  src:"http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
     //   			  text:"温泉"
     //   			 },
     //   			{
     //   				id:"0007",
     //   			  src:"http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png",
     //   			  text:"汽车票"
     //   			},
     //   			{
     //   				id:"0008",
     //   			  src:"http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png",
     //   			  text:"玩转长隆"
     //   			},
     //   			{
					// id:"0009",
     //   			  src:"http://img1.qunarzz.com/piao/fusion/1803/90/59a2f523ee2f9202.png",
     //   			  text:"农家乐园"
     //   			}
     //   ]
     //   }},
       computed:{
       	    pages(){
       	    	const pages=[];
       	    	this.list.forEach(function(key,index){
       	    		    const page=Math.floor(index/8);
                        if(!pages[page]){
                               pages[page]=[];
                        };
                        pages[page].push(key);
       	    	});
       	    	return pages;
       	    }
       }

}
</script>
<style lang="stylus" scoped>
	 @import "../../../assets/mode.styl"
	.container
		overflow:hidden
		height:0
		padding-bottom:50%
		margin-top:.2rem
		.item
			position:relative
			float:left
			overflow:hidden
			padding-bottom:25%
			width:25%
			.iconcontent
				position:absolute
				left:0
				right:0
				top:0
				bottom:.44rem
				text-align:center
				.icon
					height:100%
			.text
				position:absolute
				left:0
				right:0
				bottom:0
				line-height:.44rem
				height:.44rem
				text-align:center
				color:$textcolor
				overflow:hidden
				white-space:nowrap
				text-overflow:ellipsis			
</style>	