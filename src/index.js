import React from 'react';
import ReactDOM from 'react-dom';

// CSS 
import './index.css';

function BookList() {
    return (
     <section className='booklist'>
         <Books />
         <Books />
         <Books />
         <Books />
     </section>
    );
}

const Books = () => {
    return (
    <article className='book'>
       <Image />
       <Title /> 
       <Author />
    </article>
    );
}

const Image = () => <img 
src="https://images-na.ssl-images-amazon.com/images/I/71xUvuJiqgL._AC_UL200_SR200,200_.jpg" 
alt="some book" />

const Title = () => <h1>Love you from the sun and moon </h1>; 
const Author = () => (  
    <h4 style={{color: 'lime', fontSize: '0.75rem',
        margin: '0.25rem'}}>
        Rejan Bajracharya
    </h4>
);

ReactDOM.render(<BookList />, document.getElementById('root'));