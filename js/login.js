/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-05-03 22:10:24
 * @version $Id$
 */

$(function(){
	$('#userName').blur(function(){
		if($(this).val() == '') {
			$('#remember').removeClass('hide').html('<span>·</span> 请输入用户名');
		}else {
			$('#remember').addClass('hide');
		}
	});

	$('#password').blur(function(){
		if($(this).val() == '') {
			$('#remember').removeClass('hide').html('<span>·</span> 请输入密码');
		}else {
			$('#remember').addClass('hide');
		}
	});
});