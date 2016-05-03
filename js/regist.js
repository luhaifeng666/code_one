/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-05-03 22:08:19
 * @version $Id$
 */
$(function(){
	var slide = function(name) {
		setTimeout(function(){
			name.addClass('hide').text('');
		},1500);
	}

	var check = function(name, rule) {
		return rule.test(name);
	}

	$('#rg-mail,#mail-address').blur(function(){
		var $el = $(this);
		if($el.val() != '') {
			var mail = $el.val(),
				checkMail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
			if(check(mail, checkMail)){
				return;
			}else {
				$el.siblings('p.tip').removeClass('hide').text('无效的邮箱地址');
				slide($el.siblings('p.tip'));
			}
		}else {
			$el.siblings('p.tip').removeClass('hide').text('请输入邮箱地址');
			slide($el.siblings('p.tip'));
		}
	});

	$('#rg-repwd').blur(function(){
		var $el = $(this);
		if($el.val() != '') {
			var ewpwd = $el.val(),
				pwd = $('#rg-pwd').val();
			if(ewpwd === pwd){
				return;
			}else {
				$el.siblings('p.tip').removeClass('hide').text('两次密码不一致');
				slide($el.siblings('p.tip'));
			}
		}else {
			$el.siblings('p.tip').removeClass('hide').text('请再次输入密码');
			slide($el.siblings('p.tip'));
		}
	});

	$('#rg-check,#find-checkNum').blur(function(){
		var $el = $(this);
		if($el.val() != '') {
			var checkNum = $el.val(),
				type = /^\d+$/;
			if(checkNum.length == 6 && check(checkNum, type)){
				return;
			}else {
				$el.siblings('p.tip').removeClass('hide').text('验证码应为6位数字');
				slide($el.siblings('p.tip'));
			}
		}else {
			$el.siblings('p.tip').removeClass('hide').text('请填写验证码');
			slide($el.siblings('p.tip'));
		}
	});
	
	$('#rg-ename').blur(function(){
		var $el = $(this);
		if($el.val() != '') {
			var ename = $el.val(),
				nameCheck = /^[A-Za-z]+$/;
			if(ename.length >= 5 && ename.length <= 13){
				if(check(ename, nameCheck)) {
					return;
				}else {
					$el.siblings('p.tip').removeClass('hide').text('请填写英文名');
					slide($el.siblings('p.tip'));
				}
			}else {
				$el.siblings('p.tip').removeClass('hide').text('请填写5-13位字符');
				slide($el.siblings('p.tip'));
			}
		}else {
			$el.siblings('p.tip').removeClass('hide').text('请填写英文名');
			slide($el.siblings('p.tip'));
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