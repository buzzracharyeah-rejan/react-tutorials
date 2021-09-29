import React from 'react';
import ReactDOM from 'react-dom';

// CSS 
import './index.css';

const books = [
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/71xUvuJiqgL._AC_UL200_SR200,200_.jpg', 
        title: 'It ends with us: A novel', 
        author: 'Paperback'
    },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/51MB5SD5GIL._AC_UL200_SR200,200_.jpg', 
        title: 'Little Blue\'s Truck\'s Halloween', 
        author: 'Alice Shirtle'
        },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/61NdJMwAThS._AC_UL200_SR200,200_.jpg', 
        title: 'The Body keeps the score: Brain, Mind and Soul', 
        author: 'Besser Van Der Kolk, MD'
    }
];
// const title = 'I love you to the moon and back'; 
// const author = 'rejan bajracharya'; 
// const img = 'https://images-na.ssl-images-amazon.com/images/I/71xUvuJiqgL._AC_UL200_SR200,200_.jpg'; 

// const names = ['rejan', 'rajive', 'god']; 

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

const Book = (props) => {
    console.log({...props});
    const {img, title, author} = props;
    return (
    <article className='book'>
    <img src={img} alt='img'/>
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
      {/* <p>{props.name}</p>
      <p>{props.title}</p>
      <p>{props.number}</p> */}
    </article>
    );
}


ReactDOM.render(<BookList />, document.getElementById('root'));