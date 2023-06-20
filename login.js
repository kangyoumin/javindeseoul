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
