const revealEle = document.querySelectorAll("[data-reveal");
console.log(revealEle);
const scrollReveal = function() {
  for (let i = 0, len = revealEle.length; i < len; i++) {
    const isEleOnScreen =
      revealEle[i].getBoundingClientRect().top < window.innerHeight;
    console.log(isEleOnScreen);
    if(isEleOnScreen){
        revealEle[i].classList.add('revealed');
    }else{
        revealEle[i].classList.remove('revealed');
    }
  }
};
window.addEventListener('scroll',scrollReveal)