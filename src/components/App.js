import React from 'react'
import MovieItem from './MovieItem';

class App extends React.Component {

    constructor(props) {
        super(props);
      
        let movie = {
            title : "Avengers : Endgame",
            rating : 9.0,
            overview : "Last movie in Avengers franchise",
            image : "https://images-na.ssl-images-amazon.com/images/I/71tl2F9GRxL._AC_SL1000_.jpg"
        };

        this.state = {
            movie : movie
        };
    }

    render() {
        let { movie } = this.state;

        return (
            <div>
                <MovieItem data={movie}/>
            </div>
        )
    }
}

export default App;