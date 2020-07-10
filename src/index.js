import React from "react"
import ReactDOM from "react-dom"
import MovieItem from "./components/MovieItem"

let movie = {
    title : "Avengers : Endgame",
    rating : 9.0,
    overview : "Last movie in Avengers franchise",
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