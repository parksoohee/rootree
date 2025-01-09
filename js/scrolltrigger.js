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

