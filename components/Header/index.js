// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    //create elements
    const head = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    //add elements to branch
    head.appendChild(date);
    head.appendChild(title);
    head.appendChild(temp);

    //add classes to elements
    head.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //add content
    date.textContent = 'SMARCH 28, 2019';
    title.textContent = 'Lambda Times';
    temp.textContent = '98°';

    //return head
    return head;
}

const container = document.querySelector('.header-container');
container.appendChild(Header());
