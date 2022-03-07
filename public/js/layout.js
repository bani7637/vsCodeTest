/*******************************************************************************
 * 파일명 : user.js
 * 내  용 : Template1을 구동하기 위한 js 
 ******************************************************************************/
 $(function(){
	
	// left menu start
	var snb = $('.left-menu');
	var toggleOn = $('snbOn');
	var toggleOff = $('snbOff');
	
	snb.find('li>ul').css('display','none');
	snb.find('li>ul:hidden').parent('li').prepend(toggleOn);
	snb.find('li>ul:visible').parent('li').prepend(toggleOff);
	
	snb.find('strong.leftMenuMainCategory').parents('li').addClass('snbOff');
	snb.find('.leftMenuMainCategory').children('a').addClass('menuLink');
	snb.find('li.snbOn>ul').slideDown(300);

	$('li.snbOff .menuLink').click(function(){
		snb = $('.left-menu');
		$this = $(this);
		$parent = $(this).parents('li');
		snb.find('li>ul').slideUp(300);
		tsnb = snb.find('li>ul').slideUp(300);
		
		if($parent.hasClass('snbOn')){
			!$this.find('li>ul').parents('li.snbOn').removeClass('snbOn').addClass('snbOff');
		}else{
			snb.find('li>ul').parents('li.snbOn').removeClass('snbOn').addClass('snbOff');
		};
		
		if($parent.hasClass('snbOff')){
			$parent.removeClass('snbOff').addClass('snbOn');
			$parent.find('>ul').slideDown(300);
		}else{
			$parent.removeClass('snbOn').addClass('snbOff');
			$parent.find('>ul').slideUp(300);
		}
	});
	// left menu end
	
	// left subMenu start
	var container = $('#container');
	$subMenu = $('#subMenu');
	$subMenuToggle = $('#subMenu').children('span');
	
//	container.find('.left-menu-wrap').css('display', 'table-cell');
	$('#subMenu').click(function(){
		if($subMenuToggle.hasClass('subMenuOpen')){
			container.find('.left-menu-wrap').css('display', 'none');
			container.find('.content-container').css('width', '100%');
			$subMenu.find('>span').removeClass('subMenuOpen').addClass('subMenuClose');
		}else{
			container.find('.left-menu-wrap').css('display', 'table-cell');
			container.find('.content-container').css('width', 'calc(100% - 240px)');
			$subMenu.find('>span').removeClass('subMenuClose').addClass('subMenuOpen');
		}
	});

	$('.dropdownBtn').click(function(){
		
		$('li>ul', this).toggle();
		
	});

	
});

