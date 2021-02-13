function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => {renderBooks(json); totalPageCount(json); fifthInTheSeries(json); console.log(json)});
}



function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

function lateCharacter(books) {
  const main = document.querySelector('main')

  books.forEach(book => {
    book.characters.forEach(character => {
      
    })
  })
}

function fifthInTheSeries(books) {
  const main = document.querySelector('main')
  let book = books[5]
    const h1 = document.createElement('h1')
    h1.innerHTML = book.name
    main.appendChild(h1)
}


function totalPageCount(books) {
  let pageTotal = 0
  books.forEach(book => {
    pageTotal += parseInt(book.numberOfPages)
  })
  const main = document.querySelector('main')
  const h2 = document.createElement('h2')
  h2.innerHTML = pageTotal
  main.appendChild(h2)
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

