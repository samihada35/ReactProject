import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
    { id: 1, message: "hi", likeCount: 26 },
    { id: 2, message: "My name is Alex", likeCount: 16 },
    { id: 3, message: "Glad to see u", likeCount: 21 }
];

let dialogData = [
    { id: 1, messagePreview: "hi", name: "Igor" },
    { id: 2, messagePreview: "hi!", name: "Vlad" },
    { id: 3, messagePreview: "hi, no?", name: "Ilia" },
    { id: 4, messagePreview: "hi, Yury", name: "Jane" }
];

  let messageData = [
    { id: 1, message: "hi", name: "Igor" },
    { id: 2, message: "hi!", name: "Vlad" },
    { id: 3, message: "hi, no?", name: "Ilia" }
];

ReactDOM.render(<App postData={postData} messageData={messageData} dialogData={dialogData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
