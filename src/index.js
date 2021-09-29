import React from 'react';
import ReactDOM from 'react-dom';

function Greeting() {
    return (
        <>
            <div>
                <h1>hello world!</h1>
                <ul>
                    <li>
                        <a href="#">hello world</a>
                    </li>
                    <img src="" alt="" />
                </ul>
            </div>
        </>
    );
}

// const Greeting = () => {
//     return React.createElement('div', {}, React.createElement('h1', {}, 'something went wrong!'));
// }

ReactDOM.render(<Greeting />, document.getElementById('root'));