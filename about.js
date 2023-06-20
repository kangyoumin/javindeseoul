
const auth = document.querySelector('.auth1');
const prod = document.querySelector('.prod1');

document.addEventListener('scroll', function() {
  let authTop = auth.getBoundingClientRect().top;
  let authMid = authTop + auth.getBoundingClientRect().height/3;
  let windowMid = window.innerHeight/3;

  if(Math.abs(windowMid - authMid)< 250){
    auth.style.opacity = '1';
    prod.style.opacity = '1';
  }else{
    auth.style.opacity = '0';
    prod.style.opacity = '0';
  }
});//windowmid와 authMid의 차이의 절대값이 250보다 작을 때(스크롤 위치가 태그의 중간쯤 왔을 때) 태그가 서서히 나타나며 회전하도록 



const sec3_1Elements = document.querySelectorAll('.sec3-1');
const blinkImg = document.querySelector('.blinkimg');

  sec3_1Elements.forEach(function(element) {
    const h3 = element.querySelector('h3');
    const p = element.querySelector('p');

    element.addEventListener('click', function() {
      sec3_1Elements.forEach(function(el) {
        const h3El = el.querySelector('h3');
        const pEl = el.querySelector('p');

        if (el === element) {
          h3El.style.top = '-90px'
          h3El.style.opacity = '0';
          pEl.style.bottom = '70px';
          pEl.style.opacity = '1';
          blinkImg.style.animation = 'none';
        } else {
          h3El.style.top = '0px';
          h3El.style.opacity = '1';
          pEl.style.bottom = '-100px';
          pEl.style.opacity = '0';
        }
      });
    });
  });

const ham = document.querySelector('.ham');
const aside = document.querySelector('aside');
const xbox = document.querySelector('.xbox');

ham.addEventListener('click', function() {
  if (aside.style.right === '0px') {
    aside.style.right = '-300px';
    aside.style.transition = 'all 0.5s ease-in-out';
    aside.style.boxShadow = '-5px 0px 30px rgba(79, 74, 64, 0)';
  } else {
    aside.style.right = '0px'; 
    aside.style.transition = 'all 0.5s ease-in-out';
    aside.style.boxShadow = '-5px 0px 30px rgba(79, 74, 64, 0.5)';
  }
});

xbox.addEventListener('click', () => {
  aside.style.transition = 'all 0.5s ease-in-out';
  aside.style.right = '-300px';
  aside.style.boxShadow = '-5px 0px 30px rgba(0, 0, 0, 0)';
});
