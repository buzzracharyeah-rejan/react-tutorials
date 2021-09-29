import React from 'react'; 

const Book = ({img, title, author}) => {
     //eventHandlers 
    // onClick, onMouseOver

    const clickHandler = (event) => {
        console.log('clicked');
    }

    const complexExample = (author) => {
       console.log(author);
    }
    return (
        <article className='book' >
            <img src={img} alt='img'/>
            <h1>{title}</h1>
            <h4>{author}</h4>
            <button type='button' onClick={clickHandler}>Click me</button>
            <button type='button' onClick={() => complexExample(author)}>Get me an author</button>
        </article>
    );
}

export default Book;