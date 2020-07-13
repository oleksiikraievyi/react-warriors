import React from 'react'
import MovieItem from './MovieItem';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            movies : props.movies
        };
    }

    removeMovie = (movieId) => {
        var updatedMovies = this.state.movies.filter(movie => movie.id !== movieId);
        this.setState({ movies : updatedMovies });
    }

    render() {
        let { movies } = this.state;

        return (
            <div>
                {movies.map(movie => 
                    <MovieItem 
                    key={movie.id} 
                    movie={movie}
                    removeMovie={() => this.removeMovie(movie.id)} />)}
            </div>
        )
    }
}

export default App;