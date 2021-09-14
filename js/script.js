let sliderImg = [
     'imgSlider/pic1.jpg',
     'imgSlider/pic2.jpg',
     'imgSlider/pic3.jpg',
     'imgSlider/pic4.jpg',
     'imgSlider/pic5.jpg',
     'imgSlider/pic6.jpg',
     'imgSlider/pic7.jpg',
     'imgSlider/pic8.jpg',
     'imgSlider/pic9.jpg',
     'imgSlider/pic10.jpg'
];

const fancySlider = document.getElementById('fancy-slider');
let sliderCounter = 0;
setInterval(() => {
     if (sliderCounter >= sliderImg.length) {
          sliderCounter = 0;
     }
     const imgUrl = sliderImg[sliderCounter];
     fancySlider.setAttribute('src', imgUrl);
     sliderCounter++;
}, 1000)