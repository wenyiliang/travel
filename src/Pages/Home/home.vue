<template>
  <div>
  	<homeheader ></homeheader>
  	<headerswiper :list="swiperlist"></headerswiper>
  	<homeicon :list="iconlist"></homeicon>
  	<recomend :list="recomendlist"></recomend>
  	<weekend :list="weekendlist"></weekend>
  </div>
</template>
<script type="text/javascript">
import homeheader from "./components/homeheader"
import headerswiper from "./components/headerswiper"
import homeicon from "./components/homeicon"
import recomend from "./components/recomend"
import weekend from "./components/weekend"
import axios from "axios"

export default {
  data(){
  		return {
  			city:'北京',
  			swiperlist:[],
  			iconlist:[],
  			recomendlist:[],
  			weekendlist:[]
  		}
  	},
  name: "Home",
  components:{
  	homeheader,
  	headerswiper,
  	homeicon,
  	recomend,
  	weekend
  },
  methods:{
  	solvedata (){
  		axios.get("/api/index.json").then(this.getdata);
  	},
  	getdata (res){
  		res=res.data;
        if(res.ret&&res.data){
        	const data=res.data;
        	this.swiperlist=data.swiperList;
        	this.iconlist=data.iconList;
        	this.recomendlist=data.recommendList
        	this.weekendlist=data.weekendList
        }
  	}
  },
  mounted(){
  	this.solvedata();
  }
}
</script>
<style type="text/css">
	
</style>