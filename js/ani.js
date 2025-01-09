document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector('.footer_in');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          target.classList.add('active');
        }else {
            target.classList.remove('active'); // 요소가 뷰포트를 벗어나면 클래스 제거
          }
      });
    }, { threshold: 0.2 }); // 요소가 50% 보이면 트리거
  
    observer.observe(target);
  });
  