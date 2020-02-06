import React from 'react';

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.left = this.left.bind(this);
    this.right = this.right.bind(this);
    this.state = {
      currentImage: 0
    }
  }

  right() {
    if (this.state.currentImage === this.props.images.length -1 ) {
      this.setState({
        currentImage: 0
      });
    } else {
      this.setState({
        currentImage: this.state.currentImage + 1
      });
    }
  }

  left() {
    if (this.state.currentImage === 0 ) {
      this.setState({
        currentImage: this.props.images.length - 1
      });
    } else {
      this.setState({
        currentImage: this.state.currentImage - 1
      });
    }
  }

  render() {
    var x = this.state.currentImage;
    return (
      <div>
        <img id='modalExitButton' onClick={this.props.hideModal} src='exitModal.png' />
        <img id='left' src='left.png' onClick={this.left} ></img>
        <img id='right' src='right.png' onClick={this.right} ></img>
        <img id='modalDisplay' src={this.props.images[x]} />
      </div>
    );
  }
}

export default Slideshow;