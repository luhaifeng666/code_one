/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-05-03 22:08:19
 * @version $Id$
 */
$(function(){
	var check = function(name, rule) {
		return rule.test(name);
	}

	$('#rg-mail,#mail-address').blur(function(){
		var $el = $(this);
		if($el.val() != '') {
			var mail = $el.val(),
				checkMail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
			if(check(mail, checkMail)){
				$el.siblings('p.tip').addClass('hide');
			}else {
				$el.siblings('p.tip').removeClass('hide').text('无效的邮箱地址');
			}
		}else {
			$el.siblings('p.tip').removeClass('hide').text('请输入邮箱地址');
		}
	});

	$('#rg-pwd').blur(function(){
		var $el = $(this);
		if($el.val() != ''){
			$el.siblings('p.tip').addClass('hide');
		}else {
			$el.siblings('p.tip').removeClass('hide').text('请输入密码');
		}
	});

	$('#rg-repwd').blur(function(){
		var $el = $(this);
		if($el.val() != '') {
			var ewpwd = $el.val(),
				pwd = $('#rg-pwd').val();
			if(ewpwd === pwd){
				$el.siblings('p.tip').addClass('hide');
			}else {
				$el.siblings('p.tip').removeClass('hide').text('两次密码不一致');
			}
		}else {
			$el.siblings('p.tip').removeClass('hide').text('请再次输入密码');
		}
	});

	$('#rg-check,#find-checkNum').blur(function(){
		var $el = $(this);
		if($el.val() != '') {
			var checkNum = $el.val(),
				type = /^\d+$/;
			if(checkNum.length == 6 && check(checkNum, type)){
				$el.siblings('p.tip').addClass('hide');
			}else {
				$el.siblings('p.tip').removeClass('hide').text('验证码应为6位数字');
			}
		}else {
			$el.siblings('p.tip').removeClass('hide').text('请填写验证码');
		}
	});
	
	$('#rg-ename').blur(function(){
		var $el = $(this);
		if($el.val() != '') {
			var ename = $el.val(),
				nameCheck = /^[A-Za-z]+$/;
			if(ename.length >= 5 && ename.length <= 13){
				if(check(ename, nameCheck)) {
					$el.siblings('p.tip').addClass('hide');
				}else {
					$el.siblings('p.tip').removeClass('hide').text('请填写英文名');
				}
			}else {
				$el.siblings('p.tip').removeClass('hide').text('请填写5-13位字符');
			}
		}else {
			$el.siblings('p.tip').removeClass('hide').text('请填写英文名');
		}
	});

	$('#find-check').click(function(){
		var $el = $(this);
		if($el.hasClass('disabled')){
			return;
		}else {
			$el.html('<b>60</b>S后重新获取').addClass('disabled');
			var time = 59;
			var t = setInterval(function(){
				if(time > 0) {
					$el.find('b').text(time);
					time--;
				}else {
					$el.html('重新获取').removeClass('disabled');
					clearInterval(t);
				}
			},1000);
		}
	});
});