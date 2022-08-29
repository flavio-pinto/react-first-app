import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return <img src={this.props.srcUrl} alt={this.props.altTxt} />
  }
}

export default ImageComponent;