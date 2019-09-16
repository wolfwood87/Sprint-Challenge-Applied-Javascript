// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cards = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((results) => {
        console.log(results);
        const newArray = Object.values(results.data.articles);
        console.log(newArray);
        newArray.forEach((item) => {
            item.forEach((indItem) => {
                cards.appendChild(newCard(indItem));
            })       
        })
    })
    .catch((err) => {
        console.log(err);
    })

function newCard(data) {
    //create Elements
    const card = document.createElement('div');
    const line = document.createElement('div');
    const author = document.createElement('div');
    const cont = document.createElement('div');
    const pic = document.createElement('img');
    const name = document.createElement('span');

    //append Elements to card
    card.appendChild(line);
    card.appendChild(author);
    author.appendChild(cont);
    cont.appendChild(pic);
    author.appendChild(name);

    //add classes to Elements
    card.classList.add('card');
    line.classList.add('headline');
    author.classList.add('author');
    cont.classList.add('img-container')

    //add content
    line.textContent = data.headline;
    pic.src = data.authorPhoto;
    name.textContent = data.authorName;

    return card;
}