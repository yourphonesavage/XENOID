$(function(){
	var t=0;
	var pageN=0;
	var winHalf, winW;
	var timer=0;
	var targetY=0;
	var scrollFlag=false;

	$("#header").addClass("active");
	$("#desktop li").eq(pageN).addClass("active");

	$(window).scroll(function(){
		clearTimeout(timer);

		timer=setTimeout(function(){
			t=$(window).scrollTop();

			if(t < $(".sub1").offset().top-winHalf){
				pageN=0;
			}
			else if(t < $(".sub2").offset().top-winHalf){
				pageN=1;
			}
			else if(t < $(".sub3").offset().top-winHalf){
				pageN=2;
			}
			else if(t < $(".sub4").offset().top-winHalf){
				pageN=3;
			}
			else if(t < $(".sub5").offset().top-winHalf){
				pageN=4;
			}
			else{
				pageN=5;
			}

			if(t > 100){
				$("#header .header_top").addClass("active");
				$("#footer .go_top").addClass("active")
			}
			else{
				$("#header .header_top").removeClass("active");
				$("#footer .go_top").removeClass("active");
			}			
			
			$("#desktop li").removeClass("active");
			$("#desktop li").eq(pageN).addClass("active");

		if(scrollFlag) {
			return;
		}

		
		if($(".sub"+pageN).hasClass("active") == false){
			$(".sub"+pageN).addClass("active");
		}
	})
});

	$(window).resize(function(){
		winHalf=$(window).height()/2;
		winW=$(window).width();

		if(winW > 720){
			if($("#mobile").hasClass("active")){
				$("#mobile").removeClass("active");
				$(".dim").removeClass("active");
				$(".tab").removeClass("active");
			}
		}
	});
	$(window).trigger("resize");
	$(window).trigger("scroll");

	$("#desktop li").click(function(e){
		e.preventDefault();
		$("#desktop li").removeClass("active");
		$(this).addClass("active");
		pageN=$(this).index();

		if(pageN == 0){
			targetY=0;
		}
		else{
			targetY=$(".sub"+pageN).offset().top;
		}

		$("html").animate({scrollTop: targetY}, 800);
	});

	$("#header .header_top .header_top_inner .tab").click(function(e){
		e.preventDefault();
		$("#mobile").toggleClass("active");
		$(".dim").toggleClass("active");
		$(".tab").toggleClass("active");
		$("body").toggleClass("fixed");		
	});
	$(".dim").click(function(e){
		e.preventDefault();
		$("#mobile").removeClass("active");
		$(".tab").removeClass("active");
		$("body").removeClass("fixed");
		$(".dim").removeClass("active")
	})

	$("#mobile li").click(function(e){
		e.preventDefault();
		$("#mobile").removeClass("active");
		$(".dim").removeClass("active");
		$(".tab").removeClass("active");

		pageN=$(this).index();

		if(pageN == 0){
			targetY=0;
		}
		else{
			targetY=$(".sub"+pageN).offset().top;
		}
		$("html").animate({scrollTop: targetY}, 800);
	});

	$("#footer .go_top").click(function(e){
		e.preventDefault();
		$("html").animate({scrollTop:0}, 400);
	});

});