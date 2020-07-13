import React from "react"

class MovieItem extends React.Component {

    render() {
        let {title} = this.props.movie;

        return (
            <div>
                <p>{title}</p>
                <div>
                    <button type="button" onClick={this.props.removeMovie}>Delete</button>
                </div>
            </div>
        );
    }
}

export default MovieItem;