import React from "react"
import ReactDOM from "react-dom"
import MovieItem from "./MovieItem"

let movie = {
    title : "Avengers : Endgame",
    rating : 9.0,
    image : "https://images-na.ssl-images-amazon.com/images/I/71tl2F9GRxL._AC_SL1000_.jpg"
};

function App() {
    return (
        <div>
            <MovieItem data={movie}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));