import React from 'react';
import ReactDOM from 'react-dom';

// CSS 
import './index.css';

import {books} from './books';
import Book from './Book';

function BookList() {
    // const newBooks = books.map((book, index) => <Book key={index} bookAttr={book}/>);
    // console.log(newBooks);
    return (
     <section className='booklist'>
       {
         books.map((book, index) => <Book key={index} {...book}/>)
       }
     </section>
    );
}

ReactDOM.render(<BookList />, document.getElementById('root'));