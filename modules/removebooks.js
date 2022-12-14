import { getBooksFromLs } from './modules.js';

export const removeBookFromLs = (bookId) => {
  const booksList = getBooksFromLs();
  booksList.forEach((book, index) => {
    if (book.id === Number(bookId)) {
      booksList.splice(index, 1);
    }
  });
  localStorage.setItem('books-list', JSON.stringify(booksList));
};

export const insertElements = () => {
  const maindiv = document.createElement('div');
  const element = `
    <header>
    <h1>Awesome Books</h1>
    <nav>
      <ul class="nav-list">
        <li class="nav-pill list active">List</li>
        <li class="nav-pill add-new">Add new</li>
        <li class="nav-pill contact">Contact</li>
      </ul>
      <br/>
    </nav>
    </header>
       
    <main>
    <div class="gundi">
    <div></div>
    <div></div>
    <div class="times"></div>
    </div>
    <ul class="display-item list books-wrapper">
      <h2>All awesome books</h2>
      <h3 class="alert-empty-list">
        There is no books in the list please add some!
      </h3>
    </ul>
    
    <div class="display-item add-new books-generator hidden">
      <h2>Add a new book</h2>
      <input class="title" type="text" placeholder="Title" />
      <input class="auther" type="text" placeholder="Auther" />
      <button class="add-book">Add</button>
    </div>
    <div class="book-added">Book Added Successfuly</div>
    <div class="error-msg">Please Fill in all the form fields</div>
    
    <section class="display-item contact hidden">
      <h2>Contact information</h2>
      <h3>Do you have any questions or you just want to say "Hello" ?</h3>
      <p>You can reach out to me</p>
      <ul>
        <li>My email anwaarsalam12@gmail.com</li>
        <li>My phone number +92 3169085544</li>
        <li>My github <a href="https://github.com/Anwaar12">Anwaar12</a></li>
      </ul>
    </section>
    <br>
    </main>
    <footer>
    <h3>
      Copyright
      <a href="https://github.com/z4cope" target="_blank">@Anwaar12</a>
    </h3>
    <div class="dates"></div>
    </footer>
    `;
  maindiv.innerHTML = element;
  document.querySelector('body').appendChild(maindiv);
};
