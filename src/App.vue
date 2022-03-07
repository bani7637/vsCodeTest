<template>
 <!-- wrap start -->
	<div id="wrap">
	
		<!-- header start -->
		<header id="header">
		
			<!-- logo start -->
			<h1 class="KEPRI-logo"><a href="#"><img alt="Vue logo" src="./assets/logo.png"></a><span>전력SW연구개발플랫폼</span></h1>
			<!-- logo end -->
		
			<!-- top menu start-->
			<div class="top-menu-wrap">
			
				<ul class="top-menu-list">
					<li><a href="#">모니터링</a></li>
					<li><a href="#">OPEN API</a></li>
					<li><a href="#">GIS</a></li>
					<li><a href="#">통계/현황</a></li>
				</ul>
				<div class="floatRight">
					<div class="user-info-wrap">
						<ul class="dropdownBtn">
							<li><a>김기범 연구원님</a>
								<ul class="dropdown-menu">
									<li><a href="#">개인정보설정</a></li>
									<li><a href="#">로그아웃</a></li>
								</ul>
							</li>
						</ul>
					</div>
					<div class="lang-info-wrap">
						<ul class="dropdownBtn">
							<li><a>언어</a>
								<ul class="dropdown-menu">
									<li><a href="#">한국어</a></li>
									<li><a href="#">영어</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- top menu end-->
		
		</header>
		<!-- header end -->
		
		<!-- container start -->
		<div id="container">
		
			<!-- left menu start -->
			<div class="left-menu-wrap">
				<div class="left-menu">
					<h2 class="leftMenuTitle"><strong>통계현황</strong></h2>
					<ul class="leftMenuList">
						<li><strong class="leftMenuMainCategory"><a href="#"><i class=""></i>통계 보고서</a></strong>
							<ul class="leftMenuSubCategory">
								<li><a href="#">검침 성공률 통계</a></li>
								<li><a href="#">검침 적정성 통계</a></li>
								<li><a href="#">맞춤형 보고서</a></li>
							</ul>
						</li>
						<li><strong class="leftMenuMainCategory"><a href="#"><i class=""></i>실시간 현황</a></strong>
							<ul class="leftMenuSubCategory">
								<li><a href="#">PV발전전량 현황</a></li>
								<li><a href="#">전력 사용량 현황</a></li>
								<li><a href="#">전력 사용량 추이</a></li>
							</ul>
						</li>
						<li><strong class="leftMenuMainCategory"><a href="#"><i class=""></i>계기 보급 현황</a></strong>
							<ul class="leftMenuSubCategory">
								<li><a href="#">지역별 AMI 보급 현황</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<!-- left menu end -->
			
			
			<!-- content start -->
			<div class="content-container">
			
				<!-- left sub menu start -->
				<div class="left-subMenu-wrap">
					<p class="subMenuBtn" id="subMenu"><span class="subMenuOpen">열기</span></p>
				</div>
				<!-- left sub menu end -->
				
				<div class="content-wrap" >
				
					<!-- title start -->
					<div class="content-title-wrap">
						<h1 class="contentMainTitle"><strong>컨텐츠</strong> 조회</h1>
						<p class="contentTitleRoute"><a href="#"><img alt="ico_home" src="./assets/ico_home.png"></a> &gt; <a href="#">컨텐츠 조회</a></p>
					</div>
					<!-- title wnd -->
					
					<!-- content start -->
					<div class="content" >
            <router-view></router-view>
					</div>
					<!-- content end -->
					
				</div>
			</div>
			<!-- content end-->
			
		</div>
		<!-- container end -->
		
		<!-- footer start -->
		<footer>
		
		</footer>
		<!-- footer end -->
		
	</div>
</template>
<script>
export default {
 name: "App",
 data() {
	return {
		
	}
 },
};
</script>
<style>

</style>>



