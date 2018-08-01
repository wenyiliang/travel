<template>
  <div class="header">
  	    <div class="header-left"><div class="iconfont icon-fanhui"></div></div>
  	    <div class="search"><span class="iconfont icon-sousuo"></span>输入景点/城市、游玩地</div>
  	    <router-link to="/city"><div class="header-right">{{this.city}}<span class="iconfont icon-jiantou"></span></div></router-link>
  </div>
</template>
<script type="text/javascript">
import {mapState} from "vuex" 
export default {
  name: "HomeHeader",
  computed:{
  	 ...mapState(["city"])
  }
  // props:{
  // 	   city: String
  // }
}
</script>
<style lang="stylus" scoped>
       @import "../../../assets/mode.styl"
	   .header
	   	 display:flex
	   	 line-height:.86rem
	   	 background: $bgcolor
	   	 color:#fff
	   	 .header-left
	   	 	width:.64rem
	   	 	text-align:center  	 			
	   	 .search
	   	 	border-radius:.1rem
	   	 	margin-top:.12rem
	   	 	margin-left:.2rem
	   	 	height:.64rem
	   	 	padding-left:.1rem
	   	 	color:#ccc
	   	 	line-height:.64rem
	   	 	flex:1
	   	 	background:#fff
	   	 .header-right
	   	 	min-width:1.04rem
	   	 	padding:0 .1rem
	   	 	text-align:center
	   	 	color:#fff

</style>