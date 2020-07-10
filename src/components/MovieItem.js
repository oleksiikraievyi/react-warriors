import React from "react"
import Image from "./Image";

class MovieItem extends React.Component {

    constructor() {
        super();

        this.state = { liked : false, show : false };
    }

    like = () => {
        let state = this.state;
        state.liked = !state.liked;
        this.setState(state);
    }

    showOverview = () => {
        let state = this.state;
        state.show = !state.show;
        this.setState(state);
    };

    render() {
        let {title, rating, image, overview} = this.props.data;

        return (
            <div className="movie-item">
                <Image src={image} alt={title} />
                <p>{title}</p>
                <p>{rating}</p>
                <div className="buttons-wrapper">
                    <button type="button" className={this.state.liked ? "btn btn-liked" : "btn"} onClick={this.like}>
                        Like
                    </button>
                    <button type="button" className={ this.state.like  } onClick={this.showOverview}>
                        {this.state.show ? "Hide" : "Show"} Overview
                    </button>
                </div>
                {this.state.show === true ? <p>{overview}</p> : null}
            </div>
        );
    }
}

export default MovieItem;