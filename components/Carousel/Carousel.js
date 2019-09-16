/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel() {
  //Create new Elements
  const car = document.createElement('div');
  const left = document.createElement('div');
  const pic = [document.createElement('img'), 
  document.createElement('img'), 
  document.createElement('img'), 
  document.createElement('img')];
  const right = document.createElement('div');
  
  //add elements to carousel
  car.appendChild(left);
  car.appendChild(pic[0]);
  car.appendChild(pic[1]);
  car.appendChild(pic[2]);
  car.appendChild(pic[3]);
  car.appendChild(right);

  //add classes to elements
  car.classList.add('carousel');
  left.classList.add('left-button');
  right.classList.add('right-button');

  //add content to elements
  left.textContent = ' < ';
  right.textContent = ' > ';
  pic[0].src = "./assets/carousel/mountains.jpeg";
  pic[1].src = "./assets/carousel/computer.jpeg";
  pic[2].src = "./assets/carousel/trees.jpeg";
  pic[3].src = "./assets/carousel/turntable.jpeg";
  
  pic[0].style.display = 'block';

  let picNum = 0;
  right.addEventListener('click', (event) => {
   pic[picNum].style.display = 'none';
   if(picNum >= pic.length - 1){
     picNum = 0;
   }
   else {
    picNum++;
   }
   pic[picNum].style.display = 'block';
  } )

  left.addEventListener('click', (event) => {
    pic[picNum].style.display = 'none';
    if(picNum <= 0){
      picNum = pic.length - 1;
    }
    else {
     picNum--;
    }

    pic[picNum].style.display = 'block';
   } )

  //return element
  return car;
}

const carContainer = document.querySelector('.carousel-container');

carContainer.appendChild(createCarousel());