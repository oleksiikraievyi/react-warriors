import React from "react"
import ReactDOM from "react-dom"
import App from './components/App'
import { moviesData } from './moviesData';

ReactDOM.render(<App movies={moviesData} />, document.getElementById('root'));