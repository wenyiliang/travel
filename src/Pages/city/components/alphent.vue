<template>
	<div class="list">
		<div class="word" v-for="(item,key) in citylist" :key="key">{{key}}</div>
	</div>
</template>
<script type="text/javascript">
export default {
	name:"alphent",
	props:["citylist"]
}
</script>
<style lang="stylus" scoped>
    @import "../../../assets/mode.styl"
	.list
		display:flex
		flex-direction:column
		justify-content:center
		position:absolute
		top:2rem
		right:0
		bottom:0
		width:.4rem
		.word
		    line-height:.35rem
		    color:$bgcolor
		    text-align:center
</style>