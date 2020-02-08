import React from 'react';
import ReactDOM from 'react-dom';
import Sideimage from './Sideimage.jsx';
import Modal from './Modal.jsx';
import Slideshow from './Slideshow.jsx';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.sideBarClick = this.sideBarClick.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.imageHelper = this.imageHelper.bind(this);
    this.state = {
      showModal: false,
      images: [
        'https://codecadetsphotodemo.s3-us-west-1.amazonaws.com/white.png',
      ],
      imgMain:'https://codecadetsphotodemo.s3-us-west-1.amazonaws.com/white.png',
      imgMore: [],
      active: 'one'
    };
  }

  componentDidMount() {
    var x = this;
    var prodId = Math.floor(Math.random() * 3) + 1;
    Axios.get('http://localhost:3000/img?id=' + prodId)
    .then(function (response) {
      x.setState({
        images: response.data[0].urls,
        imgMain: response.data[0].urls[0]
      });
    });
  }

  imageHelper(num){
    if (this.state.images[num]){
      return this.state.images[num];
    } else {
      return 'https://codecadetsphotodemo.s3-us-west-1.amazonaws.com/white.png';
    }
  }

  componentWillUnmount() {

  }

  sideBarClick(newMain, name) {
    this.setState({
      active: name,
      imgMain: newMain
    });
  }

  showModal() {
    this.setState({
      showModal: true
    });
  }

  hideModal() {
    this.setState({
      showModal: false
    });
  };

  render() {
    const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <Slideshow hideModal={this.hideModal} images={this.state.images} />
        </div> 
      </Modal>
    ) : null;
    return (
      <div>      
        <div className="container">
          <Sideimage name={'one'} active={this.state.active} imageUrl={this.imageHelper(0)} sideBarClick={this.sideBarClick} />
          <Sideimage name={'two'} active={this.state.active} imageUrl={this.imageHelper(1)} sideBarClick={this.sideBarClick} />
          <Sideimage name={'three'} active={this.state.active} imageUrl={this.imageHelper(2)} sideBarClick={this.sideBarClick} />
          <Sideimage name={'four'} active={this.state.active} imageUrl={this.imageHelper(3)} sideBarClick={this.sideBarClick} />
          <figure id='five'>
            <img src={this.imageHelper(4)} alt="Gallery image 5" className="image"></img>
          </figure>
          <div id='shade'></div>
          <div id='text' onClick={this.showModal} >+ more</div>
          <figure id='main'>
            <img src={this.state.imgMain} alt="Gallery image 6" className="image"></img>
          </figure>
        </div>
          {modal}
      </div>
    );
  }
}

export default App;