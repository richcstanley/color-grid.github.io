{/* <meta charset="UTF-8"></meta>
<meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */}

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function colorchange(box)
        {
            // var colors = ["red","green","blue"];
            // var randomcolor= colors[Math.floor(Math.random()*colors.length)];
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            document.getElementById(box).style.backgroundColor = ["rgb(",r,",",g,",",b,")"].join("");
        }

