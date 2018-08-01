<template>
	<div>
		<cityheader></cityheader>
		<search :citylist="cityList"></search>
		<citylist :citylist="cityList" :hotcitylist="hotCityList"></citylist>
		<alphent :citylist="cityList"></alphent>
	</div>
</template>

<script>
import cityheader from "./components/cityheader"
import search from "././components/search"
import citylist from "././components/list"
import alphent from "././components/alphent"
import axios from "axios"

export default {
	name:"City",
	components:{
       cityheader,
       search,
       citylist,
       alphent
	},
	data(){
		return {
			cityList:[],
			hotCityList:{}
		}
	},
    methods:{
    	getdata(){
    		axios.get("/api/city.json").then(this.getdatacontent);
    	},
    	getdatacontent(res){
    		res=res.data;
    		if(res&&res.ret){
               const data=res.data
               this.cityList=data.cities;
               this.hotCityList=data.hotCities;
    		}
    		
    	}
    },
	mounted(){
		this.getdata();
	}
}
</script>

<style lang="stylus" scoped>
	
</style>