const input = document.getElementById('query');
const form = document.getElementById('form');
const results = document.querySelector('.main-container__results');

//Call API to search book
async function searchBook(book) {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${book}`
  );
  const data = await response.json();
  createBook(data.items);
}

//Add books into results container
function createBook(books) {
  let output = '';
  books.forEach((book) => {
    output += `
        <div class="main-container__results__book">
            <img
            src="${book.volumeInfo.imageLinks.thumbnail}"
            alt="book cover"
            class="main-container__results__book__cover"
            />
        </div>`;
  });

  results.innerHTML = output;
}

//Event Listeners
input.addEventListener('keydown', (e) => {
  if ((e.keyCode === 13) & (input.value.trim() !== '')) {
    searchBook(input.value);
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
});
