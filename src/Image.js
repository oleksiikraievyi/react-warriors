import React from "react";

class Image extends React.Component {

    render() {
        let {src, alt} = this.props;

        return (
            <img src={src} alt={alt} width="200px" height="200px"></img>
        )
    }
}

export default Image;