<template>
	<div>
	<div class="search">
		<input type="text" v-model="keyword" class="input-box" placeholder="请输入城市名或拼音">
	</div>
	<div class="search-box" ref="searchbox" v-show="keyword">
		<div class="search-content border-bottom" v-for="item in list"  @click="changeSelectedCity(item)">{{item}}</div>
		<div class="search-content" v-show="hasResult">不存在该城市</div>
	</div>
	</div>
</template>
<script >
import bestscroll from "better-scroll"
export default {
	name:"search",
	props:["citylist"],
	data(){
		return {
			list:[],
            keyword:'',
            timer:null
		}
	},
	computed:{
		hasResult(){
			return !this.list.length
		}
	},
    methods:{
        changeSelectedCity(city){
               // this.$store.dispatch("changeCity",city)
               this.$store.commit("changeCity",city)
               this.$router.push("/")
        }
    },
	watch:{
		keyword(){
             if(this.timer){
             	clearTimeout(this.timer);
             }
             this.timer=setTimeout(()=>{
             	const result=[]
            	for(let i in this.citylist){
            		this.citylist[i].forEach((value)=>{
            			if(value.name.indexOf(this.keyword)>-1){
            				result.push(value.name)
            			}
            		})
            	}
            	this.list=result;
            },100)
		}
	},
	mounted(){
		this.scroll=new bestscroll(this.$refs.searchbox)
	}
}
</script>
<style lang="stylus" scoped>
    @import "../../../assets/mode.styl"
    .search
    	height:.72rem
    	padding:0 .1rem
    	background:$bgcolor
    	.input-box
    		text-align:center
    		width:100%
    		box-sizing:border-box
    		color:#666
    		height:.62rem
    		line-height:.62rem
    		border-radius:.06rem
    		padding:0 .1rem
    .search-box
    	position:absolute
    	z-index:1
    	top:1.58rem
    	left:0
    	right:0
    	bottom:0
    	background:#eee
    	.search-content
    		line-height:.62rem
    		color:#666
    		padding-left:.2rem
    		background:#fff
</style>