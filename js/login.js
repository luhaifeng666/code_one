/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-05-03 22:10:24
 * @version $Id$
 */

$(function(){
	var slide = function(name) {
		setTimeout(function(){
			$(name).addClass('hide').html('');
		},1500);
	}

	$('#userName').blur(function(){
		if($(this).val() == '') {
			$('#remember').removeClass('hide').html('<span>·</span> 请输入用户名');
			slide('#remember');			
		}
	});

	$('#password').blur(function(){
		if($(this).val() == '') {
			$('#remember').removeClass('hide').html('<span>·</span> 请输入密码');
			slide('#remember');			
		}
	});
});