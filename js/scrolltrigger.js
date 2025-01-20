	gsap.registerPlugin(ScrollTrigger);


	gsap.to(".img_banner", {
		width:100 + "%", height: 100 + "vh",
		scrollTrigger: {
			//markers: true,//마커 표시
			trigger: ".img_banner",
			start: "top 70%",
			end: " 20% 100% ",
			scrub: 1,
		},
	});

// 	$(function () {


//     $(".nav").mouseenter(function () {
//         $(".depth").stop().slideDown(500);
//     });
//     $(".nav").mouseleave(function () {
//         $(".depth").stop().slideUp(300);
//     });
// 		$(".nav").mouseenter(function () {
// 			$(".depth_back").stop().slideDown(500);
// 		});
// 		$(".nav").mouseleave(function () {
// 				$(".depth_back").stop().slideUp(500);
// 		});



// });
$(function () {
	// 슬라이드 상태를 추적하기 위한 플래그
	let isSliding = false;

	$(".nav, .depth_back").on("mouseenter", function () {
			// 마우스가 .nav 또는 .depth_back 위로 가면 슬라이드 다운
			if (!isSliding) {
					isSliding = true;
					$(".depth, .depth_back").stop().slideDown(500);
			}
	});

	$(".header, .depth_back").on("mouseleave", function (e) {
			// 마우스가 .nav와 .depth_back을 모두 벗어났는지 확인
			if (!$(e.relatedTarget).closest(".header, .depth_back").length) {
					isSliding = false;
					$(".depth").stop().slideUp(300);
					$(".depth_back").stop().slideUp(500);
			}
	});
});
