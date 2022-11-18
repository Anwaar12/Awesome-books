import {
  removeBook,
  addBook,
  getBooksFromLs,
  displayBooks,
} from './modules/modules.js';
import Book, { addBooksToLs } from './modules/Books.js';
import { removeBookFromLs, insertElements } from './modules/removebooks.js';
import { DateTime } from './modules/luxon.js';

insertElements();

const stringInput = '2021-06-10T02:20:50+00:00';
const timeZone = 'America/Los_Angeles';
const dateObject = new DateTime(stringInput).toLocaleString('en-US', {
  timeZone,
});
document.querySelector('.times').innerHTML = dateObject;

document.addEventListener('DOMContentLoaded', displayBooks);

const titleField = document.querySelector('.title');
const autherField = document.querySelector('.auther');
const addBookBtn = document.querySelector('.add-book');
const successMsg = document.querySelector('.book-added');
const errorMsg = document.querySelector('.error-msg');

addBookBtn.addEventListener('click', () => {
  if (titleField.value !== '' && autherField.value !== '') {
    const newBook = new Book(Date.now(), titleField.value, autherField.value);
    addBook(newBook);

    titleField.value = '';
    autherField.value = '';

    successMsg.classList.add('show-message');
    window.setTimeout(() => {
      successMsg.classList.remove('show-message');
    }, 2000);
    errorMsg.classList.remove('show-message');

    addBooksToLs(newBook);
  } else {
    errorMsg.classList.add('show-message');
    window.setTimeout(() => {
      errorMsg.classList.remove('show-message');
    }, 2000);
    successMsg.classList.remove('show-message');
  }
});

const booksWrapper = document.querySelector('.books-wrapper');

booksWrapper.addEventListener('click', (e) => {
  removeBook(e.target);

  removeBookFromLs(e.target.parentElement.dataset.id);
});

const navList = document.querySelector('.nav-list');

navList.addEventListener('click', (e) => {
  const navElements = document.querySelectorAll('.active');
  navElements.forEach((element) => {
    element.classList.remove('active');
  });
  e.target.className += ' active';
});

const navPills = document.querySelectorAll('.nav-pill');
const slides = document.querySelectorAll('.display-item');

navPills.forEach((pill) => {
  pill.addEventListener('click', (e) => {
    const tar = e.target.classList;
    slides.forEach((slide) => {
      if (slide.classList[1] === tar[1]) {
        slide.classList.remove('hidden');
      } else {
        slide.classList.add('hidden');
      }
    });
  });
});
