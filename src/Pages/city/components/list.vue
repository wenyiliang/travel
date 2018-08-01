<template>
	<div class="list" ref="wrapper">
	<div>
	<div class="area">
		<div class="border-topbottom title">当前城市</div>
		<div class="btnlist">
			<div class="btn">{{this.city}}</div>
		</div>
	</div>
	<div class="area">
		<div class="title border-topbottom">热门城市</div>
		<div class="btnlist" >
			<div class="btn" v-for="item in hotcitylist" :key="item.id" @click="changeSelectedCity(item.name)">{{item.name}}</div>
		</div>
	</div>
	<div class="area" v-for="(aitem,key) in citylist" :key="key">
		<div class="title border-topbottom">{{key}}</div>
		<div class="item-list" >
			<div class="item border-bottom" v-for="inneritem in aitem" @click="changeSelectedCity(inneritem.name)">{{inneritem.name}}</div>
		</div>
	</div>
   </div>
	</div>
</template>

<script>
import scroll from "better-scroll"
import {mapState} from "vuex"
export default {
	name:"list",
	mounted(){
		this.scroll=new scroll(this.$refs.wrapper)
	},
	computed:{
		...mapState(['city'])
	},
	props:["citylist","hotcitylist"],
	methods:{
		changeSelectedCity(city){
               this.$store.commit("changeCity",city)
               this.$router.push("/")
		}
	}
}
</script>

<style lang="stylus" scoped> 
    .border-topbottom
       &:before
       	background:#ccc
       &:after
       	background:#ccc
    .border-bottom
       &:before
       	background:#ccc
    .list
    	position:absolute
    	left:0
    	right:0
    	top:1.58rem
    	bottom:0
    	overflow:hidden	
  	.title
  		color:#666
  		background:#eee
  	 	line-height: .44rem
  	 	padding-left: .2rem 
  	 	font-size: .26rem
	.btnlist
  		padding:.1rem .6rem .1rem .1rem 
  		overflow:hidden
	  	.btn
	  		float:left
	  		width:26%
	  		margin: .1rem
	  		padding:.1rem 0
	  		border-radius:.06rem
	  		border:.02rem solid #ccc
	  		text-align:center	
	.item-list
		.item
			padding-left:.2rem
			background:#eee
			line-height:.76rem
			font-size:.26rem
			color:#666
		
</style>