<template>
	<div class="header"><router-link to="/"><div class="iconfont icon-fanhui"></div></router-link>城市选择</div>
</template>
<script >
export default {
	name:"cityheader"
}
</script>
<style lang="stylus" scoped>
    @import "../../../assets/mode.styl"
	.header
		position:relative
		overflow:hidden
		text-align:center
		background:$bgcolor
		height: $headerHeight
		line-height: $headerHeight
		color:#fff
		font-size:.32rem
		.icon-fanhui
			position:absolute
			left:0
			top:0
			text-align:center
			width:.86rem
			color:#fff
</style>