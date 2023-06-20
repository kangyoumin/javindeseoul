const mainImg = document.querySelector('.mainimg');

window.addEventListener("load", function() {
  mainImg.style.opacity = '1';
  mainImg.style.transition = 'ease-in-out 1s';
}); //const를 이용해 mainimg를 불러오고 페이지가 로드 될 때 서서히 나타나도록 

const colorMini = document.querySelector('.colormini');
const miniImgs = document.querySelectorAll('.minimg');
const pale1 = document.querySelector('.pale1');
const vanilla1 = document.querySelector('.Vanilla1');
const ivory1 = document.querySelector('.Ivory1');
const sand1 = document.querySelector('.Sand1');
const beige1 = document.querySelector('.Beige1');

window.addEventListener('load', function() {
      colorMini.style.opacity = '1';
      colorMini.style.transition = 'ease-in-out 1s';

      miniImgs.forEach(function(miniImg) {
        miniImg.style.opacity = '1';
      });

      pale1.style.transition = 'ease-in-out 1s';
      vanilla1.style.transition = 'ease-in-out 1.4s';
      ivory1.style.transition = 'ease-in-out 1.8s';
      sand1.style.transition = 'ease-in-out 2.2s';
      beige1.style.transition = 'ease-in-out 2.6s';

});//miniimg 이름을 가진 모든 div를 querySelectorAll를 이용해 불러와 페이지 로드 시 서서히 나타나도록, miniimg안에 있는 5개 div태그를 하나씩 불러와 시간차로 나타나도록 


const roundLogo = document.querySelector('.roundlogo');

document.addEventListener('scroll', function() {
  let roundLogoTop = roundLogo.getBoundingClientRect().top;
  let roundLogoMid = roundLogoTop + roundLogo.getBoundingClientRect().height/3;
  let windowMid = window.innerHeight/3;

  if(Math.abs(windowMid - roundLogoMid)< 400){
    roundLogo.style.transform = 'rotate(0deg)';
    roundLogo.style.opacity = '1';
  }else{
    roundLogo.style.transform = 'rotate(-100deg)';
    roundLogo.style.opacity = '0';
  }
});//windowmid와 roundlogomid의 차이의 절대값이 400보다 작을 때(스크롤 위치가 이미지의 중간쯤 왔을 때) 이미지가 서서히 나타나며 회전하도록 

const ciboxes = document.querySelectorAll('.cibox');
const colorInfoTitle = document.querySelector('.colorinfo h5');
const colorInfoText = document.querySelector('.colorinfo p');
const bt1 = document.querySelector('.P19');
const bt2 = document.querySelector('.V20');
const bt3 = document.querySelector('.I21');
const bt4 = document.querySelector('.S22');
const bt5 = document.querySelector('.B23');

const info=[
{
    mainT:'19 Cover Pale',
    subT:'Neutral pink base thats clear and bright'
},
{
    mainT:'20 Cover Vanilla',
    subT:'Clear and bright neutral yellow base'
}
,
{
    mainT:'21 Cover Ivory',
    subT:'Ivory neutral pink base'
}
,
{
    mainT:'22 Cover Sand',
    subT:'Calm neutral yellow base'
}
,
{
    mainT:'23 Cover Beige',
    subT:'Neutral yellow base with an olive tint'
}
]

bt1.addEventListener("click", function () {
   bt1.style.backgroundColor = "#6D665E"
   bt2.style.backgroundColor = "#ffffff00"
   bt3.style.backgroundColor = "#ffffff00"
   bt4.style.backgroundColor = "#ffffff00"
   bt5.style.backgroundColor = "#ffffff00"
   colorInfoTitle.innerHTML =info[0].mainT
   colorInfoText.innerHTML =info[0].subT
   });

bt2.addEventListener("click", function () {
   bt1.style.backgroundColor = "#ffffff00"
   bt2.style.backgroundColor = "#6D665E"
   bt3.style.backgroundColor = "#ffffff00"
   bt4.style.backgroundColor = "#ffffff00"
   bt5.style.backgroundColor = "#ffffff00"
   colorInfoTitle.innerHTML =info[1].mainT
   colorInfoText.innerHTML =info[1].subT
   });

bt3.addEventListener("click", function () {
   bt1.style.backgroundColor = "#ffffff00"
   bt2.style.backgroundColor = "#ffffff00"
   bt3.style.backgroundColor = "#6D665E"
   bt4.style.backgroundColor = "#ffffff00"
   bt5.style.backgroundColor = "#ffffff00"
   colorInfoTitle.innerHTML =info[2].mainT
   colorInfoText.innerHTML =info[2].subT
   });

bt4.addEventListener("click", function () {
   bt1.style.backgroundColor = "#ffffff00"
   bt2.style.backgroundColor = "#ffffff00"
   bt3.style.backgroundColor = "#ffffff00"
   bt4.style.backgroundColor = "#6D665E"
   bt5.style.backgroundColor = "#ffffff00"
   colorInfoTitle.innerHTML =info[3].mainT
   colorInfoText.innerHTML =info[3].subT
   });

bt5.addEventListener("click", function () {
   bt1.style.backgroundColor = "#ffffff00"
   bt2.style.backgroundColor = "#ffffff00"
   bt3.style.backgroundColor = "#ffffff00"
   bt4.style.backgroundColor = "#ffffff00"
   bt5.style.backgroundColor = "#6D665E"
   colorInfoTitle.innerHTML =info[4].mainT
   colorInfoText.innerHTML =info[4].subT
   });//info를 통해 각 자리에 들어갈 문구를 정의해서 리스트화 해 두고 클릭 시 지정해 둔 순서의 문구로 변경되도록 

document.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    const goodskin = document.querySelector('.goodskin');
    goodskin.style.width = mouseX + 'px';
  });
//badskin태그와 goodskin태그를 겹치게 둔 뒤에 goodskin의 상위 태그인 skinimg 위로 커서가 올라가면 goodskin의 opacity가 1이 되도록
//그 이후엔 event.clientX를 이용해 마우스 X좌표를 알아내고 mouseX로 지정하여 goodskin의 width값이 마우스의 x값에 따라 변경되도록
//css에서 goodskin의 이미지를 background-image로 삽입하고 background의 size및 position을 조정하여 goodskin태그의 width값이 바뀌어도 이미지가 같은 자리를 유지하도록 함

const sec5Img1 = document.querySelector('.sec5img1');
const sec5Img2 = document.querySelector('.sec5img2');

document.addEventListener('scroll', function() {
  let sec5Img2Top = sec5Img2.getBoundingClientRect().top;
  let sec5Img2Mid = sec5Img2Top + sec5Img2.getBoundingClientRect().height/2;
  let windowMid = window.innerHeight/4;

  if(Math.abs(windowMid - sec5Img2Mid)< 500){
    sec5Img2.style.opacity = '1';
    sec5Img1.style.opacity = '1';
  }else{
    sec5Img2.style.opacity = '0';
    sec5Img1.style.opacity = '0';
  }
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



