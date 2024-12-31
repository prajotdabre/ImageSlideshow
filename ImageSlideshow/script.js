const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const foodName = document.querySelector('.food-name')
let currSlide = 0

function iterateSlide(pointer){
  slides.forEach((slide,i)=>{
    slide.classList.remove('active');
    if(i===pointer){
      slide.classList.add('active')

      const foodName = slide.querySelector('.food-name')
      const imgAlt = slide.querySelector('img').alt
      foodName.textContent = imgAlt;
    }
  })
}

function nextSlide(){
  currSlide = (currSlide + 1) % slides.length;
  iterateSlide(currSlide);
}

function toggleSlide(direction){
   currSlide = (currSlide+direction+slides.length) % slides.length;
   iterateSlide(currSlide);
}

prevBtn.addEventListener('click',()=>{toggleSlide(-1)})
nextBtn.addEventListener('click',()=>{toggleSlide(1)})
iterateSlide(currSlide);
setInterval(nextSlide,3500)