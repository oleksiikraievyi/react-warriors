import React from "react"
import Image from "./Image";

class MovieItem extends React.Component {

    render() {
        let {title, rating, image} = this.props.data;

        return (
            <div>
                <Image src={image} alt={title} />
                <p>{title}</p>
                <p>{rating}</p>
            </div>
        );
    }
}

export default MovieItem;